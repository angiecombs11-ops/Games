let practiceSetIndex = 0;
let galaxyLevels = buildGalaxyLevels(practiceSetIndex);
let missions = galaxyLevels.flatMap((level) => level.missions);
const SAVE_KEY = "starblock-academy-progress-v1";

function buildGalaxyLevels(setIndex) {
const levels = [
  {
    id: "kindergarten",
    name: "Kindergarten Galaxy",
    grade: "Kindergarten",
    missions: [
      {
        id: "moon-pad",
        icon: "CNT",
        world: "Counting Comet Field",
        title: "Moon Pad Repair",
        story: "A landing pad blinked three times. The ship needs exactly three gold moon blocks to land.",
        goal: "Place exactly three gold moon blocks on the landing pad.",
        prompt: "Count the gold moon blocks. Tow three to the glowing pad.",
        targets: [{ id: "pad", label: "Pad", accepts: ["gold-moon", "gold-moon", "gold-moon"], x: 0.75, y: 0.55 }],
        blocks: [
          { id: "moon-1", label: "moon", kind: "gold-moon", color: "#ffd166" },
          { id: "moon-2", label: "moon", kind: "gold-moon", color: "#ffd166" },
          { id: "moon-3", label: "moon", kind: "gold-moon", color: "#ffd166" },
          { id: "moon-4", label: "moon", kind: "blue-moon", color: "#8ecae6" },
          { id: "moon-5", label: "moon", kind: "green-moon", color: "#b8f2e6" },
        ],
      },
      {
        id: "cat-gate",
        icon: "PHN",
        world: "Letter Nebula",
        title: "Open the Cat Gate",
        story: "A space cat waits by a gate marked c-a-t.",
        goal: "Snap c-a-t together to power the space gate.",
        prompt: "Build the word cat from left to right.",
        targets: [
          { id: "c-slot", label: "1", accepts: ["c"], x: 0.62, y: 0.5 },
          { id: "a-slot", label: "2", accepts: ["a"], x: 0.74, y: 0.5 },
          { id: "t-slot", label: "3", accepts: ["t"], x: 0.86, y: 0.5 },
        ],
        blocks: [
          { id: "letter-s", label: "s", kind: "s", color: "#ffc8dd" },
          { id: "letter-a", label: "a", kind: "a", color: "#bde0fe" },
          { id: "letter-c", label: "c", kind: "c", color: "#ffafcc" },
          { id: "letter-m", label: "m", kind: "m", color: "#fdffb6" },
          { id: "letter-t", label: "t", kind: "t", color: "#caffbf" },
        ],
      },
      {
        id: "pattern-bridge",
        icon: "AB",
        world: "Shape Station",
        title: "Fix the Pattern Bridge",
        story: "The bridge lights repeat: circle, square, circle, square.",
        goal: "Build an AB pattern: circle, square, circle, square.",
        prompt: "Tow the shapes into the bridge in repeating order.",
        targets: [
          { id: "shape-a1", label: "1", accepts: ["circle"], x: 0.5, y: 0.52 },
          { id: "shape-b1", label: "2", accepts: ["square"], x: 0.62, y: 0.52 },
          { id: "shape-a2", label: "3", accepts: ["circle"], x: 0.74, y: 0.52 },
          { id: "shape-b2", label: "4", accepts: ["square"], x: 0.86, y: 0.52 },
        ],
        blocks: [
          { id: "circle-1", label: "circ", kind: "circle", color: "#b8f2e6" },
          { id: "circle-2", label: "circ", kind: "circle", color: "#b8f2e6" },
          { id: "square-1", label: "sq", kind: "square", color: "#ffafcc" },
          { id: "square-2", label: "sq", kind: "square", color: "#ffafcc" },
          { id: "tri-1", label: "circ", kind: "triangle", color: "#fdffb6" },
        ],
      },
      makeSingleTargetMission("k-rhyme", "RHY", "Word Moon", "Rhyming Rocket", "The rocket hums: star, far, and one more rhyming word.", "Choose a new word that rhymes with star.", "Listen for the ending sound, then tow the rhyming word.", "jar", ["sun", "map", "jar", "fish"]),
      makeSingleTargetMission("k-more", "MORE", "Counting Comet Field", "More Fuel", "One dock has 5 fuel blocks. The other has 8.", "Choose the number that shows more fuel.", "Solve it, then tow the answer.", "8", ["3", "5", "8", "2"]),
      makeSingleTargetMission("k-sight", "SW", "Word Moon", "Sight Word Dock", "The Galaxy Library sign says: the ship can go.", "Find the sight word the.", "Read the sign, then tow the matching word.", "the", ["me", "the", "go", "up"]),
    ],
  },
  {
    id: "grade1",
    name: "Grade 1 Galaxy",
    grade: "Grade 1",
    missions: [
      {
        id: "number-34",
        icon: "PV",
        world: "Problem Planet",
        title: "Build Number 34",
        story: "A fuel meter needs 34 power cells: 3 tens and 4 ones.",
        goal: "Use tens and ones blocks to make 34.",
        prompt: "Tow 3 ten-rods and 4 one-cubes into the number dock.",
        targets: [
          { id: "tens", label: "3 tens", accepts: ["ten", "ten", "ten"], x: 0.68, y: 0.45 },
          { id: "ones", label: "4 ones", accepts: ["one", "one", "one", "one"], x: 0.82, y: 0.62 },
        ],
        blocks: [
          { id: "ten-1", label: "10", kind: "ten", color: "#9bf6ff" },
          { id: "ten-2", label: "10", kind: "ten", color: "#9bf6ff" },
          { id: "ten-3", label: "10", kind: "ten", color: "#9bf6ff" },
          { id: "ten-4", label: "10", kind: "ten", color: "#9bf6ff" },
          { id: "one-1", label: "1", kind: "one", color: "#ffd6a5" },
          { id: "one-2", label: "1", kind: "one", color: "#ffd6a5" },
          { id: "one-3", label: "1", kind: "one", color: "#ffd6a5" },
          { id: "one-4", label: "1", kind: "one", color: "#ffd6a5" },
          { id: "one-5", label: "1", kind: "one", color: "#ffd6a5" },
        ],
      },
      makeSingleTargetMission("g1-add", "SUM", "Counting Comet Field", "Add the Star Fuel", "The ship has 5 red fuel blocks and 4 blue fuel blocks.", "Choose the total number of fuel blocks.", "Add the blocks, then tow the answer.", "9", ["6", "8", "9", "10"]),
      makeSingleTargetMission("g1-sub", "SUB", "Problem Planet", "Clear the Asteroids", "There were 12 asteroids. The ship blasted 5 away.", "Choose how many asteroids are left.", "Subtract, then tow the answer.", "7", ["5", "6", "7", "8"]),
      makeSequenceMission("g1-sentence", "SEN", "Word Moon", "Build a Sentence", "The picture shows a dog running.", "Build the sentence: The dog runs.", "Put the words in sentence order.", ["The", "dog", "runs"], ["runs", "The", "dog", "cat"]),
      makeSingleTargetMission("g1-blend", "SH", "Letter Nebula", "Ship Sound", "The word ship starts with the sh sound.", "Choose the beginning sound in ship.", "Tow sh to the sound gate.", "sh", ["ch", "th", "sh", "sl"]),
      makeSequenceMission("g1-story", "SEQ", "Story Galaxy", "Three-Part Story", "Mira packed a map. Then she flew to Mars. Last, she waved at home.", "Put the three events in order.", "Use the passage to order the events.", ["packed map", "flew Mars", "waved"], ["waved", "packed map", "flew Mars", "slept"]),
    ],
  },
  {
    id: "grade2",
    name: "Grade 2 Galaxy",
    grade: "Grade 2",
    missions: [
      makeSingleTargetMission("g2-add100", "ADD", "Problem Planet", "Two-Digit Fuel", "The station has 46 fuel cells. A rover brings 27 more.", "Choose the total fuel cells.", "Add the numbers, then tow the answer.", "73", ["63", "73", "74", "83"]),
      makeSingleTargetMission("g2-skip", "SKIP", "Counting Comet Field", "Skip Count Comets", "The comets count by fives: 5, 10, 15, 20, 25, __.", "Choose the next number.", "Continue the pattern, then tow the answer.", "30", ["26", "30", "35", "40"]),
      makeGroupMission("g2-groups", "GRP", "Fraction Rings", "Asteroid Groups", "Three ships each need 4 asteroid blocks.", "Make 3 groups of 4 asteroid blocks.", "Give each ship 4 blocks.", "rock", 3, 4),
      makeSingleTargetMission("g2-time", "TIME", "Problem Planet", "Clock Orbit", "The clock shows half past 3.", "Choose the matching time.", "Read the clock, then tow the matching time.", "3:30", ["3:00", "3:30", "4:30", "6:03"]),
      makeSingleTargetMission("g2-prefix", "PRE", "Word Moon", "Prefix Power", "The prefix re- means again.", "Choose the word that means do again.", "Use the prefix clue, then tow the word.", "redo", ["undo", "redo", "preheat", "helper"]),
      makeSingleTargetMission("g2-evidence", "TEXT", "Story Galaxy", "Proof Block", "Juno smiled and clapped when the rocket lifted off.", "Pick the block that proves Juno was excited.", "Use the passage, then tow the evidence word.", "smiled", ["slept", "smiled", "hid", "dropped"]),
    ],
  },
  {
    id: "grade3",
    name: "Grade 3 Galaxy",
    grade: "Grade 3",
    missions: [
      makeGroupMission("g3-division", "SHARE", "Fraction Rings", "Share Energy Equally", "Twenty energy blocks must be shared equally among 5 ships.", "Split 20 energy blocks equally among 5 ships.", "Share the blocks equally.", "energy", 5, 4),
      makeSingleTargetMission("g3-fraction", "FRAC", "Fraction Rings", "Half-Moon Shield", "A shield is cut into 2 equal parts. One part is glowing.", "Choose the fraction for one out of two equal parts.", "Use the equal parts, then tow the fraction.", "1/2", ["1/3", "1/2", "2/1", "2/3"]),
      makeSingleTargetMission("g3-multistep", "STEP", "Problem Planet", "Two-Step Cargo", "A ship has 8 crates. It gets 12 more, then delivers 3.", "Choose how many crates remain.", "Solve both steps, then tow the answer.", "17", ["15", "16", "17", "20"]),
      makeSingleTargetMission("g3-vocab", "VOC", "Word Moon", "Context Clue", "Nia felt nervous, but she still flew into the storm to help.", "Choose the word that best describes Nia.", "Use the context, then tow the word.", "brave", ["brave", "sleepy", "tiny", "cold"]),
      makeSequenceMission("g3-story", "SEQ", "Story Galaxy", "Order the Story Blocks", "Mira found a torn map near the moon. She followed it to a broken star. After she fixed the star, it lit the way home.", "Arrange the story blocks in the correct order.", "Use the passage to order the events.", ["find map", "fix star", "fly home"], ["fly home", "find map", "fix star", "take nap"]),
      makeSingleTargetMission("g3-cause", "WHY", "Story Galaxy", "Cause and Effect", "The space storm shook the shelves, so the books floated away.", "Choose what caused the books to float away.", "Use the passage, then tow the cause block.", "storm", ["storm", "shelves", "books", "away"]),
    ],
  },
];

applyPracticeSet(levels, setIndex);
levels.forEach((level) => {
  level.name = `${level.grade} Galaxy - Set ${setIndex + 1}`;
  level.missions.forEach((mission, index) => {
    mission.id = `set${setIndex + 1}-${level.id}-${mission.id}`;
    mission.levelId = level.id;
    mission.grade = level.grade;
    mission.unlockAt = index === 0 ? 0 : Math.min(index, 5);
  });
});
return levels;
}

