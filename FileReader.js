const fs = require("fs");
const filePath = "./report.txt";
// const filePath = "./example.txt";

// reads the report file and returns an array of values
const readFile = (filePath) => {
  const data = fs.readFileSync(filePath, "utf8");
  // data is of type string, turn it to a number
  return data.split("\n").map((element) => parseInt(element));
};

const read = (filePath) => {
  return fs.readFileSync(filePath, "utf8").split("\n");
};
module.exports = readFile;
module.exports = read;
