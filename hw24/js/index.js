const userQuestion = prompt("What action to take: add, sub, mult, div?");
const userNumber1 = prompt("Please, enter a first random number");
const userNumber2 = prompt("Please, enter a second random number");
let add = Number(userNumber1) + Number(userNumber2);
let sub = Number(userNumber1) - Number(userNumber2);
let mult = Number(userNumber1) * Number(userNumber2);
let div = Number(userNumber1) / Number(userNumber2);
let userAdd = `${userNumber1} + ${userNumber2} = ${add}`; 
let userSub = `${userNumber1} - ${userNumber2} = ${sub}`;
let userMult = `${userNumber1} * ${userNumber2} = ${mult}`;
let userDiv = `${userNumber1} / ${userNumber2} = ${div}`;
if (userQuestion === "add") {
    alert(userAdd);
    } else if (userQuestion === "sub") {
    alert(userSub);
    } else if (userQuestion === "mult") {
    alert(userMult);
    } else if (userQuestion === "div") {
    alert(userDiv);
    } else {
    alert("не знайшов функцію");
    }