function applyPracticeSet(levels, setIndex) {
  const replacementSets = {
    1: {
    kindergarten: [
      makeCountMission("k2-count", "CNT", "Counting Comet Field", "Star Snack Count", "The cockpit buddy needs four gold star snacks for the trip.", "Place exactly four gold snack blocks on the tray.", "Count carefully, then tow four gold snacks.", "snack", 4, ["snack", "tri"]),
      makeSequenceMission("k2-dog", "PHN", "Letter Nebula", "Open the Dog Gate", "A space dog waits by a gate marked d-o-g.", "Snap d-o-g together to power the space gate.", "Build the word dog from left to right.", ["d", "o", "g"], ["g", "m", "d", "o"]),
      makeSequenceMission("k2-pattern", "ABB", "Shape Station", "Fix the ABB Bridge", "The bridge lights repeat: star, moon, moon, star, moon, moon.", "Build an ABB pattern: star, moon, moon.", "Tow the shapes into the repeating pattern.", ["star", "moon", "moon"], ["moon", "star", "tri", "moon"]),
      makeSingleTargetMission("k2-rhyme", "RHY", "Word Moon", "Rhyming Rocket", "The rocket hums: moon, soon, and one more rhyming word.", "Choose a new word that rhymes with moon.", "Listen for the ending sound, then tow the rhyming word.", "spoon", ["spoon", "ship", "cat", "red"]),
      makeSingleTargetMission("k2-less", "LESS", "Counting Comet Field", "Less Fuel", "One dock has 6 fuel blocks. The other has 2.", "Choose the number that shows less fuel.", "Compare the amounts, then tow the answer.", "2", ["8", "6", "2", "4"]),
      makeSingleTargetMission("k2-sight", "SW", "Word Moon", "Sight Word Dock", "The Galaxy Library sign says: we can see stars.", "Find the sight word we.", "Read the sign, then tow the matching word.", "we", ["am", "we", "in", "look"]),
    ],
    grade1: [
      makePlaceValueMission("g1b-pv", "PV", "Problem Planet", "Build Number 42", "A fuel meter needs 42 power cells: 4 tens and 2 ones.", "Use tens and ones blocks to make 42.", "Tow 4 ten-rods and 2 one-cubes into the number dock.", 4, 2),
      makeSingleTargetMission("g1b-add", "SUM", "Counting Comet Field", "Add the Moon Gems", "The ship finds 6 blue gems and 7 green gems.", "Choose the total number of gems.", "Add the gems, then tow the answer.", "13", ["11", "12", "13", "14"]),
      makeSingleTargetMission("g1b-sub", "SUB", "Problem Planet", "Save the Satellites", "There were 15 satellites. Six drifted away.", "Choose how many satellites are left.", "Subtract, then tow the answer.", "9", ["7", "8", "9", "10"]),
      makeSequenceMission("g1b-sentence", "SEN", "Word Moon", "Build a Sentence", "The picture shows a bird flying.", "Build the sentence: The bird flies.", "Put the words in sentence order.", ["The", "bird", "flies"], ["flies", "bird", "The", "runs"]),
      makeSingleTargetMission("g1b-blend", "CH", "Letter Nebula", "Chip Sound", "The word chip starts with the ch sound.", "Choose the beginning sound in chip.", "Tow the beginning sound to the gate.", "ch", ["sh", "ch", "th", "br"]),
      makeSequenceMission("g1b-story", "SEQ", "Story Galaxy", "Three-Part Story", "Leo found a key. Then he opened the moon chest. Last, he shared the stickers.", "Put the three events in order.", "Use the passage to order the events.", ["found key", "opened chest", "shared"], ["opened chest", "shared", "found key", "jumped"]),
    ],
    grade2: [
      makeSingleTargetMission("g2b-add100", "ADD", "Problem Planet", "Two-Digit Cargo", "The station has 58 crates. A rover brings 19 more.", "Choose the total crates.", "Add the numbers, then tow the answer.", "77", ["67", "76", "77", "87"]),
      makeSingleTargetMission("g2b-skip", "SKIP", "Counting Comet Field", "Skip Count Rings", "The rings count by tens: 10, 20, 30, 40, __.", "Choose the next number.", "Continue the pattern, then tow the answer.", "50", ["45", "50", "60", "70"]),
      makeGroupMission("g2b-groups", "GRP", "Fraction Rings", "Comet Groups", "Five ships each need 2 comet blocks.", "Make 5 groups of 2 comet blocks.", "Give each ship 2 blocks.", "comet", 5, 2),
      makeSingleTargetMission("g2b-money", "COIN", "Problem Planet", "Coin Orbit", "A ship part costs 35 cents.", "Choose the coins that make 35 cents.", "Count the coins, then tow the answer.", "25+10", ["10+10", "25+10", "25+5", "10+5"]),
      makeSingleTargetMission("g2b-suffix", "SUF", "Word Moon", "Suffix Power", "The suffix -less means without.", "Choose the word that means without hope.", "Use the suffix clue, then tow the word.", "hopeless", ["hopeful", "hopeless", "helper", "redo"]),
      makeSingleTargetMission("g2b-evidence", "TEXT", "Story Galaxy", "Proof Block", "Ari whispered and tiptoed past the sleeping robot.", "Pick the block that proves Ari was quiet.", "Use the passage, then tow the evidence word.", "whispered", ["laughed", "whispered", "danced", "crashed"]),
    ],
    grade3: [
      makeGroupMission("g3b-division", "SHARE", "Fraction Rings", "Share Crystals Equally", "Eighteen crystals must be shared equally among 3 ships.", "Split 18 crystals equally among 3 ships.", "Share the crystals equally.", "gem", 3, 6),
      makeSingleTargetMission("g3b-fraction", "FRAC", "Fraction Rings", "Third-Moon Shield", "A shield is cut into 3 equal parts. One part is glowing.", "Choose the fraction for one out of three equal parts.", "Use the equal parts, then tow the fraction.", "1/3", ["1/2", "1/3", "2/3", "3/1"]),
      makeSingleTargetMission("g3b-multistep", "STEP", "Problem Planet", "Two-Step Cargo", "A ship has 9 crates. It gets 15 more, then delivers 8.", "Choose how many crates remain.", "Solve both steps, then tow the answer.", "16", ["14", "15", "16", "24"]),
      makeSingleTargetMission("g3b-vocab", "VOC", "Word Moon", "Context Clue", "The tunnel was dim, so Omar turned on his helmet light.", "Choose the word that means dim.", "Use the context, then tow the word.", "dark", ["bright", "dark", "fast", "kind"]),
      makeSequenceMission("g3b-story", "SEQ", "Story Galaxy", "Order the Story Blocks", "Tara planted a moon seed. A silver sprout grew. By morning, a glowing flower opened.", "Arrange the story blocks in the correct order.", "Use the passage to order the events.", ["plant seed", "sprout grew", "flower opened"], ["flower opened", "plant seed", "sprout grew", "rocket slept"]),
      makeSingleTargetMission("g3b-cause", "WHY", "Story Galaxy", "Cause and Effect", "The engine overheated, so the crew landed on the nearest moon.", "Choose what caused the crew to land.", "Use the passage, then tow the cause block.", "engine overheated", ["nearest moon", "crew landed", "engine overheated", "space map"]),
    ],
    },
    2: {
      kindergarten: [
        makeCountMission("k3-count", "CNT", "Counting Comet Field", "Planet Cookie Count", "The snack tray needs five gold planet cookies.", "Place exactly five gold cookie blocks on the tray.", "Count carefully, then tow five gold cookies.", "cookie", 5, ["cookie", "star"]),
      makeSequenceMission("k3-pig", "PHN", "Letter Nebula", "Open the Pig Gate", "A space pig waits by a gate marked p-i-g.", "Snap p-i-g together to power the space gate.", "Build the word pig from left to right.", ["p", "i", "g"], ["g", "t", "p", "i"]),
      makeSequenceMission("k3-aab", "AAB", "Shape Station", "Fix the AAB Bridge", "The bridge lights repeat: moon, moon, star.", "Build an AAB pattern: moon, moon, star.", "Tow the shapes into the repeating pattern.", ["moon", "moon", "star"], ["star", "moon", "tri", "moon"]),
        makeSingleTargetMission("k3-rhyme", "RHY", "Word Moon", "Rhyming Rocket", "The rocket hums: light, bright, and one more rhyming word.", "Choose a new word that rhymes with light.", "Listen for the ending sound, then tow the rhyming word.", "night", ["night", "fish", "map", "sun"]),
        makeSingleTargetMission("k3-equal", "EQ", "Counting Comet Field", "Equal Fuel", "One dock has 4 fuel blocks. The other also has 4.", "Choose the symbol that means equal.", "Compare the amounts, then tow the symbol.", "=", [">", "<", "=", "+"]),
        makeSingleTargetMission("k3-sight", "SW", "Word Moon", "Sight Word Dock", "The Galaxy Library sign says: my ship is blue.", "Find the sight word my.", "Read the sign, then tow the matching word.", "my", ["my", "can", "see", "at"]),
      ],
      grade1: [
        makePlaceValueMission("g1c-pv", "PV", "Problem Planet", "Build Number 51", "A fuel meter needs 51 power cells: 5 tens and 1 one.", "Use tens and ones blocks to make 51.", "Tow 5 ten-rods and 1 one-cube into the number dock.", 5, 1),
        makeSingleTargetMission("g1c-add", "SUM", "Counting Comet Field", "Add the Star Snacks", "The ship has 8 yellow snacks and 5 purple snacks.", "Choose the total number of snacks.", "Add the snacks, then tow the answer.", "13", ["11", "12", "13", "15"]),
        makeSingleTargetMission("g1c-sub", "SUB", "Problem Planet", "Clear the Space Dust", "There were 18 dust clouds. The wind moved 9 away.", "Choose how many dust clouds are left.", "Subtract, then tow the answer.", "9", ["8", "9", "10", "11"]),
        makeSequenceMission("g1c-sentence", "SEN", "Word Moon", "Build a Sentence", "The picture shows a robot jumping.", "Build the sentence: The robot jumps.", "Put the words in sentence order.", ["The", "robot", "jumps"], ["jumps", "The", "robot", "moon"]),
        makeSingleTargetMission("g1c-blend", "TH", "Letter Nebula", "Thin Sound", "The word thin starts with the th sound.", "Choose the beginning sound in thin.", "Tow the beginning sound to the gate.", "th", ["sh", "ch", "th", "tr"]),
        makeSequenceMission("g1c-story", "SEQ", "Story Galaxy", "Three-Part Story", "Nia fed the rover. Then the rover found a cave. Last, Nia drew a map.", "Put the three events in order.", "Use the passage to order the events.", ["fed rover", "found cave", "drew map"], ["drew map", "fed rover", "found cave", "slept"]),
      ],
      grade2: [
        makeSingleTargetMission("g2c-add100", "ADD", "Problem Planet", "Two-Digit Lights", "The station turns on 37 blue lights and 48 green lights.", "Choose the total lights.", "Add the numbers, then tow the answer.", "85", ["75", "84", "85", "95"]),
        makeSingleTargetMission("g2c-skip", "SKIP", "Counting Comet Field", "Skip Count Stars", "The stars count by twos: 2, 4, 6, 8, __.", "Choose the next number.", "Continue the pattern, then tow the answer.", "10", ["9", "10", "12", "14"]),
        makeGroupMission("g2c-groups", "GRP", "Fraction Rings", "Moon Groups", "Two ships each need 5 moon blocks.", "Make 2 groups of 5 moon blocks.", "Give each ship 5 blocks.", "moon", 2, 5),
        makeSingleTargetMission("g2c-money", "COIN", "Problem Planet", "Coin Dock", "A comic page costs 40 cents.", "Choose the coins that make 40 cents.", "Count the coins, then tow the answer.", "25+10+5", ["25+5", "10+10+10", "25+10+5", "25+25"]),
        makeSingleTargetMission("g2c-compound", "COMP", "Word Moon", "Compound Word", "Two small words can join to make a bigger word.", "Choose the compound word.", "Look for two words joined together.", "starfish", ["starfish", "happy", "redo", "small"]),
        makeSingleTargetMission("g2c-evidence", "TEXT", "Story Galaxy", "Proof Block", "Milo zipped his coat because the moon wind was cold.", "Pick the block that proves why Milo zipped his coat.", "Use the passage, then tow the evidence word.", "cold", ["coat", "cold", "moon", "Milo"]),
      ],
      grade3: [
        makeGroupMission("g3c-division", "SHARE", "Fraction Rings", "Share Moon Cakes", "Twenty-four moon cakes must be shared equally among 4 ships.", "Split 24 moon cakes equally among 4 ships.", "Share the cakes equally.", "cake", 4, 6),
        makeSingleTargetMission("g3c-fraction", "FRAC", "Fraction Rings", "Quarter Shield", "A shield is cut into 4 equal parts. One part is glowing.", "Choose the fraction for one out of four equal parts.", "Use the equal parts, then tow the fraction.", "1/4", ["1/2", "1/3", "1/4", "4/1"]),
        makeSingleTargetMission("g3c-multistep", "STEP", "Problem Planet", "Two-Step Cargo", "A ship has 20 crates. It gives away 7, then gets 6 more.", "Choose how many crates it has now.", "Solve both steps, then tow the answer.", "19", ["13", "18", "19", "26"]),
        makeSingleTargetMission("g3c-vocab", "VOC", "Word Moon", "Context Clue", "The tiny rover was enormous after Omar used the growth ray.", "Choose the word that means enormous.", "Use the context, then tow the word.", "huge", ["tiny", "huge", "quiet", "round"]),
        makeSequenceMission("g3c-story", "SEQ", "Story Galaxy", "Order the Story Blocks", "Jun tuned the radio. A message crackled through. Then the team followed the signal.", "Arrange the story blocks in the correct order.", "Use the passage to order the events.", ["tuned radio", "heard message", "followed signal"], ["followed signal", "tuned radio", "heard message", "ate lunch"]),
        makeSingleTargetMission("g3c-cause", "WHY", "Story Galaxy", "Cause and Effect", "The bridge froze overnight, so the rover had to take a tunnel.", "Choose what caused the rover to take a tunnel.", "Use the passage, then tow the cause block.", "bridge froze", ["bridge froze", "tunnel", "rover", "overnight"]),
      ],
    },
    3: {
      kindergarten: [
        makeCountMission("k4-count", "CNT", "Counting Comet Field", "Rocket Seat Count", "The little rocket needs six gold seats for six friends.", "Place exactly six gold seat blocks on the rocket.", "Count carefully, then tow six gold seats.", "seat", 6, ["seat", "star"]),
      makeSequenceMission("k4-sun", "PHN", "Letter Nebula", "Open the Sun Gate", "A bright sun waits by a gate marked s-u-n.", "Snap s-u-n together to power the space gate.", "Build the word sun from left to right.", ["s", "u", "n"], ["n", "p", "s", "u"]),
      makeSequenceMission("k4-abc", "ABC", "Shape Station", "Fix the ABC Bridge", "The bridge lights repeat: red, blue, green.", "Build an ABC pattern: red, blue, green.", "Tow the color blocks into the repeating pattern.", ["red", "blue", "green"], ["green", "yellow", "red", "blue"]),
        makeSingleTargetMission("k4-rhyme", "RHY", "Word Moon", "Rhyming Rocket", "The rocket hums: bee, tree, and one more rhyming word.", "Choose a new word that rhymes with bee.", "Listen for the ending sound, then tow the rhyming word.", "see", ["see", "moon", "hat", "dog"]),
        makeSingleTargetMission("k4-shape", "SHP", "Counting Comet Field", "Shape Sorter", "The portal only wants triangles.", "Choose the triangle block.", "Look at the shapes, then tow the triangle.", "tri", ["circle", "square", "tri", "star"]),
        makeSingleTargetMission("k4-sight", "SW", "Word Moon", "Sight Word Dock", "The Galaxy Library sign says: go to the red moon.", "Find the sight word go.", "Read the sign, then tow the matching word.", "go", ["go", "me", "it", "blue"]),
      ],
      grade1: [
        makePlaceValueMission("g1d-pv", "PV", "Problem Planet", "Build Number 26", "A fuel meter needs 26 power cells: 2 tens and 6 ones.", "Use tens and ones blocks to make 26.", "Tow 2 ten-rods and 6 one-cubes into the number dock.", 2, 6),
        makeSingleTargetMission("g1d-add", "SUM", "Counting Comet Field", "Add the Robot Parts", "The toolbox has 7 bolts and 6 gears.", "Choose the total number of parts.", "Add the parts, then tow the answer.", "13", ["10", "12", "13", "14"]),
        makeSingleTargetMission("g1d-sub", "SUB", "Problem Planet", "Clear the Comets", "There were 14 comets. The ship passed 8.", "Choose how many comets are left.", "Subtract, then tow the answer.", "6", ["5", "6", "7", "8"]),
        makeSequenceMission("g1d-sentence", "SEN", "Word Moon", "Build a Sentence", "The picture shows a star glowing.", "Build the sentence: A star glows.", "Put the words in sentence order.", ["A", "star", "glows"], ["glows", "star", "A", "runs"]),
        makeSingleTargetMission("g1d-blend", "BR", "Letter Nebula", "Bright Sound", "The word bright starts with the br sound.", "Choose the beginning sound in bright.", "Tow the beginning sound to the gate.", "br", ["bl", "br", "ch", "sh"]),
        makeSequenceMission("g1d-story", "SEQ", "Story Galaxy", "Three-Part Story", "A robot lost a wheel. Sam found it. Then Sam fixed the robot.", "Put the three events in order.", "Use the passage to order the events.", ["lost wheel", "found wheel", "fixed robot"], ["fixed robot", "lost wheel", "found wheel", "danced"]),
      ],
      grade2: [
        makeSingleTargetMission("g2d-add100", "ADD", "Problem Planet", "Two-Digit Stars", "The map shows 29 near stars and 36 far stars.", "Choose the total stars.", "Add the numbers, then tow the answer.", "65", ["55", "64", "65", "75"]),
        makeSingleTargetMission("g2d-skip", "SKIP", "Counting Comet Field", "Skip Count Rockets", "The rockets count by threes: 3, 6, 9, 12, __.", "Choose the next number.", "Continue the pattern, then tow the answer.", "15", ["13", "14", "15", "18"]),
        makeGroupMission("g2d-groups", "GRP", "Fraction Rings", "Robot Groups", "Four stations each need 2 robot blocks.", "Make 4 groups of 2 robot blocks.", "Give each station 2 blocks.", "bot", 4, 2),
        makeSingleTargetMission("g2d-time", "TIME", "Problem Planet", "Clock Orbit", "The clock shows quarter past 4.", "Choose the matching time.", "Read the clock, then tow the matching time.", "4:15", ["4:00", "4:15", "4:30", "5:15"]),
        makeSingleTargetMission("g2d-suffix", "SUF", "Word Moon", "Suffix Power", "The suffix -ful means full of.", "Choose the word that means full of hope.", "Use the suffix clue, then tow the word.", "hopeful", ["hopeless", "hopeful", "redo", "helper"]),
        makeSingleTargetMission("g2d-evidence", "TEXT", "Story Galaxy", "Proof Block", "Lina grinned when the lost page floated back.", "Pick the block that proves Lina felt happy.", "Use the passage, then tow the evidence word.", "grinned", ["lost", "grinned", "floated", "page"]),
      ],
      grade3: [
        makeGroupMission("g3d-division", "SHARE", "Fraction Rings", "Share Fuel Equally", "Fifteen fuel cells must be shared equally among 5 ships.", "Split 15 fuel cells equally among 5 ships.", "Share the fuel equally.", "fuel", 5, 3),
        makeSingleTargetMission("g3d-fraction", "FRAC", "Fraction Rings", "Two-Thirds Shield", "A shield is cut into 3 equal parts. Two parts are glowing.", "Choose the fraction for two out of three equal parts.", "Use the equal parts, then tow the fraction.", "2/3", ["1/3", "2/3", "3/2", "2/4"]),
        makeSingleTargetMission("g3d-multistep", "STEP", "Problem Planet", "Two-Step Cargo", "A rover carries 30 tools. It drops 12, then finds 5.", "Choose how many tools it has now.", "Solve both steps, then tow the answer.", "23", ["18", "22", "23", "35"]),
        makeSingleTargetMission("g3d-vocab", "VOC", "Word Moon", "Context Clue", "The careful pilot checked every button before launch.", "Choose the word that best describes the pilot.", "Use the context, then tow the word.", "careful", ["careful", "angry", "tiny", "late"]),
        makeSequenceMission("g3d-story", "SEQ", "Story Galaxy", "Order the Story Blocks", "The crew packed tools. They repaired the dome. Then everyone celebrated inside.", "Arrange the story blocks in the correct order.", "Use the passage to order the events.", ["packed tools", "repaired dome", "celebrated"], ["celebrated", "packed tools", "repaired dome", "slept"]),
        makeSingleTargetMission("g3d-cause", "WHY", "Story Galaxy", "Cause and Effect", "The battery ran out, so the beacon stopped blinking.", "Choose what caused the beacon to stop.", "Use the passage, then tow the cause block.", "battery ran out", ["beacon", "battery ran out", "blinking", "stopped"]),
      ],
    },
  };
  const replacements = replacementSets[setIndex % 4];
  if (!replacements) return;
  levels.forEach((level) => {
    level.missions = replacements[level.id] ?? level.missions;
  });
}

