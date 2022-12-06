import { parseByNewline, parseByTwoNewline } from "../utils.ts";

const input = await Deno.readTextFile("../input.txt");

const findMostCalories = (I: string): number => {
  if (!I || !I.length) console.error("Please enter valid input");

  const lines = parseByTwoNewline(I);

  let mostCalories = 0;
  let totalElfCalories = 0;

  for (let i = 0; i < lines.length; i++) {
    const elfCalories = parseByNewline(lines[i]);

    for (let j = 0; j < elfCalories.length; j++) {
      totalElfCalories += parseInt(elfCalories[j], 10);

      if (totalElfCalories > mostCalories) {
        mostCalories = totalElfCalories;
      }
    }

    totalElfCalories = 0;
  }

  return mostCalories;
};

const result = findMostCalories(input);

console.log("My puzzle answer is: ", result);
