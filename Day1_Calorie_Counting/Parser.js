const parseInput = (strings) => {
  console.log(strings);
  const elements = strings.map((string) => {
    if (string) {
      return Number(string);
    }
    return "";
  });

  const spaces = findElves(elements);

  // Calories per elf
  const elves = [];
  let elfId = 0;

  let start = 0;

  spaces.forEach((location) => {
    console.log(spaces);
    console.log("location", location);
    elf = {
      id: elfId,
      calories: elements.slice(start, location),
    };

    elves.push(elf);
    elfId += 1;
    start = location + 1;
    end = location + 1;
  });

  // also take the last elf into account

  elf = {
    id: elfId,
    calories: elements.slice(start, spaces[-1]),
  };

  elves.push(elf);
  return elves;
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
