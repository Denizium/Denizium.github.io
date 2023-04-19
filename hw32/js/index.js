// Реалізуйте функцію generateKey(length, characters), 
// яка повертає рядок випадкових символів із набору characters довжиною length. span>
// Наприклад:
// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i


function generateKey(length, characters) {
    characters = characters || 'abcdefghijklmnopqrstuvwxyz0123456789';
    let generateKey = '';
    for (let i = 0; i < length; i++) {
        let randomPoz = Math.floor(Math.random() * characters.length);
        generateKey += characters.substring(randomPoz,randomPoz+1);
    }
    return generateKey;
}
const key = generateKey(16)
console.log(key)
