import Phaser from "phaser";
import "./styles.css";
import { missions } from "./game/content/missions";
import { createInitialState, getActiveMission, type GameState } from "./game/simulation/state";
import { MissionScene } from "./phaser/scenes/MissionScene";

const state = createInitialState(missions);

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "game-wrap",
  backgroundColor: "#071b2e",
  scale: {
    mode: Phaser.Scale.RESIZE,
    width: 960,
    height: 640,
  },
  render: {
    antialias: true,
    pixelArt: false,
  },
  scene: [MissionScene],
};

const game = new Phaser.Game(config);
game.registry.set("starblockState", state);

const hud = {
  world: document.querySelector<HTMLSpanElement>("#world-name")!,
  grade: document.querySelector<HTMLElement>("#grade-name")!,
  title: document.querySelector<HTMLHeadingElement>("#mission-title")!,
  goal: document.querySelector<HTMLParagraphElement>("#mission-goal")!,
  coach: document.querySelector<HTMLParagraphElement>("#coach-line")!,
  bar: document.querySelector<HTMLSpanElement>("#progress-bar")!,
  stickers: document.querySelector<HTMLDivElement>("#stickers")!,
  buttons: Array.from(document.querySelectorAll<HTMLButtonElement>(".planet-button")),
  hint: document.querySelector<HTMLButtonElement>("#hint-button")!,
  reset: document.querySelector<HTMLButtonElement>("#reset-button")!,
  readAloud: document.querySelector<HTMLInputElement>("#read-aloud")!,
  friendlyFont: document.querySelector<HTMLInputElement>("#friendly-font")!,
};

function renderHud(nextState: GameState) {
  const mission = getActiveMission(nextState);
  hud.world.textContent = mission.world;
  hud.grade.textContent = mission.grade;
  hud.title.textContent = mission.title;
  hud.goal.textContent = mission.goal;
  hud.coach.textContent = nextState.coachLine;
  hud.bar.style.width = `${Math.round((nextState.completedTargets / mission.targets.length) * 100)}%`;
  hud.buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mission === nextState.activeMissionId);
  });
  hud.stickers.innerHTML = "";
  for (let i = 0; i < nextState.stickers; i += 1) {
    const sticker = document.createElement("span");
    sticker.className = "sticker";
    sticker.textContent = "✦";
    hud.stickers.append(sticker);
  }
}

function emitUiAction(type: string, detail: Record<string, unknown> = {}) {
  game.events.emit("ui-action", { type, ...detail });
}

hud.buttons.forEach((button) => {
  button.addEventListener("click", () => {
    emitUiAction("chooseMission", { missionId: button.dataset.mission });
  });
});

hud.hint.addEventListener("click", () => emitUiAction("hint"));
hud.reset.addEventListener("click", () => emitUiAction("reset"));
hud.readAloud.addEventListener("change", () => emitUiAction("readAloud"));
hud.friendlyFont.addEventListener("change", () => {
  document.documentElement.classList.toggle("friendly-font", hud.friendlyFont.checked);
});

game.events.on("state-changed", renderHud);
renderHud(state);
