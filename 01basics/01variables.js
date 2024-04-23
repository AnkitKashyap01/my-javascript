//let, const and var variables.

const accountId = 12345;
let accountEmail = "xyz@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";//Not a good practice
let accountState;//will give not defined

//accountId = 2 //can't change the value of const keyword as it is not allowed
console.log(accountId)

accountEmail = 'abc@gmail.com'
accountPassword='212121'
accountCity='Bengaluru'

//console.table is used to print more than one variable
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

//var is not used becoz it gives issues in block scope and functional scope. 
