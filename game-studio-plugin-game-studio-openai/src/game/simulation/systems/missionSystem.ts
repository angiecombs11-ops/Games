import { getActiveMission, type GameState, type TargetSpec } from "../state";

export type DropResult =
  | { status: "accepted"; target: TargetSpec; missionComplete: boolean }
  | { status: "rejected"; message: string };

export function chooseMission(state: GameState, missionId: string) {
  if (!state.missions.some((mission) => mission.id === missionId)) {
    return;
  }
  state.activeMissionId = missionId;
  resetMission(state);
}

export function resetMission(state: GameState) {
  const mission = getActiveMission(state);
  state.completedTargets = 0;
  state.placements = {};
  state.solvedBlocks = new Set();
  state.misses = 0;
  state.hintLevel = 0;
  state.coachLine = mission.prompt;
}

export function requestHint(state: GameState) {
  state.hintLevel = Math.min(3, state.hintLevel + 1);
  const mission = getActiveMission(state);
  const openTarget = mission.targets.find((target) => !isTargetComplete(state, target));
  if (!openTarget) {
    state.coachLine = "Mission complete. Pick another planet!";
    return;
  }
  const needed = remainingKinds(state, openTarget);
  state.coachLine = `Try a ${needed[0]} block on ${openTarget.label}.`;
}

export function tryPlaceBlock(state: GameState, blockId: string, targetId: string): DropResult {
  const mission = getActiveMission(state);
  const block = mission.blocks.find((item) => item.id === blockId);
  const target = mission.targets.find((item) => item.id === targetId);
  if (!block || !target || state.solvedBlocks.has(blockId)) {
    return { status: "rejected", message: "That block is already parked." };
  }

  const placedKinds = state.placements[target.id] ?? [];
  if (!target.accepts.includes(block.kind)) {
    return miss(state, "Try another orbit. That block belongs somewhere else.");
  }
  if (placedKinds.filter((kind) => kind === block.kind).length >= target.accepts.filter((kind) => kind === block.kind).length) {
    return miss(state, `${target.label} has enough ${block.kind} blocks.`);
  }

  state.placements[target.id] = [...placedKinds, block.kind];
  state.solvedBlocks.add(blockId);
  state.completedTargets = mission.targets.filter((item) => isTargetComplete(state, item)).length;
  const missionComplete = state.completedTargets === mission.targets.length;
  state.coachLine = missionComplete
    ? "Galaxy Library page restored! Choose another planet."
    : "Nice tow! Keep building the pattern.";
  if (missionComplete) {
    state.stickers += 1;
  }
  return { status: "accepted", target, missionComplete };
}

function miss(state: GameState, message: string): DropResult {
  state.misses += 1;
  if (state.misses >= 2) {
    state.hintLevel = Math.max(state.hintLevel, 1);
    state.coachLine = "Hint beam on. Look for the pulsing target.";
  } else {
    state.coachLine = message;
  }
  return { status: "rejected", message };
}

function isTargetComplete(state: GameState, target: TargetSpec) {
  const placed = state.placements[target.id] ?? [];
  return target.accepts.every((kind) => placed.filter((item) => item === kind).length >= target.accepts.filter((item) => item === kind).length);
}

function remainingKinds(state: GameState, target: TargetSpec) {
  const placed = state.placements[target.id] ?? [];
  return target.accepts.filter((kind) => placed.filter((item) => item === kind).length < target.accepts.filter((item) => item === kind).length);
}
