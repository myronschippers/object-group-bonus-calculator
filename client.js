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
 */
function calculateForEmployee(employeeData) {
  const employeeCalculations = {
    name: employeeData.name,
    bonusPercentage: null,
    totalCompensation: null,
    totalBonus: null,
  };

  return employeeCalculations;
}

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( 'employees', employees );
processEmployees(employees);