function makeSingleTargetMission(id, icon, world, title, story, goal, prompt, correct, options) {
  const orderedOptions = spreadCorrectOption(id, correct, options);
  return {
    id,
    icon,
    world,
    title,
    story,
    goal,
    prompt,
    targets: [{ id: "answer", label: "Dock", accepts: [correct], x: 0.78, y: 0.52 }],
    blocks: orderedOptions.map((option, index) => ({
      id: `${id}-block-${index}`,
      label: option,
      kind: option,
      color: ["#bde0fe", "#ffafcc", "#caffbf", "#ffd166"][index % 4],
    })),
  };
}

function spreadCorrectOption(id, correct, options) {
  const nextOptions = [...options];
  const currentIndex = nextOptions.indexOf(correct);
  if (currentIndex === -1) return nextOptions;
  const targetIndex = hashString(id) % nextOptions.length;
  [nextOptions[currentIndex], nextOptions[targetIndex]] = [nextOptions[targetIndex], nextOptions[currentIndex]];
  return nextOptions;
}

function hashString(value) {
  return Array.from(value).reduce((total, char) => total + char.charCodeAt(0), 0);
}

function makeCountMission(id, icon, world, title, story, goal, prompt, kind, count, distractors) {
  const sameLabelDistractors = Math.min(2, Math.max(1, Math.floor(count / 3)));
  const correctKind = `gold-${kind}`;
  return {
    id,
    icon,
    world,
    title,
    story,
    goal,
    prompt,
    targets: [{ id: `${id}-count`, label: "Tray", accepts: Array.from({ length: count }, () => correctKind), x: 0.75, y: 0.55 }],
    blocks: [
      ...Array.from({ length: count }, (_, index) => ({
        id: `${id}-${kind}-${index}`,
        label: kind,
        kind: correctKind,
        color: "#ffd166",
      })),
      ...distractors.map((item, index) => ({
        id: `${id}-distractor-${index}`,
        label: index < sameLabelDistractors ? kind : item,
        kind: `${item}-${index}`,
        color: ["#8ecae6", "#b8f2e6", "#ffafcc"][index % 3],
      })),
    ],
  };
}

