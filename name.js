function displayGreeting() {
    let username = document.getElementById("username").value;
    document.getElementById("outputDiv").innerHTML = "Hello " + username + "<br>" + "You are now officially a member of the New Power Generation" + "<br> " + "Welcome to the dawn!";
}

function stringLengthCheck(username, minlength,) {
    var minlength;

    if (username.value < 4) {
        alert("Name should be " + minlength + " characters.");
        return false;
    }
    else {
        return true;
    }
}   
