import { parseByNewline, parseByTwoNewline } from "../utils.ts";

const input = await Deno.readTextFile("../input.txt");

const findTotalCaloriesFromTopThree = (I: string) => {
  if (!I || !I.length) console.error("Please enter the input");

  const lines = parseByTwoNewline(input);

  let total = 0;

  let sortedCalories = [];

  for (let i = 0; i < lines.length; i++) {
    let totalCalories = 0;
    const elfCalories = parseByNewline(lines[i]);

    for (let j = 0; j < elfCalories.length; j++) {
      totalCalories += parseInt(elfCalories[j], 10);
      sortedCalories.push(totalCalories);
    }
  }

  sortedCalories = sortedCalories.sort((a, b) => b - a);
  sortedCalories = sortedCalories.slice(0, 3);

  console.log("sorted: ", sortedCalories);

  for (let k = 0; k < sortedCalories.length; k++) {
    total += sortedCalories[k];
  }

  return total;
};

const result = findTotalCaloriesFromTopThree(input);

console.log("My puzzle answer is: ", result);
