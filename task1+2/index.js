function validateForm(id){
    var returnValue = true;
    clearError();

    //name box errors
    var name = document.forms['submit-form']['fullname'].value;
    var specialChars= /[^a-zA-Z ]/g ;

    if(name.match(specialChars)){
        setError("name","*Please enter a valid name without special characters")
        returnValue = false;
    }

    else if(name.length<3){
        setError("name","*Please enter a longer valid full name")
        returnValue = false;
    }

    else if(name.length>20){
        setError("name","*Please enter a shorter valid full name")
        returnValue = false;
    }

    //email box errors
    var emailChars = /[@.]/g ; 
    var email = document.forms['submit-form']['emailid'].value;
    
    if(email.length>20 ){
        setError("email","*Please enter a valid shorter email id")
        returnValue = false;
    }
    if(email.length<5){
        setError("email","*Please enter a valid longer email id")
        returnValue = false;
    }
    if(!email.match(emailChars)){
        setError("email","*Please enter a valid email id")
        returnValue = false;
    }


    //phone box errors
    var phoneno = document.forms['submit-form']['phone-number'].value;
    if(phoneno.length!=10){
        setError("phonenumber","*Please enter a valid phone number")
        returnValue = false;
    }
    if(phoneno.match(/[^0-9]/)){
        setError("phonenumber","*Please enter a valid number")
        returnValue = false;
    }
    

    return returnValue;
}

function setError(id,error){

    var element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML= error;
}

function clearError(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
}

