//get form object form the DOM
const form  = document.getElementById('addForm');


//Writing my own Validation Function

//function to validate emails
function emailValidate(event){
    event.preventDefault(); //prevent default event when triggered

    const email= form.elements["email"].value; //get value of email element from form

    at_position = email.indexOf("@");
    dot_position = email.lastIndexOf(".");

    const toChange = document.getElementById('form-error');
    if(!email){
        window.alert("Email value missing or mismatch")
    }
    else if( dot_position - at_position < 2 || at_position === -1){
        window.alert("Please enter a correct email");
    }
    else{
        //Email Valid add to local storage
        localStorage.setItem("email", email);
    }

    if(!email){
        if(toChange.querySelector("#email-para") == null){
            const para = document.createElement("p"); //creating a paragraph element
            para.id = "email-para"; //assign paragraph an id
            const text = document.createTextNode("Email Empty or Mismatch");
            para.appendChild(text);
            toChange.appendChild(para);

            //add CSS styling
            document.getElementById("email-para").classList.add("error");
            document.getElementById("mail").classList.add("error-element");
        }
    }
    else if (toChange.querySelector("#email-para") != null){

        const para = document.getElementById("email-para").remove();
        document.getElementById("mail").classList.remove("error-element");
        document.getElementById("email-para").classList.remove("error");
    }
}


//function to validate first name
function firstValidate(event){
    event.preventDefault();

    const first = form.elements["f_name"].value;
    const toChange = document.getElementById('form-error');

    if(!first){
        //window.alert("hey name fields empty, please fill your first name");
    }
    

    //else add local storage
    else{
        localStorage.setItem("f_name", first);
    }
    
    if(!first){
        if(toChange.querySelector("#first-para") == null){

            const para = document.createElement("p"); //creating a paragraph element
            para.id = "first-para"; //assign paragraph an id
            const text = document.createTextNode("First Name is Empty");
            para.appendChild(text);
            toChange.appendChild(para);

            //add CSS styling
            document.getElementById("first-para").classList.add("error");
            document.getElementById("first").classList.add("error-element");
            
        }
    }
    else if(toChange.querySelector("#first-para") != null){
        const para = document.getElementById("first-para").remove();
        document.getElementById("first").classList.remove("error-element");
        document.getElementById("first-para").classList.remove("error");
       
    }

}

function middleValidate(event){
    event.preventDefault();
    const middle = form.elements["m_name"].value;
    const toChange = document.getElementById('form-error');

    if(!middle){
        //window.alert("hey name fields empty, please fill your middle name");
    }
    //Local Storage
    else{
        localStorage.setItem("m_name", middle);
    }

    if(!middle){
        if(toChange.querySelector("#mid-para") == null){
            const para = document.createElement("p"); //creating a paragraph element
            para.id = "mid-para"; //assign paragraph an id
            const text = document.createTextNode("Middle Name is Empty");
            para.appendChild(text);
            toChange.appendChild(para);

            //add CSS styling
            document.getElementById("mid-para").classList.add("error");
            document.getElementById("middle").classList.add("error-element");
            
        }
    }
    else if (toChange.querySelector("#mid-para") != null){
        const para = document.getElementById("mid-para").remove();
        document.getElementById("middle").classList.remove("error-element");
        document.getElementById("mid-para").classList.remove("error");
        
    }
}

function lastValidate(event){
    event.preventDefault();
    const last = form.elements["l_name"].value;
    const toChange = document.getElementById('form-error');

    if(!last){
        //window.alert("hey name fields empty, please fill your last name");
    }
    //Local Storage
    else{
        localStorage.setItem("l_name", last);
    }

    if(!last){
        if(toChange.querySelector("#last-para") == null){
            const para = document.createElement("p"); //creating a paragraph element
            para.id = "last-para"; //assign paragraph an id
            const text = document.createTextNode("Last Name is Empty");
            para.appendChild(text);
            toChange.appendChild(para);

            //add CSS styling
            document.getElementById("last-para").classList.add("error");
            document.getElementById("last").classList.add("error-element");
            
        }
    }
    else if (toChange.querySelector("#last-para") != null){
        const para = document.getElementById("last-para").remove();
        document.getElementById("last").classList.remove("error-element");
        document.getElementById("last-para").classList.remove("error");
    }
}

