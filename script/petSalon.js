//salon information
const salon={
    name: "Pretty Pet Salon",
    phone: "123-456-7891",
    address: {
        street:"123 How Street",
        city: "Baltimore",
        state: "MD",
        zip: "21234"
    },
    hours: {
        open: "9:00am",
        close: "6:00pm",
    },
    owner: "James Jones"
}

function DisplaySalonInfo(){
    let salonContainer = document.getElementById("salonContainer");
    let information = "";

    information += `
    <h2>${salon.name}</h2>
    <p><strong> Owner: ${salon.owner} </p><br>
    <p><strong> Phone: ${salon.phone} </p><br>
    <p><strong> Address: ${salon.address.street}, ${salon.address.city}, ${salon.address.state}, ${salon.address.zip} </p><br>
    <p><strong> Hours: ${salon.hours.open} To ${salon.hours.close}</p><br><br>
    `;
   
    salonContainer.innerHTML  = information;
}

DisplaySalonInfo();

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


    
