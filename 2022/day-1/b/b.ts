import { parseByNewline, parseByTwoNewline } from "../utils.ts";

const input = await Deno.readTextFile("../input.txt");

const sortTotalCalories = (I: Array<string>) => {
  const result = [];

  for (let i = 0; i < I.length; i++) {
    let totalCalories = 0;
    const elfCalories = parseByNewline(I[i]);

    for (let j = 0; j < elfCalories.length; j++) {
      totalCalories += parseInt(elfCalories[j], 10);
      result.push(totalCalories);
    }
  }

  return result.sort((a, b) => b - a);
};

const countCalories = (calories: Array<number>) => {
  let count = 0;

  for (let k = 0; k < calories.length; k++) {
    count += calories[k];
  }

  return count;
};

const getTotalSumTopThreeCal = (I: string) => {
  if (!I || !I.length) throw "Please enter valid input";

  const lines = parseByTwoNewline(I);

  let topThreeCal = [];

  topThreeCal = sortTotalCalories(lines).slice(0, 3);

  return countCalories(topThreeCal);
};

const result = getTotalSumTopThreeCal(input);

console.log("My puzzle answer is: ", result);
