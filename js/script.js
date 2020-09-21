const form  = document.getElementById('addForm');
//Writing my own Validation Function
function emailValidate(event){
    event.preventDefault();

    const email= form.elements["email"].value;
    const toChange = document.getElementById('mail-error');
    if(!email){
        window.alert("Email value missing or mismatch")
    }
    //Else is to add to local storage array

    if(!email){
        if(toChange.querySelector("#email-para") == null){
            const para = document.createElement("p"); //creating a paragraph element
            para.id = "email-para"; //assign paragraph an id
            const text = document.createTextNode("Email Empty or Mismatch");
            para.appendChild(text);
            toChange.appendChild(para);

            //add CSS styling
            document.getElementById("mail-error").classList.add("error");
            document.getElementById("mail").classList.add("error-element");
            
        }
    }
    else if (toChange.querySelector("#email-para") != null){
        const para = document.getElementById("email-para").remove();
        document.getElementById("mail-error").classList.remove("error");
        document.getElementById("mail").classList.add("error-element");
    }
}

//attach event listener to form
form.addEventListener('submit', emailValidate);