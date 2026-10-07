/*
 * ============================================================
 * PERSONALIZATION
 * ============================================================
 * Change only the value below to create your own password.
 * The person receiving the website will need to enter this
 * password before they can see the rest of the website.
 */

const PASSWORD = "NEWPASS123"; // Change this to whatever password you want. Make sure to keep it in quotes, and no longer than 10 characters.


/*
============================================================
WARNING: DO NOT EDIT BELOW THIS LINE
If you are unfamiliar with HTML, CSS, and JavaScript, it is recommended that you do not edit anything below this point. If you are familiar with these languages, feel free to explore the code and make changes as you see fit.
============================================================
*/

const button = document.getElementById('enterButton');
const clearButton = document.getElementById('clearButton'); // button to clear input field
const passwordInput = document.querySelector(".passwordInput input"); // input field for password
const passwordImage = document.querySelector(".password img"); // getting the class name that physically holds the password image
const fadeElement = document.querySelector("#fade"); // we can also use "getElementById"
const click = new Audio("Audio/Click.mp3");


/* ~~~ BUTTON ANIMATION ~~~ */

button.addEventListener('mouseover', function() {
    button.style.transition = "transform 0.3s ease-out"; // for smooth transition
    button.style.transform = "translate(-50%, -50%) scale(1.1)"; // 120% of the original size, 20% change

    // since the CSS properties we want to change are scale AND translate (bc we dont want the button position to change when we scale it), they both are contained by 'transform' and hence we can use the transform property to apply both at once
});

button.addEventListener('mouseout', function() {
    button.style.transition = "transform 0.3s ease-out";
    button.style.transform = "translate(-50%, -50%) scale(1)"; // 100% = normal size, 0% change
});


/* ~~~ AFTER CLICKING THE ENTER BUTTON ~~~ */

button.addEventListener('click', function() {
    const userInput = passwordInput.value; // get the value of the input field (must be INSIDE the event listener to get the latest value)

    click.play();

    if(userInput === PASSWORD) { // ===: strict equality, wont convert or cast types unlike ==: loose inequality
        passwordImage.src = "Images/Correct.png";
        passwordInput.style.display = "none"; // so that the user cant re-enter something
        fadeElement.style.zIndex = "3"; // making the black screen the highest element now

        /* ANIMATION */

        passwordImage.style.transition = "transform 0.3s ease-out"; // for smooth transition
        passwordImage.style.transform = "translate(-50%, -50%) scale(1.1)"; // 120% of the original size, 20% change

        setTimeout(function() {
            passwordImage.style.transform = "translate(-50%, -50%) scale(1)"; // 100% = normal size, 0% change
        }, 300); // quickly we reset the button size back to normal

        /* FADE INTO NEXT SCREEN */

        setTimeout(fadeIn, 1500); // calling the function we made to fade the screen after 1 and a half seconds: 1000 milliseconds = 1 second

        setTimeout(function() {
            window.location.href = "Main.html";
        }, 5000); // after 5 seconds, we redirect to main.html
    }

    else {
        passwordImage.src = "Images/Incorrect.png"; // change the image to incorrect

        /* ANIMATION */

        passwordImage.style.transition = "transform 0.3s ease-out"; // for smooth transition
        passwordImage.style.transform = "translate(-50%, -50%) scale(1.1)"; // 120% of the original size, 20% change

        setTimeout(function() {
            passwordImage.style.transform = "translate(-50%, -50%) scale(1)"; // 100% = normal size, 0% change
        }, 300); // after 300 milliseconds, we reset the button size back to normal
    }
});


clearButton.addEventListener('click', function() {
    passwordInput.value = ""; // directly modifying the VALUE PROPERTY hence we cant just use the variable name
}); // .value holds the current text entered by the user


/* ~~~ FUNCTIONS ~~~ */

function fadeIn() {
    fadeElement.style.opacity = "1"; // fade in the black screen element
}
