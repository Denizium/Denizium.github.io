const userQuestion = prompt("What action to take: add, sub, mult, div?");
const userNumber1 = prompt("Please, enter a first any number");
const userNumber2 = prompt("Please, enter a second any number");
if (userQuestion === "add") { let add = Number(userNumber1) + Number(userNumber2); let userAdd = `${userNumber1} + ${userNumber2} = ${add}`; alert(userAdd); }
else if (userQuestion === "sub") { let sub = Number(userNumber1) - Number(userNumber2); let userSub = `${userNumber1} - ${userNumber2} = ${sub}`; alert(userSub); }
else if (userQuestion === "mult") { let mult = Number(userNumber1) * Number(userNumber2); let userMult = `${userNumber1} * ${userNumber2} = ${mult}`; alert(userMult); }
else if (userQuestion === "div") { let div = Number(userNumber1) / Number(userNumber2); let userDiv = `${userNumber1} / ${userNumber2} = ${div}`; alert(userDiv); }
else { alert("не знайшов функцію"); }