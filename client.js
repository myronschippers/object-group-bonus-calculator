const employees = [
    {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

$(document).ready(domReady);

/**
 * Loop over the `employees` array and do the following:
 * - use each employee object as the input to a function that will calculate for that employee
 * - `console.log` the results of each iteration.
 *
 * @param {array} employees
 * @param {string} employees[0].name
 * @param {string} employees[0].employeeNumber
 * @param {string} employees[0].annualSalary
 * @param {number} employees[0].reviewRating
 */
function processEmployees(employees) {
  console.log('Processing Employees ......');
  for (let i = 0; i < employees.length; i++) {
    const indvEmployee = employees[i];
    console.log(calculateForEmployee(indvEmployee));
  }
}

/**
 * Make all function calls needed in order to calculate the employee's
 * 'bonusPercentage', 'totalCompensation', & 'totalBonus'.
 * @param {object} employeeData
 * @param {string} employeeData.name
 * @param {string} employeeData.employeeNumber
 * @param {string} employeeData.annualSalary
 * @param {number} employeeData.reviewRating
 * @returns {object} - containing new employee calculations
 */
function calculateForEmployee(employeeData) {
  const bonusPctNum = calculateEmployeeBonusPct(
    employeeData.reviewRating,
    employeeData.employeeNumber,
    employeeData.annualSalary
  );
  const totalBonus = calculateBonusSalaryAdjustment(
    employeeData.annualSalary,
    bonusPctNum
  );
  const totalCompensation = calculateTotalCompentsation(
    employeeData.annualSalary,
    totalBonus
  );
  const employeeCalculations = {
    name: employeeData.name,
    bonusPercentage: `${bonusPctNum}%`,
    totalCompensation,
    totalBonus,
  };

  return employeeCalculations;
}

/**
 * Calculate the bonus percent that the employee is supposed to get.
 * @param {number} rating
 * @param {string} employeeNmuber
 * @param {string} currentSalary
 * @returns {number} - integer value for the bonus percentage
 */
function calculateEmployeeBonusPct(rating, employeeNmuber, currentSalary) {
  console.log('rating', rating);
  const seniorityBonusPct = getSeniorityBonusPct(employeeNmuber);
  let bonusPct;
  switch (rating) {
    case 3:
      bonusPct = 4;
      break;
    case 4:
      bonusPct = 6;
      break;
    case 5:
      bonusPct = 10;
      break;
    default:
      bonusPct = 0;
  }
  console.log('bonusPct (before seniority)', bonusPct);
  bonusPct += seniorityBonusPct;

  bonusPct = restrictBonusPct(bonusPct, currentSalary);

  return bonusPct;
}

/**
 * Check to see if the employee has been 
 * @param {string} employeeNumber
 * @returns {number} 
 */
function getSeniorityBonusPct(employeeNumber) {
  const numOfCharacters = employeeNumber.length;
  console.log('numOfCharacters', numOfCharacters);
  if (numOfCharacters >= 4) { // signifies employee has been with company more than 15 years
    return 5; // pct 
  }

  return 0;
}

/**
 * Validate the bonusPct and reset if necessary.
 * @param {number} bonusPct
 * @param {string} currentSalary
 * @returns {number}
 */
function restrictBonusPct(bonusPct, currentSalary) {
  console.log('currentSalary', currentSalary);
  console.log('bonusPct', bonusPct);
  let restrictedBonusPct = bonusPct;
  const currSalaryAsNum = currentSalary * 1;
  const salaryCap = 6500;

  if (currSalaryAsNum > salaryCap) {
    restrictedBonusPct = bonusPct - 1;
  }

  if (bonusPct < 0) {
    restrictedBonusPct = 0;
  } else if (bonusPct > 13) {
    restrictedBonusPct = 13;
  }
  console.log('restrictedBonusPct', restrictedBonusPct);

  return restrictedBonusPct;
}

/**
 * Calculate for the salary bonus adjustment value that will be added to the annual salary.
 * @param {string} salary
 * @param {number} bonus
 * @returns {number}
 */
function calculateBonusSalaryAdjustment(salary, bonus) {
  const bonusFraction = bonus / 100;
  const salaryAsNumber = salary * 1;
  let bonusAdjustment = salaryAsNumber * bonusFraction;

  bonusAdjustment = Math.round(bonusAdjustment);
  return bonusAdjustment;
}

/**
 * Calculate the new total compensation with the total bonus added to the salary.
 * @param {string} salary
 * @param {number} bonusTotal
 * @returns {number}
 */
function calculateTotalCompentsation(salary, bonusTotal) {
  const salaryAsNumber = salary * 1;
  const totalCompensation = salaryAsNumber + bonusTotal;

  return totalCompensation;
}

let $CURR_EMPLOYEE_LIST;
let $ADJUSTED_EMPLOYEE_LIST;
let $ADJUSTED_SALARY_BTN;
/**
 * Bind event handlers and capture dom elements needed.
 */
function domReady() {
  $CURR_EMPLOYEE_LIST = $('.js-currentEmployees');
  $ADJUSTED_EMPLOYEE_LIST = $('.js-adjustedEmployees');
  $ADJUSTED_SALARY_BTN = $('.js-adjustSalary');

  $ADJUSTED_SALARY_BTN.on('click', onClickAdjustSalary);
}

function onClickAdjustSalary(eventObj) {
  // start calculations for salary adjustments
}

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( 'employees', employees );
processEmployees(employees);
