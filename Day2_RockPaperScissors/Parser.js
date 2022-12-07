const parseInput = (strings) => {
  // const ROCK = [A, X]; //1
  // const PAPER = [B, Y]; //2
  // const SCISSORS = [C, Z]; //3

  console.log("parsing:");
  console.log(strings);
  const elements = strings.map((string) => {
    const chars = string.split(" ");
    chars.forEach((char, index) => {
      if (char === "A" || char === "X") {
        chars[index] = 1;
      }
      if (char === "B" || char === "Y") {
        chars[index] = 2;
      }
      if (char === "C" || char === "Z") {
        chars[index] = 3;
      }
    });
    return chars;
  });
  return elements;
};

const findElves = (elements) => {
  let shouldStop = false;

  const spaces = [];
  lastIndex = elements.indexOf("");

  while (!shouldStop) {
    if (lastIndex === -1) {
      shouldStop = true;
      break;
    }

    spaces.push(lastIndex);
    lastIndex = elements.indexOf("", lastIndex + 1);
  }
  console.log(spaces);
  return spaces;
};

exports.parseInput = parseInput;
/*
0 1000
1 2000
2 3000
3 
4 4000
5 
6 5000
7 6000
8 
9 7000
10 8000
11 9000
12 
13 10000


[
  '1000', '2000',  '3000',
  '',     '4000',  '',
  '5000', '6000',  '',
  '7000', '8000',  '9000',
  '',     '10000'
]

*/
