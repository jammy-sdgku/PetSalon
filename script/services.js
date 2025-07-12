
//validate info ------------------------------------------------------
    $(document).ready(function(){
//catching click event
        $("#regServButton").click(function(){
//select your form and validate

        $("#servRegForm").validate({
                errorClass:"input-error",
                errorElement:"span",
                validClass:"input-success",
                rules:{
                    serviceName:{
                        required:true, 
                        minlength: 2
                    },
                    serviceDescription:{
                        required:true,
                        minlength: 2
                    },
                    servicePrice: {
                        required: true,
                        min: 0
                    }
                },
                messages: {
                    serviceName: "Please select the service requested",
                    serviceDescription: "Please enter a description",
                    servicePrice: "Please enter a price",   
                },
             
                submitHandler:function(form){
                   createService();  
                   
                }
            });
         
        });
    });

//table data-----------------------------------------------------------

//get the form

const form = $("#servRegForm");

//get the button
const submitButton = $("#regServButton");

//get card container
const tableBody = document.querySelector('#regTable tbody');

//function to be triggered after clicking submit
function createService() {

//save data ------------------------------------------------------------
 //   $("#regServButton").click(function(event){
 //       event.preventDefault();

        //get user info for the input
        const newService = {
            name : $("#serviceName").val().trim(),
            description : $("#serviceDescription").val().trim(),
            price : $("#servicePrice").val().trim()
        }

        //get the users json created if doesent exist
        let services = JSON.parse(localStorage.getItem("services")) || [];

        //add the new users to users JSON
        services.push(newService);

        //save to local storage
        localStorage.setItem("services", JSON.stringify(services));
        
    alert(`We saved your service as ${newService.name}, with a description of ${newService.description}, and a price of $${newService.price} successfully! Thank you for your order!`);
     
    $("form").get(0).reset();

    loadData(); 
     
//start here with load function---------------------------------------
    function loadData(){

        //get information stored
        const nameStored = (newService.name);
        const descriptionStored = (newService.description);
        const priceStored = (newService.price);
        
        //send to HTML table
        const newRow= document.createElement("tr");
        newRow.innerHTML = `
            <td>${nameStored}</td>    
            <td>${descriptionStored}</td>
            <td>$${priceStored}</td>
            <td><button onclick="deleteData(this)">Delete</button></td>
        `;
        tableBody.appendChild(newRow);
    }};



//delete row of data button
function deleteData(button) {

    // Get the parent row of the clicked button
    let row = button.parentNode.parentNode;

    // Remove the row from the table
    row.parentNode.removeChild(row);
};


        