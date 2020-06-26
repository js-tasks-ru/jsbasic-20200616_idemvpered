/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
const salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}
// Напишите функцию для суммирования всех зарплат. Должно получиться 3900.
/*const sumSalary = (obj = {}) => {
    obj.total = 0;
    for(let key in obj) {
        if(key != 'total' && typeof obj[key] == 'number'){
            obj.total = obj.total + obj[key];
        }
    }
    return obj.total;
} */
function sumSalary(salaries = {})
{
  salaries.total = 0;
  for(let key in salaries) 
  {
    if(key != 'total' && typeof salaries[key] == 'number') 
    {
      salaries.total = salaries.total + salaries[key];
    }
  } return salaries.total
}
//const n = sumSalaries(salaries);
//console.log(n);