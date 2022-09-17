'use strict'; 

function solveEquation(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;
 
  if (discriminant === 0) {
    return [-b / (2 * a)];
  } else if (discriminant > 0) {
    return [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];   
  }
  return []; 
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  if (isNaN(Number(percent)) === true) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
  } 
  
  if (isNaN(Number(contribution)) === true) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
  } 

  if (isNaN(Number(amount)) === true) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
  }     
  
  let loanBody = amount - contribution; 
  let termInMonths = (date.getMonth() - new Date().getMonth()) + ((date.getFullYear() - new Date().getFullYear()) * 12);

  const p = (percent / 100) / 12;
  const payment = loanBody * (p + (p / (((1 + p)**termInMonths) - 1)));
  
  return +(payment * termInMonths).toFixed(2);
}
 