
//function start
function petInfo(){

//declare variables
let pet1 = {
    Name: "Lina",
    Age: "4",
    gender: "M",
    service:"Full Groom",
    breed: "Chihuahua"
}

let pet2 = {
    Name: "Shadow",
    Age: "8",
    gender: "F",
    service:"Bath and Brush",
    breed: "Labrador"
}

let pet3 = {
    Name: "Sampson",
    Age: "4",
    gender: "M",
    service:"bath and Trim",
    breed: "Schnauzer"
}

//declare array
let pets = [pet1, pet2, pet3]; 

//send the count results to the html and log on the console
document.getElementById("counts").innerHTML = `We have ${pets.length} pets registered at this time!`;
console.log(`We have ${pets.length} pets registered at this time!`);

//for each statement to go through array and pick the first value of each then send it to html
        pets.forEach(currentObject => {
            const firstValue = currentObject[Object.keys(currentObject)[0]];
            document.getElementById("names").innerHTML += `<li>${firstValue}</li>`;
            console.log(firstValue);
        });
}

//call the function
petInfo();


    
