//salon information
const salon={
    name: "Pretty Pet Salon",
    phone: "123-456-7891",
    address: {
        street:"123how street",
        city: "Los Angelos",
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


//get the form
const form = document.getElementById("regForm");

//get the button
const submitButton = document.getElementById["submitButton"];

//get card container
const tableBody = document.querySelector('#regTable tbody');

//function to be triggered after clicking submit
function createService(event) {
    event.preventDefault();

    //get submitted info
    const petname = document.getElementById('inputPetname').value;
    const age = document.getElementById('inputAge').value;
    const gender = document.getElementById('inputGender').value;
    const breed = document.getElementById('inputBreed').value;
    const koservice = document.getElementById('inputService').value;

    //add the values or console
    console.log("Pet Name: ", petname);
    console.log("Age: ", age);
    console.log("Gender: ", gender);
    console.log("Breed: ", breed);
    console.log("Service: ", koservice);

    //send to html as table
    
    const newRow= document.createElement("tr");
    newRow.innerHTML = `
        <td>${petname}</td>
        <td>${age} years old</td>
        <td>${gender}</td>
        <td>${breed}</td>
        <td>${koservice}</td>
        <td><button onclick="deleteData(this)">Delete</button></td>
    `;
     tableBody.appendChild(newRow);

    //for ux please clear form
    form.reset();
};
   
function deleteData(button) {

    // Get the parent row of the clicked button
    let row = button.parentNode.parentNode;

    // Remove the row from the table
    row.parentNode.removeChild(row);
}
