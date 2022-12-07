const read = require("../FileReader");
const { parseInput } = require("./Parser");

/*The first column is what your opponent is going to play:
 A for Rock, B for Paper, and C for Scissors. The second column--
 must be what you should play in response: 
 X for Rock, 
 Y for Paper,
 Z for Scissors. 
 Winning every time would be suspicious, 
 so the responses must have been carefully chosen.

 The winner of the whole tournament is the player with the highest score. Your total score is the sum of your scores for each round
 Your total score is the sum of your scores for each round. 
 The score for a single round is the score for the shape you selected:
  (1 for Rock, 2 for Paper, and 3 for Scissors) + the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).
 */

const exampleInput = "Day2_RockPaperScissors/input_example.txt";
const input = "Day2_RockPaperScissors/input.txt";
// const outputExample = "./output_example.txt";

/**
 * Variables
 */

let totalScore = 0; // sum for each round

const sumPerRound = new Array(); //selected shape +

const SCORE = {
  lost: 0,
  draw: 3,
  won: 6,
};

/**
 * Parse the file to populate the variables
 */
const parseFile = (input) => {
  const file = read(input);
  return parseInput(file);
};

const assignmentWithExample = () => {
  // partOne(parseFile(exampleInput));
  partTwo(parseFile(exampleInput));
};
const assignment = () => {
  // partOne(parseFile());
  partTwo(parseFile(input));
};

const partOne = (rounds) => {
  console.log("Part One");
  console.log("---------------------------");
  const didWin = (opponentMove, ownMove) => {
    if (
      (ownMove === 1 && opponentMove === 3) ||
      (ownMove === 3 && opponentMove === 2) ||
      (ownMove === 2 && opponentMove === 1)
    ) {
      return true;
    }
    return false;
  };

  rounds.forEach((moves, round) => {
    console.log(round, moves);
    [opponent, you] = moves;

    if (opponent === you) {
      totalScore = totalScore + SCORE.draw + you;
      sumPerRound.push(SCORE.draw + you);

      return;
    } else if (didWin(opponent, you)) {
      totalScore = totalScore + SCORE.won + you;
      sumPerRound.push(SCORE.won + you);
    } else {
      totalScore = totalScore + SCORE.lost + you;
      sumPerRound.push(SCORE.lost + you);
    }
    console.log(round, sumPerRound[round]);
  });
  console.log("total score: ", totalScore);
};

const partTwo = (rounds) => {
  totalScore = 0;
  console.log("Part Two");
  console.log("---------------------------");

  // X -> you lose (1)
  // y -> draw (2)
  // z -> you win (3)

  rounds.forEach((moves, round) => {
    [opponentMove, ownMove] = moves;
    console.log(round, totalScore);

    const lose = (opponentMove) => {
      if (opponentMove === 1) return 3;
      if (opponentMove === 2) return 1;
      return 2;
    };
    const win = (opponentMove) => {
      if (opponentMove === 1) return 2;
      if (opponentMove === 2) return 3;
      return 1;
    };
    if (ownMove === 2) {
      //it's a draw
      const score = SCORE.draw + opponentMove;
      totalScore = totalScore + score;
      sumPerRound.push(SCORE.draw + score); // choose the same shape
    } else if (ownMove === 1) {
      const score = SCORE.lost + lose(opponentMove);
      totalScore = totalScore + score;
      sumPerRound.push(score);
    } else {
      const score = SCORE.won + win(opponentMove);
      totalScore = totalScore + score;
      sumPerRound.push(score);
    }
    console.log(round, moves, sumPerRound[round]);
  });
  console.log("total score: ", totalScore);
};

// assignmentWithExample();
assignment();
