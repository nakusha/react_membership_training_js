// arrow function
/*
const functionName = (variable = "default value") => {

}

const button = document.querySelector("button");

button.addEventListener("click", event => {
    console.log(event);
});

*/


// Template Literals

const sayHello = (name = "Human") => `Hello ${name}`;


// 3. Object Destructuring

const human ={
    name:"yeonsu",
    lastName:"jeong",
    national:"korea",
    favFood:{
        breakfast: "",
        lunch:"",
        dinner:""
    }
}

const { 
    name, 
    lastName, 
    national: nickname, 
    favFood: {breakfast, lunch, dinner} 
} = human;

console.log(name, lastName);

//Spread Operator
const days = ["mon", "tues", "wed"];
const otherDays = ["Thu", "Fri", "Sat"];

// 문자열
// let allDays = days + otherDays;   
// 2중배열
//let allDays = [days, otherDays]

//새로운 배열만들기
let allDays = [...days, ...otherDays, "sun"];


// Classes
class Human{
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }
}

class Baby extends Human{
    cry(){
        console.log(this.name + "Waaaaaaaaaa");
    }
}

const me = new Human("yeonsu", "jeong");
const myBaby = new Baby("yeonsu", "jeong");


// Array.map
const newDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// 하나씩나옴 배열없이
const smilingDays = days.map((ele, index) => `${index + 1} happy ${ele}`);

// Array.filter
const numbers = [2, 4, 5, 6, 7, 8, 13, 23, 4325, 132, 423, 23, 1, 3, 434, 24, 11];

const biggerThanFifteen = numbers.filter(number => number > 15);

// forEach includes push
newDays.forEach(day => day + "Day");

// 새로운 변수 추가(맨뒤에)
newDays.push("End");

if (!newDays.includes("Sun")){
    newDays.push("Sun");
}