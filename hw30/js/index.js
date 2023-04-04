// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

for (let number = 20; number <= 30; number += 0.5) {
  document.write(number + " ");
}

//Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

document.write("<p>");
for (let dollar = 10; dollar <= 100; dollar += 10) {
  document.write(dollar * 27 + " ")
}
document.write("</p>");

//Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

document.write("<p>");
const N = prompt("Enter any integer: ");
for (let i = 1; i <= 100; i++) {
  if (i * i <= N) {
    document.write(i + " ");
  }
}
document.write("</p>");

//Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

document.write("<p>");
let num = +prompt('Enter an integer');
function primeNumb(num) {
  if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return 'Composite number'
      }
    }
    return 'Prime number'
  } else {
    return 'Number must be greater than 1'
  }
}
document.write(primeNumb(num));
document.write("</p>");

//Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь.
//(Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

document.write("<p>");
let number = prompt("Enter a number to check if it is possible to get a number from 3 to the power: ");
if (number % 3 === 0 && number) {
  document.write("Number can be obtained");
} else {
  document.write("Can't get number");
}
document.write("</p>");