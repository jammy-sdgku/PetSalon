//alert("Hello from JavaScript!");

//Tracking clicks
/*function trackingClicks(){
    console.log("Click");
} */

/*function changeText(){
    document.getElementById("textField").textContent = "Yes I am here!"
}*/

function happyMood(){
    document.getElementById("mood").textContent = "I'm feeling happy!"
}

function sadMood(){
    document.getElementById("mood").textContent = "I'm feeling sad!"
}

function excitedMood(){
    document.getElementById("mood").textContent = "I'm feeling excited!"
}

function moodChanger(mood){
    let moodText = document.getElementById("mood2"); //Where to change the text on the page
    let message =""; //Message empty at start

    if (mood == "happy"){
        message = "I am feeling happy";
    }else if (mood == "sad"){
        message = "I am feeling sad";
    }else if (mood == "excited"){
        message = "I am feeling excited";
    }
    moodText.textContent = message; //Change text on page
}

//Creating arrays
//let arrayName = ["value1", "value2", "value3"];

let fruits = ["banana", "apple", "orange", "avocada"]; //always starts with 0 position

//console.log(fruits[0]);
//console.log(fruits[1]);
//console.log(fruits[2]);
//console.log(fruits[3]);

//for loops to print all the fruits in the  array

/*
for (let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}
*/

//add items to end of array

fruits.push("watermelon");

//add item to front of array

fruits.unshift("grapes");

//Removing last item
fruits.pop();



for (let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

//Remove items from the front of array
fruits.shift();

//Remove by position (position/index, how many items to remove)
fruits.splice(3,1);

//object is collection of attributes that describe an entity
//key and value
//person
//name - james
//age - 30

let person = {
    name: "David", 
    age: "32", 
    lastName: "Emery", 
    isStudent: true
}

//how to access: with dot or the key

console.log(person.name);
console.log(person['age']);

//create 3 objects about students

let student1 = {
    firstName: "James",
    lastName: "Jones",
    Age: "20",
}

let student2 = {
    firstName: "Bob",
    lastName: "Watts",
    Age: "22",
}

let student3 = {
    firstName: "Sally",
    lastName: "Hyman",
    Age: "23",
}

console.log(student1);
console.log(student2.firstName);
console.log(student3.firstName);

let students = [student1, student2, student3]; //make objects into an array****