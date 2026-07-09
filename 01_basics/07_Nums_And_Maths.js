const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));

// toPrecision() => round off krta hai kitna  digit tak chahiye usme


// toLocaleString() => zeroes me comma lga deta hai

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  // en-IN for indian standards

// +++++++++++++++++++  MATHS  ++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));

console.log(Math.min(1,23,4,3,));
console.log(Math.max(1,23,4,3,));
console.log(Math.random());  // yeh 0 se 1 tak ka hi value dega

// IMPORTANT FORMULA

const max = 6;
const min = 1;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);





