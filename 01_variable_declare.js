//"use strict"     // dont allow variable declaration without let,const and var
const accountId= 12345;
let accountEmail = "jai@google.com"
var accountPassword = "1321sad"
let accountCity = "ghaziyabad"

var accountState;  

console.table([accountEmail,accountPassword,accountCity,accountState])

// accountId=6789           const cant be change       
accountEmail="ram@google.com"
accountPassword="234rfdc"
accountCity="delhi"
accountState="up"

console.log(accountId)

console.table([accountEmail,accountPassword,accountCity])