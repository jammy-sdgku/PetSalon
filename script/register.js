
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
const cardContainer = document.getElementById("reg-list");

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

    //send to html as cards
    const card = document.createElement("div");
    card.className="col-sm-6";
    card.innerHTML = `<div class="column">
                        <div class="col-sm-6">
                            <div class="card text-dark bg-light mb-3" p-4 style="max-width: 18rem; ">
                                <div class="card-body">
                                    <h3 class="card-title">${petname}</h3>
                                    <h4 class="card-subtitle mb-2 text-muted">${age} years old</h4>
                                    <h5 class="card-subtitle mb-2 text-muted">${gender}</h5>
                                    <h5 class="card-subtitle mb-2 text-muted">${breed}</h5>
                                    <p> ${koservice}</p>
                                </div>
                            </div>
                        </div>
                    </div>`;

    cardContainer.appendChild(card); 

    //for ux please clear form
    form.reset();
};






