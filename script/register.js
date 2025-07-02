
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






