// Input
let modules = require("./input.js");
let expenseReport = modules.input;

// Part 1
expenseReport.some((value) => {
  const targetedValue = 2020 - value;
  if (expenseReport.includes(targetedValue)) {
    console.log(`${value} + ${targetedValue} = ${value + targetedValue}`);
    console.log(`${value} x ${targetedValue} = ${value * targetedValue}`);
    return true;
  }
});

// Part 2
expenseReport.some((num1) => {
  const filteredSet = expenseReport.filter((a) => a !== 2020 - num1);
  return filteredSet.some((num2) => {
    const num3 = 2020 - num1 - num2;
    if (filteredSet.includes(num3)) {
      console.log(`${num1} + ${num2} + ${num3} = ${num1 + num2 + num3}`);
      console.log(`${num1} x ${num2} x ${num3} = ${num1 * num2 * num3}`);
      return true;
    }
  });
});
