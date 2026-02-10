// my first comment

// declaring variables (let, const, var)
let age = 18;
//let age;
//age = 18;
age = age + 1;

const name = "Sanzhar";


if (age === 19){
    // We cant use let outside of block "if" but so can var. This is called hoisting
    variable = "Ali";
}

console.log(name);
console.log(age);
console.log(variable);

// Data types:
let num;

num = 0.1 + 0.2;

console.log(num.toFixed(1));
console.log(+num.toFixed(1));

let num1 = "100px";
let num2 = parseInt(num1);
console.log(num1);
console.log(num2);

//objects

let obj = new Object({
    name: "Sanzhar",
    age: 18,
});

let obj2 = {
    name: "ali",
    age: 20
}

console.log(obj2.name ,obj2.age);

obj.height = 180;
obj2["height"] = 193;
/*
* obj = {
*   name: "Ali",
*   age: 20,
*   height: 193
* }
* */


console.log(obj["height"] ,obj2.height);

let uni = prompt("in which uni do you study ?", "kbtu");
/*
* uni = "kbtu";
* obj = {
*   name: "sanzhar",
*   age: 18,
* }
* */
obj["university"] = uni;
alert(obj["university"]);

let uni2 = prompt("in which uni do you study ?");
let review = "good university";
let obj3 = {
    name: "AI",
    age: 20,
    [uni2]: review
}

alert(obj3[uni2]);

// Arrays:

let arr = [1,2,3,4,5,6];

arr.forEach((el, index, array) => {
    arr[index] = el;
})

let fruits1 = ["apple", "banana", "kiwi"];
let str1 = "apple, banana, kiwi";

let str2 = fruits.join(" ");
let fruits2 = str1.split(", ");

console.log(fruits2);
console.log(str2);

