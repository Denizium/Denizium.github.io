const userNumber1 = prompt("Please, enter a first random number");
const userNumber2 = prompt("Please, enter a second random number");
const userNumber3 = prompt("Please, enter a third random number");
let arithmeticMean = (Number(userNumber1) + Number(userNumber2) + Number(userNumber3)) / 3;
let userArithmeticMean = `(${userNumber1} + ${userNumber2} + ${userNumber3}) / 3 = ${arithmeticMean}`; 
alert(userArithmeticMean);