function makePlaceValueMission(id, icon, world, title, story, goal, prompt, tens, ones) {
  return {
    id,
    icon,
    world,
    title,
    story,
    goal,
    prompt,
    targets: [
      { id: `${id}-tens`, label: `${tens} tens`, accepts: Array.from({ length: tens }, () => "ten"), x: 0.68, y: 0.45 },
      { id: `${id}-ones`, label: `${ones} ones`, accepts: Array.from({ length: ones }, () => "one"), x: 0.82, y: 0.62 },
    ],
    blocks: [
      ...Array.from({ length: tens + 1 }, (_, index) => ({
        id: `${id}-ten-${index}`,
        label: "10",
        kind: "ten",
        color: "#9bf6ff",
      })),
      ...Array.from({ length: ones + 1 }, (_, index) => ({
        id: `${id}-one-${index}`,
        label: "1",
        kind: "one",
        color: "#ffd6a5",
      })),
    ],
  };
}

function makeSequenceMission(id, icon, world, title, story, goal, prompt, correctOrder, options) {
  const orderedOptions = reorderSequenceOptions(id, correctOrder, options);
  return {
    id,
    icon,
    world,
    title,
    story,
    goal,
    prompt,
    targets: correctOrder.map((kind, index) => ({
      id: `${id}-slot-${index}`,
      label: ["First", "Next", "Last", "Then"][index] ?? `${index + 1}`,
      accepts: [kind],
      x: 0.58 + index * 0.14,
      y: 0.5,
    })),
    blocks: orderedOptions.map((option, index) => ({
      id: `${id}-block-${index}`,
      label: option,
      kind: option,
      color: ["#caffbf", "#9bf6ff", "#ffd166", "#ffc8dd"][index % 4],
    })),
  };
}

