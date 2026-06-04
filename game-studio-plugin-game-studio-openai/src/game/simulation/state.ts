export type BlockSpec = {
  id: string;
  label: string;
  kind: string;
  color: string;
};

export type TargetSpec = {
  id: string;
  label: string;
  accepts: string[];
  x: number;
  y: number;
};

export type Mission = {
  id: string;
  grade: string;
  world: string;
  title: string;
  goal: string;
  prompt: string;
  targetMode: "count" | "sequence";
  targets: TargetSpec[];
  blocks: BlockSpec[];
};

export type GameState = {
  missions: Mission[];
  activeMissionId: string;
  completedTargets: number;
  placements: Record<string, string[]>;
  solvedBlocks: Set<string>;
  misses: number;
  hintLevel: number;
  stickers: number;
  coachLine: string;
};

export function createInitialState(missions: Mission[]): GameState {
  return {
    missions,
    activeMissionId: missions[0].id,
    completedTargets: 0,
    placements: {},
    solvedBlocks: new Set(),
    misses: 0,
    hintLevel: 0,
    stickers: 0,
    coachLine: missions[0].prompt,
  };
}

export function getActiveMission(state: GameState) {
  const mission = state.missions.find((item) => item.id === state.activeMissionId);
  if (!mission) {
    throw new Error(`Missing mission ${state.activeMissionId}`);
  }
  return mission;
}
