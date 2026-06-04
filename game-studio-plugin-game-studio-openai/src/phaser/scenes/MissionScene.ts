import Phaser from "phaser";
import { getActiveMission, type BlockSpec, type GameState, type TargetSpec } from "../../game/simulation/state";
import { chooseMission, requestHint, resetMission, tryPlaceBlock } from "../../game/simulation/systems/missionSystem";

type BlockView = Phaser.GameObjects.Container & {
  blockId: string;
  homeX: number;
  homeY: number;
};

export class MissionScene extends Phaser.Scene {
  private state!: GameState;
  private ship!: Phaser.GameObjects.Container;
  private blocks = new Map<string, BlockView>();
  private targets = new Map<string, Phaser.GameObjects.Container>();
  private targetZones = new Map<string, Phaser.GameObjects.Zone>();
  private rewardStars: Phaser.GameObjects.GameObject[] = [];
  private starLayer!: Phaser.GameObjects.Graphics;

  constructor() {
    super("MissionScene");
  }

  create() {
    this.state = this.game.registry.get("starblockState") as GameState;
    this.starLayer = this.add.graphics();
    this.drawScene();
    this.scale.on("resize", this.drawScene, this);
    this.input.on("dragstart", (_pointer: Phaser.Input.Pointer, block: BlockView) => this.startTow(block));
    this.input.on("drag", (_pointer: Phaser.Input.Pointer, block: BlockView, dragX: number, dragY: number) => {
      block.setPosition(dragX, dragY);
      this.ship.setPosition(dragX - 82, dragY - 42);
    });
    this.input.on("dragend", (_pointer: Phaser.Input.Pointer, block: BlockView) => this.endTow(block));
    this.game.events.on("ui-action", this.handleUiAction, this);
  }

  private handleUiAction(action: { type: string; missionId?: string }) {
    if (action.type === "chooseMission" && action.missionId) {
      chooseMission(this.state, action.missionId);
      this.drawScene();
    }
    if (action.type === "reset") {
      resetMission(this.state);
      this.drawScene();
    }
    if (action.type === "hint" || action.type === "readAloud") {
      requestHint(this.state);
      this.refreshHud();
      this.refreshHints();
    }
  }

  private drawScene = () => {
    this.children.removeAll();
    this.blocks.clear();
    this.targets.clear();
    this.targetZones.clear();
    this.rewardStars = [];
    this.starLayer = this.add.graphics();

    const mission = getActiveMission(this.state);
    const { width, height } = this.scale;
    this.drawBackground(width, height);
    this.add.text(width * 0.04, height * 0.06, mission.world, {
      fontFamily: "Arial",
      fontSize: `${Math.max(18, width * 0.025)}px`,
      color: "#eaf8ff",
      fontStyle: "bold",
    }).setAlpha(0.8);
    this.ship = this.createShip(width * 0.16, height * 0.52);

    mission.targets.forEach((target) => this.createTarget(target, width, height));
    mission.blocks.forEach((block, index) => this.createBlock(block, index, width, height));
    this.refreshHints();
    this.refreshHud();
  };

  private drawBackground(width: number, height: number) {
    const bg = this.add.graphics();
    bg.fillGradientStyle(0x071b2e, 0x0a2342, 0x1a3a5f, 0x0b1024, 1);
    bg.fillRect(0, 0, width, height);

    for (let i = 0; i < 80; i += 1) {
      const x = ((i * 97) % width) + 4;
      const y = ((i * 53) % height) + 4;
      const size = (i % 3) + 1;
      bg.fillStyle(i % 5 === 0 ? 0xfff3b0 : 0xbde0fe, 0.75);
      bg.fillCircle(x, y, size);
    }

    const planet = this.add.graphics();
    planet.fillStyle(0x4cc9f0, 0.16);
    planet.fillCircle(width * 0.82, height * 0.15, Math.min(width, height) * 0.18);
    planet.lineStyle(3, 0xfefae0, 0.22);
    planet.strokeEllipse(width * 0.82, height * 0.15, width * 0.42, height * 0.1);
  }

  private createShip(x: number, y: number) {
    const ship = this.add.container(x, y);
    const body = this.add.graphics();
    body.fillStyle(0xfefae0, 1);
    body.fillTriangle(54, 0, -42, -30, -34, 30);
    body.fillStyle(0x00b4d8, 1);
    body.fillEllipse(-10, 0, 54, 42);
    body.fillStyle(0xff006e, 1);
    body.fillTriangle(-38, -22, -74, -40, -48, -4);
    body.fillTriangle(-38, 22, -74, 40, -48, 4);
    body.fillStyle(0xffd166, 1);
    body.fillCircle(8, 0, 12);
    const beam = this.add.graphics();
    beam.lineStyle(4, 0x9bf6ff, 0.28);
    beam.lineBetween(52, 0, 130, 42);
    ship.add([beam, body]);
    return ship;
  }