function reorderSequenceOptions(id, correctOrder, options) {
  const nextOptions = [...options];
  const startsWithAnswer = correctOrder.every((item, index) => nextOptions[index] === item);
  if (!startsWithAnswer) return nextOptions;
  if (nextOptions.length > correctOrder.length) {
    const moveIndex = hashString(id) % correctOrder.length;
    [nextOptions[moveIndex], nextOptions[nextOptions.length - 1]] = [nextOptions[nextOptions.length - 1], nextOptions[moveIndex]];
    return nextOptions;
  }
  return nextOptions.reverse();
}

function makeGroupMission(id, icon, world, title, story, goal, prompt, kind, groupCount, groupSize) {
  return {
    id,
    icon,
    world,
    title,
    story,
    goal,
    prompt,
    targets: Array.from({ length: groupCount }, (_, index) => ({
      id: `${id}-group-${index}`,
      label: `Ship ${index + 1}`,
      accepts: Array.from({ length: groupSize }, () => kind),
      x: 0.56 + (index % 2) * 0.22,
      y: 0.34 + Math.floor(index / 2) * 0.32,
    })),
    blocks: Array.from({ length: groupCount * groupSize }, (_, index) => ({
      id: `${id}-block-${index}`,
      label: kind === "energy" ? "bolt" : kind,
      kind,
      color: kind === "energy" ? "#fca311" : "#b8f2e6",
    })),
  };
}

const state = {
  missions,
  currentLevelIndex: 0,
  activeMissionId: galaxyLevels[0].missions[0].id,
  completedTargets: 0,
  placements: {},
  solvedBlocks: new Set(),
  solvedBlockTargets: {},
  misses: 0,
  hintLevel: 0,
  completedMissionIds: new Set(),
  completedGradeSetIds: new Set(),
  coachLine: galaxyLevels[0].missions[0].prompt,
};

restoreProgress();

function getActiveMission() {
  return state.missions.find((mission) => mission.id === state.activeMissionId);
}

function getCurrentLevel() {
  return galaxyLevels[state.currentLevelIndex];
}

function getCurrentLevelMissions() {
  return getCurrentLevel().missions;
}

function getLevelCompletedCount() {
  return getCurrentLevelMissions().filter((mission) => state.completedMissionIds.has(mission.id)).length;
}

function isLevelComplete() {
  return getLevelCompletedCount() === getCurrentLevelMissions().length;
}

function getMissionProgressRatio(mission = getActiveMission()) {
  const requiredBlocks = mission.targets.reduce((total, target) => total + target.accepts.length, 0);
  if (requiredBlocks === 0) return 0;
  const placedBlocks = mission.targets.reduce((total, target) => total + (state.placements[target.id]?.length ?? 0), 0);
  return placedBlocks / requiredBlocks;
}

function gradeSetKey(level = getCurrentLevel(), setIndex = practiceSetIndex) {
  return `${setIndex}-${level.id}`;
}

function setCompleteForAllGrades(setIndex) {
  return galaxyLevels.every((level) => state.completedGradeSetIds.has(gradeSetKey(level, setIndex)));
}

function allGradeSetsComplete() {
  return galaxyLevels.every((level) => [0, 1, 2, 3].every((setIndex) => state.completedGradeSetIds.has(gradeSetKey(level, setIndex))));
}

function gradeAllSetsComplete(level) {
  return [0, 1, 2, 3].every((setIndex) => state.completedGradeSetIds.has(gradeSetKey(level, setIndex)));
}

function resetMission() {
  const mission = getActiveMission();
  state.completedTargets = 0;
  state.placements = {};
  state.solvedBlocks = new Set();
  state.solvedBlockTargets = {};
  state.misses = 0;
  state.hintLevel = 0;
  state.coachLine = mission.prompt;
}

