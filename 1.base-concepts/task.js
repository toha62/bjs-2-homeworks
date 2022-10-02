"use strict";

function solveEquation(a, b, c) {  
  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return [];
  } else if (discriminant === 0) {
    return [-b / (2 * a)];
  } else {
    return [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
  }
}

function calculateTotalMortgage(percent, contribution, amount, date) {       
  if (percent <= 0 || isNaN(Number(percent))) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  if (contribution < 0 || isNaN(Number(contribution))) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  if (amount <= 0 || isNaN(Number(amount))) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }
  if (isNaN(Date.parse(date))) {
    return `Параметр "Срок ипотеки" содержит неправильное значение "${date}"`;
  }
  
  let loanBody = amount - contribution;
  let currentDate = new Date();
  let totalMonth = (date.getFullYear() - currentDate.getFullYear()) * 12 + date.getMonth() - currentDate.getMonth();
  let percentRate = percent / 1200;
  let monthlyPayment = loanBody * (percentRate + percentRate / (((1 + percentRate) ** totalMonth) - 1));
  let totalAmount = Number((monthlyPayment * totalMonth).toFixed(2));

  console.log(totalAmount);
  
  return totalAmount;
}