  private createTarget(target: TargetSpec, width: number, height: number) {
    const x = width * target.x;
    const y = height * target.y;
    const targetView = this.add.container(x, y);
    const ring = this.add.graphics();
    ring.lineStyle(4, 0x9bf6ff, 0.8);
    ring.strokeRoundedRect(-56, -44, 112, 88, 14);
    ring.fillStyle(0x001d3d, 0.34);
    ring.fillRoundedRect(-52, -40, 104, 80, 12);
    const label = this.add.text(0, 0, target.label, {
      fontFamily: "Arial",
      fontSize: "18px",
      color: "#ffffff",
      fontStyle: "bold",
    }).setOrigin(0.5);
    targetView.add([ring, label]);
    const zone = this.add.zone(x, y, 124, 100);
    this.targetZones.set(target.id, zone);
    this.targets.set(target.id, targetView);
  }

  private createBlock(block: BlockSpec, index: number, width: number, height: number) {
    const columns = Math.max(3, Math.floor(width / 150));
    const x = width * 0.12 + (index % columns) * 92;
    const y = height * 0.76 + Math.floor(index / columns) * 72;
    const view = this.add.container(x, y) as BlockView;
    view.blockId = block.id;
    view.homeX = x;
    view.homeY = y;

    const tile = this.add.graphics();
    tile.fillStyle(Phaser.Display.Color.HexStringToColor(block.color).color, 1);
    tile.fillRoundedRect(-34, -28, 68, 56, 10);
    tile.lineStyle(3, 0xffffff, 0.82);
    tile.strokeRoundedRect(-34, -28, 68, 56, 10);
    const text = this.add.text(0, 0, block.label, {
      fontFamily: "Arial",
      fontSize: block.label.length > 4 ? "13px" : "24px",
      color: "#12263a",
      fontStyle: "bold",
    }).setOrigin(0.5);
    view.add([tile, text]);
    view.setSize(76, 64);
    view.setInteractive({ draggable: true, cursor: "grab" });
    this.blocks.set(block.id, view);
  }

  private startTow(block: BlockView) {
    block.setDepth(20);
    this.tweens.add({ targets: block, scale: 1.1, duration: 120 });
  }

  private endTow(block: BlockView) {
    const targetId = this.findDropTarget(block.x, block.y);
    if (!targetId) {
      this.returnBlock(block);
      return;
    }
    const result = tryPlaceBlock(this.state, block.blockId, targetId);
    if (result.status === "accepted") {
      const zone = this.targetZones.get(result.target.id)!;
      this.tweens.add({ targets: block, x: zone.x, y: zone.y, scale: 0.82, duration: 180, ease: "Back.easeOut" });
      block.disableInteractive();
      this.sparkle(zone.x, zone.y);
    } else {
      this.returnBlock(block);
      this.cameras.main.shake(120, 0.004);
    }
    this.refreshHints();
    this.refreshHud();
  }

  private findDropTarget(x: number, y: number) {
    for (const [id, zone] of this.targetZones) {
      if (Phaser.Geom.Rectangle.Contains(zone.getBounds(), x, y)) {
        return id;
      }
    }
    return undefined;
  }

  private returnBlock(block: BlockView) {
    this.tweens.add({ targets: block, x: block.homeX, y: block.homeY, scale: 1, duration: 220, ease: "Sine.easeOut" });
  }

  private refreshHints() {
    this.targets.forEach((target) => {
      this.tweens.killTweensOf(target);
      target.setScale(1);
    });
    if (this.state.hintLevel === 0) {
      return;
    }
    const mission = getActiveMission(this.state);
    const openTarget = mission.targets.find((target) => (this.state.placements[target.id]?.length ?? 0) < target.accepts.length);
    if (!openTarget) {
      return;
    }
    const target = this.targets.get(openTarget.id);
    if (target) {
      this.tweens.add({ targets: target, scale: 1.08, yoyo: true, repeat: -1, duration: 540, ease: "Sine.easeInOut" });
    }
  }

  private sparkle(x: number, y: number) {
    for (let i = 0; i < 9; i += 1) {
      const star = this.add.star(x, y, 5, 5, 12, 0xfff3b0, 0.9);
      this.rewardStars.push(star);
      this.tweens.add({
        targets: star,
        x: x + Math.cos(i) * 70,
        y: y + Math.sin(i) * 48,
        alpha: 0,
        scale: 0.2,
        duration: 520,
        onComplete: () => star.destroy(),
      });
    }
  }

  private refreshHud() {
    this.game.events.emit("state-changed", this.state);
  }
}