function saveProgress() {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify({
      practiceSetIndex,
      currentLevelIndex: state.currentLevelIndex,
      activeMissionId: state.activeMissionId,
      completedMissionIds: [...state.completedMissionIds],
      completedGradeSetIds: [...state.completedGradeSetIds],
      activeMissionProgress: {
        missionId: state.activeMissionId,
        completedTargets: state.completedTargets,
        placements: state.placements,
        solvedBlocks: [...state.solvedBlocks],
        solvedBlockTargets: state.solvedBlockTargets,
      },
    }));
  } catch (error) {
    console.warn("Could not save StarBlock progress", error);
  }
}

function restoreProgress() {
  try {
    const rawProgress = localStorage.getItem(SAVE_KEY);
    if (!rawProgress) return;
    const progress = JSON.parse(rawProgress);
    practiceSetIndex = Number.isInteger(progress.practiceSetIndex) ? progress.practiceSetIndex % 4 : 0;
    galaxyLevels = buildGalaxyLevels(practiceSetIndex);
    missions = galaxyLevels.flatMap((level) => level.missions);
    state.missions = missions;
    state.currentLevelIndex = Number.isInteger(progress.currentLevelIndex)
      ? Phaser.Math.Clamp(progress.currentLevelIndex, 0, galaxyLevels.length - 1)
      : 0;
    state.completedMissionIds = new Set(Array.isArray(progress.completedMissionIds) ? progress.completedMissionIds : []);
    state.completedGradeSetIds = new Set(Array.isArray(progress.completedGradeSetIds) ? progress.completedGradeSetIds : []);
    const fallbackMission = getCurrentLevel().missions[0].id;
    state.activeMissionId = getCurrentLevel().missions.some((mission) => mission.id === progress.activeMissionId)
      ? progress.activeMissionId
      : fallbackMission;
    resetMission();
    if (progress.activeMissionProgress?.missionId === state.activeMissionId) {
      state.completedTargets = progress.activeMissionProgress.completedTargets ?? 0;
      state.placements = progress.activeMissionProgress.placements ?? {};
      state.solvedBlocks = new Set(Array.isArray(progress.activeMissionProgress.solvedBlocks) ? progress.activeMissionProgress.solvedBlocks : []);
      state.solvedBlockTargets = progress.activeMissionProgress.solvedBlockTargets ?? {};
    }
    state.coachLine = "Progress restored. Keep flying!";
  } catch (error) {
    console.warn("Could not restore StarBlock progress", error);
  }
}

function chooseMission(missionId) {
  const mission = getCurrentLevelMissions().find((item) => item.id === missionId);
  if (!mission || mission.unlockAt > getLevelCompletedCount()) return;
  state.activeMissionId = missionId;
  resetMission();
  saveProgress();
}

function goToNextLevel() {
  if (!isLevelComplete()) return;
  if (state.currentLevelIndex >= galaxyLevels.length - 1) {
    startPracticeSet(practiceSetIndex + 1);
    return;
  }
  state.currentLevelIndex += 1;
  state.activeMissionId = getCurrentLevel().missions[0].id;
  resetMission();
  state.coachLine = `${getCurrentLevel().name} unlocked. Start with the first planet.`;
  saveProgress();
}

function startPracticeSet(nextSetIndex) {
  loadPracticeSet(nextSetIndex, 0, `Practice Set ${(nextSetIndex % 4) + 1} ready. Start with the first planet.`);
}

function startCurrentGradePracticeSet() {
  const levelIndex = state.currentLevelIndex;
  loadPracticeSet(practiceSetIndex + 1, levelIndex, `${galaxyLevels[levelIndex].grade} Practice Set ${((practiceSetIndex + 1) % 4) + 1} ready. Start with the first planet.`);
}

function loadPracticeSet(nextSetIndex, levelIndex, coachLine) {
  practiceSetIndex = nextSetIndex % 4;
  galaxyLevels = buildGalaxyLevels(practiceSetIndex);
  missions = galaxyLevels.flatMap((level) => level.missions);
  state.missions = missions;
  state.currentLevelIndex = levelIndex;
  state.completedMissionIds = new Set();
  state.activeMissionId = getCurrentLevel().missions[0].id;
  resetMission();
  state.coachLine = coachLine;
  saveProgress();
}

function targetComplete(target) {
  const placed = state.placements[target.id] ?? [];
  return target.accepts.every(
    (kind) => placed.filter((item) => item === kind).length >= target.accepts.filter((item) => item === kind).length,
  );
}

function requestHint() {
  state.hintLevel = Math.min(3, state.hintLevel + 1);
  const openTarget = getActiveMission().targets.find((target) => !targetComplete(target));
  if (!openTarget) {
    state.coachLine = "Mission complete. Pick another planet!";
    return;
  }
  const placed = state.placements[openTarget.id] ?? [];
  const needed = openTarget.accepts.find(
    (kind) => placed.filter((item) => item === kind).length < openTarget.accepts.filter((item) => item === kind).length,
  );
  state.coachLine = `Try a ${needed} block on ${openTarget.label}.`;
}

function tryPlaceBlock(blockId, targetId) {
  const mission = getActiveMission();
  const level = getCurrentLevel();
  const block = mission.blocks.find((item) => item.id === blockId);
  const target = mission.targets.find((item) => item.id === targetId);
  if (!block || !target || state.solvedBlocks.has(blockId)) {
    return { status: "rejected" };
  }
  const placedKinds = state.placements[target.id] ?? [];
  const placedOfKind = placedKinds.filter((kind) => kind === block.kind).length;
  const neededOfKind = target.accepts.filter((kind) => kind === block.kind).length;
  if (!target.accepts.includes(block.kind) || placedOfKind >= neededOfKind) {
    state.misses += 1;
    state.coachLine = state.misses >= 2 ? "Hint beam on. Look for the pulsing target." : "Try another orbit. That block belongs somewhere else.";
    state.hintLevel = state.misses >= 2 ? Math.max(state.hintLevel, 1) : state.hintLevel;
    return { status: "rejected" };
  }
  state.placements[target.id] = [...placedKinds, block.kind];
  state.solvedBlocks.add(blockId);
  state.solvedBlockTargets[blockId] = target.id;
  state.completedTargets = mission.targets.filter(targetComplete).length;
  saveProgress();
  const missionComplete = state.completedTargets === mission.targets.length;
  if (missionComplete) {
    const wasAlreadyComplete = state.completedMissionIds.has(mission.id);
    if (!wasAlreadyComplete) {
      state.completedMissionIds.add(mission.id);
      saveProgress();
    }
    const completedCount = getLevelCompletedCount();
    const nextUnlock = getCurrentLevelMissions().find((item) => item.unlockAt === completedCount && !state.completedMissionIds.has(item.id));
    if (isLevelComplete()) {
      const wasGradeSetComplete = state.completedGradeSetIds.has(gradeSetKey(level));
      if (!wasGradeSetComplete) {
        state.completedGradeSetIds.add(gradeSetKey(level));
        saveProgress();
        queueCelebration(level);
      }
      const hasNextLevel = state.currentLevelIndex < galaxyLevels.length - 1;
      state.coachLine = hasNextLevel ? "All 6 Galaxy Library pages repaired! Launch to the next level." : "All grade galaxies repaired! Start a new practice set.";
    } else {
      state.coachLine = nextUnlock && !wasAlreadyComplete
      ? `${nextUnlock.world} unlocked! Choose the new planet.`
      : "Galaxy Library page restored! Choose another planet.";
    }
  } else {
    state.coachLine = "Nice tow! Keep building the pattern.";
  }
  return { status: "accepted", target, missionComplete };
}

function queueCelebration(level) {
  const celebration = getCelebration(level);
  window.dispatchEvent(new CustomEvent("starblock-celebration", { detail: celebration }));
}

