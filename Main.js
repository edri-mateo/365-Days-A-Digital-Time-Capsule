// ============================================================
// CUSTOMIZE YOUR PROJECT HERE
// ============================================================

// The main message shown when the story begins.
// NOTE: The visible main message is part of Images/Main_text.png.
// See the README if you want to change the text inside that image.
const MAIN_MESSAGE = "HAPPY BIRTHDAY!";

// Messages and how long each one stays on screen.
// Time is measured in milliseconds.
// 1000 milliseconds = 1 second.

const TIMER_MESSAGES = [
    ["Hi! Here's the first message!", 3000],

    ["This one is a little longer than the last message, so I need to make it last 6 seconds instead of 3 seconds.", 6000],

    ["Here's a short one.", 2000],

    ["Shortest one.", 1000],

    ["If I want \"quotations\" then I need to use a slash \\", 4000],

    ["- Love, Your Name", 15000]
];

// ============================================================
// DO NOT EDIT BELOW THIS LINE
// ============================================================

const INITIAL_DELAY = 8000; // Initial delay before the first message appears
const MESSAGE_GAP = 1500; // Time between messages, in milliseconds


const fadeElement = document.querySelector("#fade"); /* querySelector is used to select an #idName from CSS (and an id from HTML) */
const startText = document.querySelector(".startingText"); // Select the element that will display the text
const button = document.getElementById('startButton'); /* getElementById is used to select an id from HTML (and an #idName from CSS) */
const displayButton = document.querySelector(".displayButton"); // Select the display button
const storyScreen = document.querySelector(".storyScreen"); // Select the story screen
const text = document.getElementById('storyText'); // Select the text element
const click = new Audio("Audio/Click.mp3"); // Create a new Audio object for the click sound effect
const music = new Audio("Audio/Story.mp3"); // Create a new Audio object for the background music

music.loop = true;

fadeOut(); // Fade out the black screen immediately
showText(); // Show the text immediately after fadeOut();
showDisplayButton(); // Show the display button immediately after fadeOut();


/* ~~~ BUTTON ANIMATION ~~~ */

button.addEventListener('mouseover', function() {
    displayButton.style.transition = "transform 0.3s ease-out"; // for smooth transition
    displayButton.style.transform = "translate(-50%, -50%) scale(1.2)"; // 120% of the original size, 20% change

    // since the CSS properties we want to change are scale AND translate (bc we dont want the button position to change when we scale it), they both are contained by 'transform' and hence we can use the transform property to apply both at once
});

button.addEventListener('mouseout', function() {
    displayButton.style.transition = "transform 0.3s ease-out";
    displayButton.style.transform = "translate(-50%, -50%) scale(1)"; // 100% = normal size, 0% change
});


/* ~~~ AFTER CLICKING START ~~~ */

button.addEventListener('click', function() {

    setTimeout(fadeIn, 1000); // fade in to the black screen
    click.play();

    setTimeout(function() {
        storyScreen.style.display = "block"; // make the story screen visible
        fadeOut();
        music.play(); // Play the background music
    }, 5000);


    /* ~~~ STORY TEXT ~~~ */

    // Each item in array: [message, displayTime]

    let initialDelay = INITIAL_DELAY; // Initial delay before the first message appears

    for(let i = 0; i < MESSAGE.length; i++){

        let currMessage = MESSAGE[i]; // "let" means the variable can only be used in this block of code and CAN BE CHANGED
        let msg = currMessage[0];
        let time = currMessage[1];

        /* show text */

        setTimeout(function() {
            text.textContent = msg; // NOTE: be careful not to use "currMessage", this is an ARRAY of items and its sole purpose was to break it down into 2 string: 'msg' & 'time'
            text.style.display = "block"; // make the text visible
        }, initialDelay); // show text after hidden (will always be consistent after the initial milliseconds)

        /* hide text */

        setTimeout(function() {
            text.style.display = "none"; // make the text invisible
        }, initialDelay + time); // hide text after the time specified in the message array

        initialDelay += time + MESSAGE_GAP; // continue to iterate the time to grow longer and longer for each message in relation to the initial message. This ensures the texts have their own run time and dont overlap

        // 1500 milliseconds is the time in between messages and is added onto 'initialDelay + time'
    }
});


/* ~~~ FUNCTIONS ~~~ */

function fadeIn(){
    fadeElement.style.display = "block"; // fade in to the black screen element

    setTimeout(function() {
        fadeElement.style.opacity = "1"; // RESET the fading animation from fadeOut();
    }, 500); // NOTE: the time here doesnt really make sense but the code works
}

function fadeOut(){
    fadeElement.style.opacity = "0"; // fade out the black screen element

    setTimeout(showText, 4000); // call showText after 4 seconds

    setTimeout(function() {
        fadeElement.style.display = "none"; // make the black screen element invisible after fading out (need this so we can press the physically button without being blocked by the opacity: 0 screen)
    }, 2000); // wait for 2 seconds to allow the opacity transition to complete
}

function showText(){
    setTimeout(function() {
        startText.style.top = "50%"; /* move the text to the center of the screen after animation */
    }, 2500);
}

function showButton(){
    setTimeout(function() {
        button.style.display = "block"; // "block" = visible, "none" = invisible
    }, 5000);
}

function showDisplayButton(){
    setTimeout(function() {
        displayButton.style.display = "block";
    }, 4000);

    setTimeout(function() {
        displayButton.style.display = "none";
    }, 5000);

    setTimeout(function() {
        displayButton.style.display = "block";
    }, 5500);

    setTimeout(function() {
        displayButton.style.display = "none";
    }, 6000);

    setTimeout(function() {
        displayButton.style.display = "block";
    }, 6500);

    setTimeout(function() {
        displayButton.style.display = "none";
    }, 7000);

    setTimeout(function() {
        displayButton.style.display = "block";
    }, 7500);

    setTimeout(function() {
        showButton(); // show the physically clickable button
    }, 2500);
}

/*
  LET: changeable variable
  CONST: final variable
  SCALING: scale(#) where '#' is a multiplier to scale --> 1=100% (no change), 0.5=50% (half as big), 1.2=120% (20% bigger)
*/