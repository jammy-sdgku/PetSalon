
//function start
function petCount(){

//declare variables
let pet1 = {
    Name: "Lina",
    Age: "4",
    gender: "M",
    service:"bath and cut",
    breed: "Chihuahua"
}

let pet2 = {
    Name: "Shadow",
    Age: "8",
    gender: "F",
    service:"bath",
    breed: "Labrador"
}

let pet3 = {
    Name: "Sampson",
    Age: "4",
    gender: "M",
    service:"bath and cut",
    breed: "Schnauzer"
}

//declare array
let pets = [pet1, pet2, pet3]; 

//for each statement to go through array and pick the first value of each
        pets.forEach(currentObject => {
            const firstValue = currentObject[Object.keys(currentObject)[0]];
            document.getElementById("names").innerHTML += `<li>${firstValue}</li>`;
            console.log(firstValue);
        });

//send the results to the html and log on the console
document.getElementById("counts").innerHTML = `We have ${pets.length} pets registered at this time!`;
console.log(`We have ${pets.length} pets registered at this time!`);

}

//call the function
petCount();






    