function getCelebration(level) {
  const setNumber = practiceSetIndex + 1;
  if (allGradeSetsComplete()) {
    return {
      tier: "tier-academy-all",
      stars: 16,
      kicker: "StarBlock Academy complete",
      title: "All K-3 Sets Repaired!",
      message: "Every grade and every practice set is complete. The whole Galaxy Library is shining.",
    };
  }
  if (setCompleteForAllGrades(practiceSetIndex)) {
    return {
      tier: "tier-academy-set",
      stars: 12,
      kicker: `Practice Set ${setNumber} complete`,
      title: "K-3 Set Complete!",
      message: `Kindergarten through Grade 3 Set ${setNumber} are all repaired.`,
    };
  }
  if (gradeAllSetsComplete(level)) {
    return {
      tier: "tier-grade-all",
      stars: 10,
      kicker: `${level.grade} mastered`,
      title: `All ${level.grade} Sets Complete!`,
      message: `All four ${level.grade} practice sets are repaired.`,
    };
  }
  return {
    tier: "tier-grade-set",
    stars: 6,
    kicker: `${level.grade} Set ${setNumber}`,
    title: `${level.grade} Set ${setNumber} Complete!`,
    message: "Six Galaxy Library pages repaired. More practice or the next level is ready.",
  };
}

class MissionScene extends Phaser.Scene {
  constructor() {
    super("MissionScene");
    this.blocks = new Map();
    this.targets = new Map();
    this.targetZones = new Map();
  }

  create() {
    this.drawScene();
    this.scale.on("resize", this.drawScene, this);
    this.input.on("dragstart", (_pointer, block) => this.startTow(block));
    this.input.on("drag", (_pointer, block, dragX, dragY) => {
      block.setPosition(dragX, dragY);
      this.ship.setPosition(dragX - 82, dragY - 42);
    });
    this.input.on("dragend", (_pointer, block) => this.endTow(block));
    this.game.events.on("ui-action", (action) => {
      if (action.type === "chooseMission") {
        chooseMission(action.missionId);
        this.drawScene();
        document.querySelector("#game-wrap")?.scrollIntoView({ block: "start" });
      }
      if (action.type === "reset") {
        resetMission();
        saveProgress();
        this.drawScene();
        document.querySelector("#game-wrap")?.scrollIntoView({ block: "start" });
      }
      if (action.type === "nextLevel") {
        goToNextLevel();
        this.drawScene();
        document.querySelector("#game-wrap")?.scrollIntoView({ block: "start" });
      }
      if (action.type === "morePractice") {
        startCurrentGradePracticeSet();
        this.drawScene();
        document.querySelector("#game-wrap")?.scrollIntoView({ block: "start" });
      }
      if (action.type === "hint" || action.type === "readAloud") {
        requestHint();
        this.refreshHud();
        this.refreshHints();
      }
    });
  }

  drawScene = () => {
    this.children.removeAll();
    this.blocks.clear();
    this.targets.clear();
    this.targetZones.clear();
    const mission = getActiveMission();
    const { width, height } = this.scale;
    this.drawBackground(width, height);
    this.add
      .text(width * 0.04, height * 0.06, mission.world, {
        fontFamily: "Arial",
        fontSize: `${Math.max(18, width * 0.025)}px`,
        color: "#eaf8ff",
        fontStyle: "bold",
      })
      .setAlpha(0.8);
    this.ship = this.createShip(Math.max(98, width * 0.16), height * 0.52);
    if (width < 620 && mission.targets.length > 3) {
      this.ship.setPosition(58, height * 0.2);
      this.ship.setScale(0.72);
    }
    const blockLayout = this.getBlockLayout(mission.blocks, width, height);
    mission.targets.forEach((target, index) => this.createTarget(target, width, height, index, mission.targets.length));
    mission.blocks.forEach((block, index) => this.createBlock(block, index, blockLayout));
    this.restoreSolvedBlockViews();
    this.refreshHints();
    this.refreshHud();
  };

  drawBackground(width, height) {
    const bg = this.add.graphics();
    bg.fillGradientStyle(0x071b2e, 0x0a2342, 0x1a3a5f, 0x0b1024, 1);
    bg.fillRect(0, 0, width, height);
    for (let i = 0; i < 80; i += 1) {
      const x = ((i * 97) % width) + 4;
      const y = ((i * 53) % height) + 4;
      bg.fillStyle(i % 5 === 0 ? 0xfff3b0 : 0xbde0fe, 0.75);
      bg.fillCircle(x, y, (i % 3) + 1);
    }
    const planet = this.add.graphics();
    planet.fillStyle(0x4cc9f0, 0.16);
    planet.fillCircle(width * 0.82, height * 0.15, Math.min(width, height) * 0.18);
    planet.lineStyle(3, 0xfefae0, 0.22);
    planet.strokeEllipse(width * 0.82, height * 0.15, width * 0.42, height * 0.1);
  }

