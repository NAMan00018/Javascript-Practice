let score=undefined

console.log(typeof score);

let valueinnumber=Number(score)
console.log(typeof valueinnumber);
console.log(valueinnumber);


// "85" =>85
// "85abc"-> Nan even if valueinnumber doesn't contain any number when "85abc" is converted it type is "number";

// true->1 //false->0
//null->0
// undefined-> Nan


let isloggedin="hitesh"
console.log(typeof isloggedin);

let isLogged_in= Boolean(isloggedin)
console.log(typeof isLogged_in);
console.log(isLogged_in);

//  1 -> true 0 -> false
// "naam" -> true 
// "" -> false


let sum=""
console.log(typeof sum);
let newsum=Number(sum)
console.log(typeof newsum)
console.log(newsum);

// 33->"33"
//""->0

// *****************operations***********

console.log(2%3);
console.log(2/3);

console.log("2"+4+6);
console.log(25-4+"5");
