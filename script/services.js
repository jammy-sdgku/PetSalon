

$(document).ready(function(){
//catching click event
    $("#registerServiceButton").click(function(){
//select your form and validate
       $("#servicesRegistrationForm").validate({
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
                },
                
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
function createService(event) {
    event.preventDefault();
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
};
   
function deleteData(button) {

    // Get the parent row of the clicked button
    let row = button.parentNode.parentNode;

    // Remove the row from the table
    row.parentNode.removeChild(row);
}


//class Notes-------------------------------------------------------------------------------------------------

/*function Service(name, description, price){
    this.name = name;
    this.description = description;
    this.price = price;
}

$(document).ready(function(){
    $("#serviceRegistrationForm").on("submit"), function (event){
        console.log(event);
        event.preventDefault();
        const name = $("#serviceName").val().trim();
        const description = $("#serviceDescription").val().trim();
        const price = $("#servicePrice").val().trim();
        
        //get card container
        const tableBody = $("#regTable tbody");

        console.log(`Service Name:  ${name}, Service Description: ${description}, Service Price: ${price}`);

        if (!name || !description || isNaN(price) || price<=0 ){    //if name or dexcription or price values are empty
        
    //notify user
        alert ("All the fields are required and the price must be a positive number.")
    //use validation

        }else{
    //register the service
        const newRow= document.createElement("tr");
        newRow.innerHTML = `
            <td>${name}</td>    
            <td>${description}</td>
            <td>$ ${price}</td>
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
            alert("Services registered successfully.")  

            }
        }
};

*/