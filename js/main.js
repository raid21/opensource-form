// defining a function to close the form after a specific time

var countDownDate = new Date("Feb 27, 2020 23:59:59").getTime();
var countdownfunction = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (distance < 0) {
        clearInterval(countdownfunction);
        window.location.replace("pages/closed.html");
    }
}, 0000);

// Defining functions to display error and success message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function errBorderColor(eleId) {
    eleId.style.borderColor = "red";
}
function sucColor(eleId){
    eleId.style.borderColor = "green";
}

// Defining a function to validate form 
function validateform() {
    // Retrieving the values of form elements
    let name = document.forms["myform"]["namee"].value;
    let email = document.forms["myform"]["email"].value;
    let selec = document.forms["myform"]["select"].value;
    let valName = document.getElementById("inputNameil4");
    let valEmail = document.getElementById("inputEmail4");
    let valSelec = document.getElementById("inputWorkshop");

    // Defining error variables with a default value
    let nameErr = emailErr = selectErr =true;
    // Validate name
    if (name == "") {
        errBorderColor(valName);
        printError("nameErr", "Please enter your name");
    } else {
        let regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            errBorderColor(valName);
            printError("nameErr", "Name mustn't contain any numbers or special characters");
        } else {
            sucColor(valName);
            printError("nameErr", "");
            nameErr = false;
        }
    }
    // Validate email address
    if (email == "") {
        errBorderColor(valEmail);
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        let regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            errBorderColor(valEmail);
            printError("emailErr", "Please enter a correct email address");
        } else {
            sucColor(valEmail);
            printError("emailErr", "");
            emailErr = false;
        }
    }
    // Validate workshop choise
    if (selec == "Choose one...") {
        errBorderColor(valSelec);
        printError("selectErr", "Please choose a workshop to attend");
    } 
    else
    {
        sucColor(valSelec);
        printError("selectErr", "");
        selectErr = false;
    }
    // Prevent the form from being submitted if there are any errors
    if ((nameErr || emailErr || selectErr) == true) {
        return false;
    }
    else {
        return true;
    }
}