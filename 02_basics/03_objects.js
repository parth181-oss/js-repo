// Singleton

// Objects literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Parth",
    "full name": "Parth Sarthi",
    age: 19,
    [mySym]: "mykey1", //mysym direct likhenge toh usko string ke tarah manega
    location: "Dhanbad",
    email: "parthsarthi@gmail.com",
    isLoggedIn : false
}
// to access

console.log(JsUser.location);
console.log(JsUser["location"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
 // full name wale cases me sqaure bracket method use me aata hai aur symbol me bhi

JsUser.email = "parthsarthi@chatgpt.com"
 //Object.freeze(JsUser) //=> koi bhi change nhi hoga iske baad
JsUser.email = "parthsarthi@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

