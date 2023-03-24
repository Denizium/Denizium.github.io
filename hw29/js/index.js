for (let number = 10; number <= 20; number++) {
    console.log(number + ",");
}
//============================================================
for (let mult = 10; mult <= 20; mult++) {
    console.log(mult * mult);
}
//=============================================================
for (let multSev = 0; multSev <= 10; multSev++) {
    console.log(`7 * ${multSev} = ${multSev * 7}`);
}
//=============================================================
let sum = 0;
for (let i = 0; i <= 15; i++) {
    sum += i;
}
console.log(sum);
//==============================================================
let mult = 1;
for (let i = 15; i <= 35; i++) {
    mult *= i;
}
console.log(mult);
//==============================================================
sum = 0;
for (let i = 1; i <= 500; i++) {
    sum += i;
}
console.log(sum / 500);
//===============================================================
sum = 0;
for (let i = 30; i <= 80; i += 2) {
    sum += i;
}
console.log(sum);
//===============================================================
for (let number = 103; number <= 199; number += 3) {
    console.log(number);
}
//================================================================
let naturalNum = +prompt('Enter any natural number');
console.log(`You entered a number: ${naturalNum}`);
for (let i = 1; i <= naturalNum; i++) {
    console.log(`The divisor of this number: ${i}`);
}
//================================================================
naturalNum = +prompt('Enter any natural number');
console.log(`You entered a number: ${naturalNum}`);
let count = 0;
for (let i = 2; i * 2 <= naturalNum; i++) {
    if (naturalNum % i === 0) {
        console.log(`The divisor of this number: ${i}`);
        if (i % 2 === 0) {
            count++;
        }
    }
}
console.log(`Number of even divisors: ${count}`);
//================================================================
naturalNum = +prompt('Enter any natural number');
console.log(`You entered a number: ${naturalNum}`);
sum = 0;
for (let i = 2; i * 2 <= naturalNum; i++) {
    if (naturalNum % i === 0) {
        console.log(`The divisor of this number: ${i}`);

        if (i % 2 === 0) {
            sum += i;
        }
    }
}
console.log(`Sum of even divisors: ${sum}`);
//================================================================
for (let multone = 1; multone <= 10; multone++) {
    console.log(`1 * ${multone} = ${multone}`);
}
for (let multtwo = 1; multtwo <= 10; multtwo++) {
    console.log(`2 * ${multtwo} = ${multtwo * 2}`);
}
for (let multThree = 1; multThree <= 10; multThree++) {
    console.log(`3 * ${multThree} = ${multThree * 3}`)
}
for (let multFour = 1; multFour <= 10; multFour++) {
    console.log(`4 * ${multFour} = ${multFour * 4}`)
}
for (let multFive = 1; multFive <= 10; multFive++) {
    console.log(`5 * ${multFive} = ${multFive * 5}`)
}
for (let multSix = 1; multSix <= 10; multSix++) {
    console.log(`6 * ${multSix} = ${multSix * 6}`)
}
for (let multSeven = 1; multSeven <= 10; multSeven++) {
    console.log(`7 * ${multSeven} = ${multSeven * 7}`)
}
for (let multEight = 1; multEight <= 10; multEight++) {
    console.log(`8 * ${multEight} = ${multEight * 8}`)
}
for (let multNine = 1; multNine <= 10; multNine++) {
    console.log(`9 * ${multNine} = ${multNine * 9}`)
}
for (let multTen = 1; multTen <= 10; multTen++) {
    console.log(`10 * ${multTen} = ${multTen * 10}`)
}