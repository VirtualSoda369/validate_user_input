

const validateData = (data, validationMode)=>
{
    // we receive the data
    // and do the validation
    // depending on the selected mode

    let valid_data = "";

    if(data !== "")
    {
        // perform the validation with regex
        // and the replace() method
        switch (validationMode)
        {
            // remove all symbols and numbers
            // only letters allowed
            case "String":
                valid_data = data.replace(/[<> / \W _ \d]/gi," ").toLowerCase().trim();
            break;
    
            // remove all symbols and letters
            // only numbers allowed in the string
            case "Number":
                valid_data = data.replace(/(\D)/gi," ").trim();
            break;
    
            // remove all dangerous symbols in the string
            // ( ) , ; " ' [ ] { } < / >  $ 
            // only _ is allowed 
            case "Password":
                valid_data = data.replace(/[\W]/gi," ").trim();
            break;
        }
    
        return valid_data;
    }
    else
    {
        alert("there are empty fields!")
        return;
    }

}







//get the form reference
let form_ref = document.getElementById("test_form");

//add the event listener
form_ref.addEventListener("submit",(e)=>
{
    e.preventDefault();
    //get the values from the input
    let name_data = document.getElementById("input_name").value;
    let age_data = document.getElementById("input_age").value;
    let pass_data = document.getElementById("input_pass").value;

    //Here we will call the validation method
    let valid_name = validateData(name_data, "String");
    let valid_age = validateData(age_data, "Number");
    let valid_pass = validateData(pass_data, "Password");

    
    //get the div ref
    let div_ref = document.getElementById("div_api_data");

    //create labels 
    let label_name = document.createElement("label");
    label_name.innerHTML = `Name : ${valid_name}`;

    let label_age = document.createElement("label");
    label_age.innerText = `Age : ${valid_age}` ;

    let label_pass = document.createElement("label");
    label_pass.innerText = `Pass : ${valid_pass}`;

    //append and display labels
    div_ref.appendChild(label_name);
    div_ref.appendChild(label_age);
    div_ref.appendChild(label_pass);


    //alternative: 
    //send the user data to the server with fecth or axios
    // using FormData 

});