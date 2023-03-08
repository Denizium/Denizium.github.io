const userNumber1 = prompt("Please, enter the first random number")
const userNumber2 = prompt("Please, enter a second random number")
let add = Number(userNumber1) + Number(userNumber2);
let subtraction = Number(userNumber1) - Number(userNumber2);
let multiplication = Number(userNumber1) * Number(userNumber2);
let division = Number(userNumber1) / Number(userNumber2);
let user = `${userNumber1} + ${userNumber2} = ${add} \n ${userNumber1} - ${userNumber2} = ${subtraction} \n ${userNumber1} * ${userNumber2} = ${multiplication} \n ${userNumber1} / ${userNumber2} = ${division} \n`;
alert(user)