  createShip(x, y) {
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

  createTarget(target, width, height, index, targetCount) {
    let x = Phaser.Math.Clamp(width * target.x, 64, width - 66);
    let y = Phaser.Math.Clamp(height * target.y, 78, height - 96);
    if (width < 620 && targetCount > 1) {
      const columns = targetCount > 3 ? 3 : targetCount;
      const rows = Math.ceil(targetCount / columns);
      const col = index % columns;
      const row = Math.floor(index / columns);
      const spacingX = Math.min(122, (width - 128) / Math.max(1, columns - 1));
      const startX = width / 2 - spacingX * (columns - 1) / 2;
      const startY = rows > 1 ? height * 0.3 : height * 0.42;
      x = startX + col * spacingX;
      y = startY + row * 104;
    }
    const targetView = this.add.container(x, y);
    const ring = this.add.graphics();
    ring.lineStyle(4, 0x9bf6ff, 0.8);
    ring.strokeRoundedRect(-56, -44, 112, 88, 14);
    ring.fillStyle(0x001d3d, 0.34);
    ring.fillRoundedRect(-52, -40, 104, 80, 12);
    const label = this.add
      .text(0, 0, target.label, {
        fontFamily: "Arial",
        fontSize: "18px",
        color: "#ffffff",
        fontStyle: "bold",
      })
      .setOrigin(0.5);
    targetView.add([ring, label]);
    const zone = this.add.zone(x, y, 124, 100);
    this.targetZones.set(target.id, zone);
    this.targets.set(target.id, targetView);
  }

  getBlockLayout(blocks, width, height) {
    const longest = blocks.reduce((max, block) => Math.max(max, block.label.length), 0);
    const isMobile = width < 620;
    const isCompact = isMobile && blocks.length >= 16 && longest <= 4;
    const blockWidth = isCompact ? 68 : longest > 8 ? 112 : longest > 6 ? 104 : 76;
    const blockHeight = isCompact ? 46 : 56;
    let columns = Math.max(3, Math.floor(width / Math.max(118, blockWidth + 34)));
    if (isMobile) {
      columns = blocks.length >= 16 ? 5 : blocks.length >= 8 && longest <= 4 ? 4 : Math.min(3, blocks.length);
    }
    const xGap = isMobile ? (width - blockWidth - 20) / Math.max(1, columns - 1) : blockWidth + 18;
    const rowGap = isCompact ? 48 : isMobile ? 58 : 72;
    const rows = Math.ceil(blocks.length / columns);
    const trayTop = Math.max(isCompact ? height * 0.66 : height * 0.58, height - (rows - 1) * rowGap - blockHeight / 2 - 6);
    const startX = isMobile ? 10 + blockWidth / 2 : width * 0.12;
    return { blockWidth, blockHeight, columns, rowGap, startX, trayTop, xGap, isCompact };
  }

  createBlock(block, index, layout) {
    const x = layout.startX + (index % layout.columns) * layout.xGap;
    const y = layout.trayTop + Math.floor(index / layout.columns) * layout.rowGap;
    const view = this.add.container(x, y);
    view.blockId = block.id;
    view.homeX = x;
    view.homeY = y;
    const tile = this.add.graphics();
    tile.fillStyle(Phaser.Display.Color.HexStringToColor(block.color).color, 1);
    tile.fillRoundedRect(-(layout.blockWidth / 2 - 4), -(layout.blockHeight / 2), layout.blockWidth - 8, layout.blockHeight, 10);
    tile.lineStyle(3, 0xffffff, 0.82);
    tile.strokeRoundedRect(-(layout.blockWidth / 2 - 4), -(layout.blockHeight / 2), layout.blockWidth - 8, layout.blockHeight, 10);
    const text = this.add
      .text(0, 0, block.label, {
        fontFamily: "Arial",
        fontSize: layout.isCompact ? "20px" : block.label.length > 8 ? "12px" : block.label.length > 4 ? "14px" : "24px",
        color: "#12263a",
        fontStyle: "bold",
      })
      .setOrigin(0.5);
    view.add([tile, text]);
    view.setSize(layout.blockWidth, layout.blockHeight + 8);
    view.setInteractive({ draggable: true, cursor: "grab" });
    this.blocks.set(block.id, view);
  }

  restoreSolvedBlockViews() {
    this.blocks.forEach((block) => {
      const targetId = state.solvedBlockTargets[block.blockId];
      const zone = targetId ? this.targetZones.get(targetId) : undefined;
      if (!zone) return;
      block.setPosition(zone.x, zone.y);
      block.setScale(0.82);
      block.disableInteractive();
    });
  }

  startTow(block) {
    document.querySelector("#game-wrap")?.scrollIntoView({ block: "start" });
    block.setDepth(20);
    this.tweens.add({ targets: block, scale: 1.1, duration: 120 });
  }

  endTow(block) {
    const targetId = this.findDropTarget(block.x, block.y);
    if (!targetId) {
      this.returnBlock(block);
      return;
    }
    const result = tryPlaceBlock(block.blockId, targetId);
    if (result.status === "accepted") {
      const zone = this.targetZones.get(result.target.id);
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

  findDropTarget(x, y) {
    for (const [id, zone] of this.targetZones) {
      if (Phaser.Geom.Rectangle.Contains(zone.getBounds(), x, y)) return id;
    }
    return undefined;
  }

  returnBlock(block) {
    this.tweens.add({ targets: block, x: block.homeX, y: block.homeY, scale: 1, duration: 220, ease: "Sine.easeOut" });
  }

  refreshHints() {
    this.targets.forEach((target) => {
      this.tweens.killTweensOf(target);
      target.setScale(1);
    });
    if (state.hintLevel === 0) return;
    const openTarget = getActiveMission().targets.find((target) => !targetComplete(target));
    const target = openTarget ? this.targets.get(openTarget.id) : undefined;
    if (target) {
      this.tweens.add({ targets: target, scale: 1.08, yoyo: true, repeat: -1, duration: 540, ease: "Sine.easeInOut" });
    }
  }

  sparkle(x, y) {
    for (let i = 0; i < 9; i += 1) {
      const star = this.add.star(x, y, 5, 5, 12, 0xfff3b0, 0.9);
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

  refreshHud() {
    window.dispatchEvent(new CustomEvent("starblock-state"));
  }
}

const config = {
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
const hud = {
  world: document.querySelector("#world-name"),
  grade: document.querySelector("#grade-name"),
  title: document.querySelector("#mission-title"),
  story: document.querySelector("#story-context"),
  goal: document.querySelector("#mission-goal"),
  coach: document.querySelector("#coach-line"),
  bar: document.querySelector("#progress-bar"),
  stickers: document.querySelector("#stickers"),
  levelName: document.querySelector("#level-name"),
  levelProgress: document.querySelector("#level-progress"),
  nextLevel: document.querySelector("#next-level-button"),
  practiceSet: document.querySelector("#practice-set-button"),
  celebration: document.querySelector("#celebration"),
  celebrationKicker: document.querySelector("#celebration-kicker"),
  celebrationTitle: document.querySelector("#celebration-title"),
  celebrationMessage: document.querySelector("#celebration-message"),
  celebrationStars: document.querySelector("#celebration-stars"),
  celebrationBurst: document.querySelector("#celebration-burst"),
  celebrationClose: document.querySelector("#celebration-close"),
  planetGrid: document.querySelector(".planet-grid"),
  hint: document.querySelector("#hint-button"),
  reset: document.querySelector("#reset-button"),
  readAloud: document.querySelector("#read-aloud"),
  friendlyFont: document.querySelector("#friendly-font"),
};

function renderHud() {
  const mission = getActiveMission();
  const completedCount = getLevelCompletedCount();
  const currentLevel = getCurrentLevel();
  hud.world.textContent = mission.world;
  hud.grade.textContent = mission.grade;
  hud.title.textContent = mission.title;
  hud.story.textContent = mission.story;
  hud.goal.textContent = mission.goal;
  hud.coach.textContent = state.coachLine;
  hud.bar.style.width = `${Math.round(getMissionProgressRatio(mission) * 100)}%`;
  hud.levelName.textContent = currentLevel.name;
  hud.levelProgress.textContent = `${completedCount}/${currentLevel.missions.length} pages`;
  hud.nextLevel.hidden = !isLevelComplete();
  hud.nextLevel.textContent = state.currentLevelIndex >= galaxyLevels.length - 1 ? "New Set" : "Next Level";
  hud.practiceSet.hidden = !isLevelComplete();
  renderPlanetButtons();
  hud.stickers.innerHTML = "";
  for (let i = 0; i < completedCount; i += 1) {
    const sticker = document.createElement("span");
    sticker.className = "sticker";
    sticker.textContent = "*";
    hud.stickers.append(sticker);
  }
}

function renderPlanetButtons() {
  hud.planetGrid.innerHTML = "";
  getCurrentLevelMissions().forEach((mission) => {
    const completedCount = getLevelCompletedCount();
    const isUnlocked = mission.unlockAt <= completedCount;
    const isDone = state.completedMissionIds.has(mission.id);
    const button = document.createElement("button");
    button.className = "planet-button";
    button.dataset.mission = mission.id;
    button.style.setProperty("--planet-color", planetColor(mission.id));
    button.classList.toggle("active", mission.id === state.activeMissionId);
    button.classList.toggle("locked", !isUnlocked);
    button.classList.toggle("done", isDone);
    button.disabled = !isUnlocked;
    button.textContent = isUnlocked ? `${mission.icon}${isDone ? " DONE" : ""}` : "LOCK";
    button.title = isUnlocked ? `${mission.world}${isDone ? " complete" : ""}` : `Unlock with ${mission.unlockAt} page${mission.unlockAt === 1 ? "" : "s"}`;
    if (isUnlocked) {
      button.addEventListener("click", () => emitUiAction("chooseMission", { missionId: mission.id }));
    }
    hud.planetGrid.append(button);
  });
}

function planetColor(missionId) {
  const colors = ["#bde0fe", "#ffafcc", "#9bf6ff", "#ffd166", "#caffbf", "#f1c0e8"];
  const index = getCurrentLevelMissions().findIndex((mission) => mission.id === missionId);
  return colors[Math.max(0, index) % colors.length];
}

function emitUiAction(type, detail = {}) {
  game.events.emit("ui-action", { type, ...detail });
}

function showCelebration(event) {
  const detail = event.detail;
  hud.celebration.className = `celebration ${detail.tier}`;
  hud.celebrationKicker.textContent = detail.kicker;
  hud.celebrationTitle.textContent = detail.title;
  hud.celebrationMessage.textContent = detail.message;
  hud.celebrationStars.innerHTML = "";
  hud.celebrationBurst.innerHTML = "";
  for (let i = 0; i < detail.stars; i += 1) {
    const star = document.createElement("span");
    star.textContent = "*";
    hud.celebrationStars.append(star);

    const burst = document.createElement("i");
    burst.style.setProperty("--burst-x", `${Math.cos(i * 1.7) * (42 + detail.stars * 4)}px`);
    burst.style.setProperty("--burst-y", `${Math.sin(i * 1.7) * (28 + detail.stars * 3)}px`);
    burst.style.setProperty("--burst-delay", `${i * 35}ms`);
    hud.celebrationBurst.append(burst);
  }
}

function hideCelebration() {
  hud.celebration.classList.add("hidden");
}

hud.hint.addEventListener("click", () => emitUiAction("hint"));
hud.reset.addEventListener("click", () => emitUiAction("reset"));
hud.nextLevel.addEventListener("click", () => emitUiAction("nextLevel"));
hud.practiceSet.addEventListener("click", () => emitUiAction("morePractice"));
hud.celebrationClose.addEventListener("click", hideCelebration);
hud.readAloud.addEventListener("change", () => emitUiAction("readAloud"));
hud.friendlyFont.addEventListener("change", () => document.documentElement.classList.toggle("friendly-font", hud.friendlyFont.checked));
window.addEventListener("starblock-state", renderHud);
window.addEventListener("starblock-celebration", showCelebration);
renderHud();
