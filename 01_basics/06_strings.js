const name = "Parth"
const repoCount = 2

// console.log(name + repoCount); //old method

console.log(`hello my name is ${name} and my repo count is ${repoCount}`); // new method

const gameName = new String('hitesh-hc')

console.log(gameName[0]);
console.log(gameName._proto_);
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4) 
console.log(newString);

const anotherString = gameName.slice(-8,4) 
console.log(anotherString);

const newStringOne = "     Parth    "
console.log(newStringOne)
console.log(newStringOne.trim())// trim extra space

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
