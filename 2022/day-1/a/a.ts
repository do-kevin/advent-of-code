const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n\n");

let mostCalories = 0;

let totalElfCalories = 0;

for (let i = 0; i < lines.length; i++) {
  const elfCalories = lines[i].split("\n");

  for (let j = 0; j < elfCalories.length; j++) {
    totalElfCalories += parseInt(elfCalories[j], 10);

    if (totalElfCalories > mostCalories) {
      mostCalories = totalElfCalories;
    }
  }

  totalElfCalories = 0;
}

console.log(mostCalories);
