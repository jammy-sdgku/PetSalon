

//validate info
    $(document).ready(function(){
//catching click event
        $("#regServButton").click(function(){
//select your form and validate
        $("#servRegForm").validate({
                errorClass:"input.error",
                errorElement:"span",
                validClass:"success",
                rules:{
                    serviceName:{
                        required:true, 
                        minlength: 2
                    },
                    serviceDescription:{
                        required:true,
                        minlength: 2
                    },
                    servicePrice: "required",
                },
                messages: {
                    serviceName: "Please select the service requested",
                    serviceDescription: "Please enter a description",
                    servicePrice: "Please enter a price",   
                },
                highlight: function (input) {
                        $(input).addClass('error');
                    },
                unhighlight: function (input) {
                $(input).removeClass('error');
                $(input).addClass('success');
                $(".cancel").click(function() {
                    validator.resetForm();
                });
                },
            });
       
        createService();     
       
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

    //for ux please clear form
    $("#servRegForm")[0].reset();
    /*$.fn.clearValidation = function(){var v = $(this).validate();$("#servRegForm",this).each(function(){v.successList.push(this);v.showErrors();});v.resetForm();v.reset();};
   */
};
   
function deleteData(button) {

    // Get the parent row of the clicked button
    let row = button.parentNode.parentNode;

    // Remove the row from the table
    row.parentNode.removeChild(row);
}

        