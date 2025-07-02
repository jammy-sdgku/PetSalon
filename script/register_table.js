
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