function genderValidate(event){
    event.preventDefault();
    const genderOption = form.elements["gender"].value;
    const toChange = document.getElementById('form-error');

    if(!genderOption){
        window.alert("Choose a valid gender");
    }

    //local storage
    else{
        localStorage.setItem("gender", genderOption);
    }

    if(!genderOption){
        if(toChange.querySelector("#gender-para") == null){
            const para = document.createElement("p"); //creating a paragraph element
            para.id = "gender-para"; //assign paragraph an id
            const text = document.createTextNode("Gender Option not Valid");
            para.appendChild(text);
            toChange.appendChild(para);

            //add CSS styling
            document.getElementById("gender-para").classList.add("error");
            document.getElementById("gender").classList.add("error-element");
            
        }
    }
    else if (toChange.querySelector("#gender-para") != null){
        const para = document.getElementById("gender-para").remove();
        document.getElementById("gender").classList.remove("error-element");
        document.getElementById("gender-para").classList.remove("error");
    }
  
}

function phoneValidate(event){
    event.preventDefault();
    const phone = form.elements["mobile"].value;
    const toChange = document.getElementById('form-error');

    if(!phone){
        //window.alert("Contact field Empty");
    }

    //local storage
    else{
        localStorage.setItem("mobile", phone);
    }

    if(!phone){
        if(toChange.querySelector("#phone-para") == null){
            const para = document.createElement("p"); //creating a paragraph element
            para.id = "phone-para"; //assign paragraph an id
            const text = document.createTextNode("Contact Field Empty");
            para.appendChild(text);
            toChange.appendChild(para);

            //add CSS styling
            document.getElementById("phone-para").classList.add("error");
            document.getElementById("phone").classList.add("error-element");
            
        }
    }
    else if (toChange.querySelector("#phone-para") != null){
        const para = document.getElementById("phone-para").remove();
        document.getElementById("phone").classList.remove("error-element");
        document.getElementById("phone-para").classList.remove("error");
    }

}

function addressValidate(event){
    event.preventDefault();
    const address = form.elements["address"].value;
    const toChange = document.getElementById('form-error');

    if(!address){
        //window.alert("Address field is Empty");
    }

    //local storage
    else{
        localStorage.setItem("address", address);
    }

    if(!address){
        if(toChange.querySelector("#address-para") == null){
            const para = document.createElement("p"); //creating a paragraph element
            para.id = "address-para"; //assign paragraph an id
            const text = document.createTextNode("Address field is Empty");
            para.appendChild(text);
            toChange.appendChild(para);

            //add CSS styling
            document.getElementById("address-para").classList.add("error");
            document.getElementById("address").classList.add("error-element");
            
        }
    }
    else if (toChange.querySelector("#address-para") != null){
        const para = document.getElementById("address-para").remove();
        document.getElementById("address").classList.remove("error-element");
        document.getElementById("address-para").classList.remove("error");
    }

}

function onSubmit(e){
    //Validate forms
    
    
    form.addEventListener('submit', firstValidate);
    form.addEventListener('submit', middleValidate);
    form.addEventListener('submit', lastValidate);
    form.addEventListener('submit', genderValidate);
    form.addEventListener('submit', phoneValidate);
    form.addEventListener('submit', addressValidate);
    form.addEventListener('submit', emailValidate);
    

    if(localStorage.length === 7){
        let submission = confirm("Do you want to submit?")
        window.alert(submission)
        
        form.addEventListener("submit", e=>{
            location.href="cv.html"
            form.reset();
        })
       
    }
    console.log(localStorage.length);
    
    
}