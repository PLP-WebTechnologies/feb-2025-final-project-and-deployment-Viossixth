

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


/////***For the submission button*/

function myFunction() {
  alert("Your reservation has been submitted, a confirmation shall follow shortly")
}


/*Script for password charater length*/
var length = document.getElementById("length");
// Validate length
if(myInput.value.length >= 8) {
  length.classList.remove("invalid");
  length.classList.add("valid");
} else {
  length.classList.remove("valid");
  length.classList.add("invalid");
}

/*Local storage function for saving a name and displaying the name as a welcome message*/

function saveName() {
    const name = document.getElementById("name").value;
    localStorage.setItem("customerName",name);
    showWelcome();
}

function showWelcome() {
    const savedName = localStorage.getItem("customerName");
    if (savedname){
        document.getElementById("WelcomeText").innerText = 'Welcome  Back to Nostra, $ {savedName}!';
    }
}

window.onload = showWelcome ;



