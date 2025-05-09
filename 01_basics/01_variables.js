const accountId = 144553
let accountEmail = "adi@gmail.com"
var accountPassword = "123342"
accountCity = "Delhi"
let accountState;

// accountId = 2   not allowed

accountEmail = "ad@google.com"
accountPassword = "43532"
accountCity = "Jaipur"


/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
