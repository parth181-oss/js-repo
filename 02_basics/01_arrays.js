const myArr = [0,1,3,6,8]
const myArr2= new Array (3,43,23,42,423)
console.log(myArr[4]);

//Array methods

myArr.push(6)
myArr.pop() //last value remove hojaega

myArr.unshift(0) //start me add hoga 0
myArr.shift() // 1st wala hat jaega

console.log(myArr);

console.log(myArr.includes(8)); // bool data type , ask question

console.log(myArr.indexOf(8)); // integer data type, if element not available return -1.

const newArr = myArr.join() // binds array and convert it into string.

console.log(newArr);
console.log(typeof(newArr));


// Slice , Splice

console.log("p " , myArr);
const myn1 = myArr.slice(1,3); // 1 aurr 2 hi return krega 3rd index nhi krega 
// slice original array ko manipulate nhi krta hai

console.log(myn1);
console.log(" q" , myArr);

const myn2 = myArr.splice(1,3); // 3rd index ko bhi return krega 
// splice original array ko manipulate krta hai
console.log("r " , myArr);
console.log(myn2);
