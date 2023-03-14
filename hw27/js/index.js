let userAge = prompt("What is your year of birth?");
let userCity = prompt("What city do you live in?");
let userSport = prompt("What is your favourite sport?");
let age = 2023 - Number(userAge);
if (age === 2023) { age = 'It is a pity that you did not want to enter your year of birth' }
if (userCity === "Kyiv" || userCity === "kyiv") { userCity = 'You live in the capital Ukraine' }
else if (userCity === "Washington" || userCity === "washington") { userCity = 'You live in the capital USA' }
else if (userCity === "London" || userCity === "london") { userCity = 'You live in the capital England' }
else if (userCity === null) { userCity = 'It is a pity that you did not want to enter your city' }
else { userCity = `You live in ${userCity}` };
if (userSport === "Box" || userSport === "box") { userSport = 'Cool, you want to become Vitali Klitschko' }
else if (userSport === "Chess" || userSport === "chess") { userSport = 'Cool you want to become Magnus Carlsen' }
else if (userSport === "Table tennis" || userSport === "table tennis") { userSport = 'Cool, you want to become Fang Jaedong' }
else if (userSport === null) { userSport = 'It is a pity that you did not want to enter your favourite sport' }
else { userSport = `You favourite sport ${userSport}` };
alert(`${age};\n ${userCity};\n ${userSport}.`);