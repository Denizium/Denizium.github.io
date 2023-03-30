// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

for (let number = 20; number <= 30; number+=0.5) {
    document.write( number + " ");
}
//Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
document.write("<p></p>");
for (let dollar = 10; dollar <= 100; dollar+=10) {
    document.write(dollar * 27 + ",")
}

//Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
// document.write("<p></p>");
// let N = +prompt('Enter any natural number');
// Array.from({ length: Math.min(Math.sqrt(N), 100) }, (n, i) => i + 1);
// document.write()

//Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
document.write("<p></p>");
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

//Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь.
//(Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
document.write("<p></p>");
let number = prompt("Введите что-бы проверить можно ли получить число из 3-ки в степени: ");
if (number % 3 === 0 && number ) {
    document.write("Число можно получить ");
}   else {
    document.write("Число нельзя получить");
}

// while (number % 3 == 0) {
//     number /= 3;
// }
// document.write((number == 1)? "Число можно получить " : "Число нельзя получить");






















// let mult = 1;
// for (let i = 15; i <= 35; i++) {
//     mult *= i;
// }
// console.log(mult);
//==============================================================
// sum = 0;
// for (let i = 1; i <= 500; i++) {
//     sum += i;
// }
// console.log(sum / 500);
//===============================================================
// sum = 0;
// for (let i = 30; i <= 80; i += 2) {
//     sum += i;
// }
// console.log(sum);
//===============================================================
// for (let number = 103; number <= 199; number += 3) {
//     console.log(number);
// }
//================================================================
// let naturalNum = +prompt('Enter any natural number');
// console.log(`You entered a number: ${naturalNum}`);
// for (let i = 1; i <= naturalNum; i++) {
//     console.log(`The divisor of this number: ${i}`);
// }
//================================================================
// naturalNum = +prompt('Enter any natural number');
// console.log(`You entered a number: ${naturalNum}`);
// let count = 0;
// for (let i = 2; i * 2 <= naturalNum; i++) {
//     if (naturalNum % i == 0) {
//         console.log(`The divisor of this number: ${i}`);
//         if (i % 2 === 0) {
//             count++;
//         }
//     }
// }
// console.log(`Number of even divisors: ${count}`);
//================================================================
// naturalNum = +prompt('Enter any natural number');
// console.log(`You entered a number: ${naturalNum}`);
// sum = 0;
// for (let i = 2; i * 2 <= naturalNum; i++) {
//     if (naturalNum % i == 0) {
//         console.log(`The divisor of this number: ${i}`);

//         if (i % 2 === 0) {
//             sum += i;
//         }
//     }
// }
// console.log(`Sum of even divisors: ${sum}`);
//================================================================
// for (let multone = 1; multone <= 10; multone++) {
//     console.log(`1 * ${multone} = ${multone}`);
// }
// for (let multtwo = 1; multtwo <= 10; multtwo++) {
//     console.log(`2 * ${multtwo} = ${multtwo * 2}`);
// }
// for (let multThree = 1; multThree <= 10; multThree++) {
//     console.log(`3 * ${multThree} = ${multThree * 3}`)
// }
// for (let multFour = 1; multFour <= 10; multFour++) {
//     console.log(`4 * ${multFour} = ${multFour * 4}`)
// }
// for (let multFive = 1; multFive <= 10; multFive++) {
//     console.log(`5 * ${multFive} = ${multFive * 5}`)
// }
// for (let multSix = 1; multSix <= 10; multSix++) {
//     console.log(`6 * ${multSix} = ${multSix * 6}`)
// }
// for (let multSeven = 1; multSeven <= 10; multSeven++) {
//     console.log(`7 * ${multSeven} = ${multSeven * 7}`)
// }
// for (let multEight = 1; multEight <= 10; multEight++) {
//     console.log(`8 * ${multEight} = ${multEight * 8}`)
// }
// for (let multNine = 1; multNine <= 10; multNine++) {
//     console.log(`9 * ${multNine} = ${multNine * 9}`)
// }
// for (let multTen = 1; multTen <= 10; multTen++) {
//     console.log(`10 * ${multTen} = ${multTen * 10}`)
// }