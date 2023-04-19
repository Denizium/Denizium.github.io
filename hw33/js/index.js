// Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку.

let arrLength = prompt("Введіть довжину масива");
let arrUser = prompt("Введіть єлементі масиву через кому");
const arr = arrUser.split(',', arrLength);
console.log(arr) //створення масиву
const sortArr = [...arr]
sortArr.sort((a, b) => {
    return a - b;
});
console.log(sortArr) //сортування за зростанням
const removedArr = [...sortArr]
let removed = removedArr.splice(1, 3);
console.log(removedArr) //видалення елементів з масиву з 2 по 4 (включно!)