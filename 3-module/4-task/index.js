/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
    const newUsers = users.filter(function(user){
      if (user.age <= age) {
        return user}  
      return false
    })
    return newUsers.map(item => (`${item.name}, ${item.balance}`)).join('\n')
}
