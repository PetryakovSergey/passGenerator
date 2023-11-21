const { generatePassword } = require('./generatePassword')

const password = generatePassword(14)
console.log(password);