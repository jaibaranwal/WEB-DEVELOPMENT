let score = null;   

console.log(typeof score);   
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);
//ANY TO NUMBER
// null -> 0
// "33" -> 33
// "33abc" -> NaN
// true -> 1  ; false -> 0

let valueInBoolean = Boolean(score);
console.log(typeof valueInBoolean);
console.log(valueInBoolean);

//ANY TO BOOLEAN
// 1 -> true ; 0 -> false ; 2 -> true
// "" -> false ; NaN -> false ; null -> false
// "jai" -> true

let valueInString = String(score);
console.log(typeof valueInString);
console.log(valueInString);

//ANY TO STRING 
// 2 -> "2"
// true -> "true" ; null -> "null"

