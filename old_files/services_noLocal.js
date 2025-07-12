

//validate info
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

//table data----------------------------------------------

//get the form

const form = $("#servRegForm");

//get the button
const submitButton = $("#regServButton");

//get card container
const tableBody = document.querySelector('#regTable tbody');

//function to be triggered after clicking submit
function createService() {
    
    //get submitted info
    const name = $("#serviceName").val().trim();
    const description = $("#serviceDescription").val().trim();
    const price = $("#servicePrice").val().trim();
    
    //add the values or console
    console.log("Name of Service: ", name);
    console.log("Description: ", description);
    console.log("Price: $", price);
    
    //send to html as table
    
    const newRow= document.createElement("tr");
    newRow.innerHTML = `
        <td>${name}</td>    
        <td>${description}</td>
        <td>$${price}</td>
        <td><button onclick="deleteData(this)">Delete</button></td>
    `;
     tableBody.appendChild(newRow);
    alert("Thank you");
    //for ux please clear form
    $("#servRegForm")[0].reset();
   //removeValidationErrors(servRegForm);
};


//delete row of data button
function deleteData(button) {

    // Get the parent row of the clicked button
    let row = button.parentNode.parentNode;

    // Remove the row from the table
    row.parentNode.removeChild(row);
}


//attempting to clear the error messages from form
function removeValidationErrors(servRegForm) {
    var myform = $('#servRegForm');
    myform.get(0).reset();
    var myValidator = myform.validate();
    $(myform).removeData('validator');
    $(myform).removeData('unobtrusiveValidation');
    $.validator.unobtrusive.parse(myform);
    myValidator.resetForm();
    $('#' + frmId + ' input, select').removeClass('input.error');
}

        