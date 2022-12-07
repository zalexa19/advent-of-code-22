const read = require("../FileReader");
const { parseInput } = require("./Parser");

// const input = "Day1_Calorie_Counting/input_example.txt";
const input = "Day1_Calorie_Counting/input.txt";
const outputExample = "./output_example.txt";

/**
 * Variables
 */

let parsedRows;

/**
 * Parse the file to populate the variables
 */
const parseFile = () => {
  const file = read(input);

  return parseInput(file);
};
const assignment = () => {
  partOne(parseFile());
  partTwo(parseFile());
};

const partOne = (elves) => {
  console.log("Part One");
  console.log("---------------------------");
  console.log(elves);
  // sum for each elf
  const mostFood = { id: null, amount: null };

  elves.forEach(({ id, calories }) => {
    const sum = calories.reduce((acc, a) => acc + a);
    if (sum > mostFood.amount) {
      mostFood.id = id;
      mostFood.amount = sum;
    }
  });

  console.log("elf with most food:", mostFood);
};

const partTwo = (elves) => {
  console.log("Part Two");
  console.log("---------------------------");

  console.log(elves);
  // sum for each elf

  const topThree = [0, 0, 0];
  let min = 0;
  elves.forEach(({ id, calories }) => {
    const sum = calories.reduce((acc, a) => acc + a);
    if (sum > min) {
      // replace the min
      const index = topThree.indexOf(min);
      topThree[index] = sum;

      // find the new min
      min = Math.min(...topThree);
      console.log(min);
    }
  });

  console.log("elf with most food:", topThree[0] + topThree[1] + topThree[2]);
};

assignment();
