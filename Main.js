/*
============================================================
PERSONALIZATION
You can edit the values in this section to make the
website your own.
============================================================
*/

// MAIN MESSAGE
const MAIN_MESSAGE = "HAPPY BIRTHDAY!";

// TIMER / STORY MESSAGES
// Each item in array: [message, displayTime]
const MESSAGE = [
    ["Hi! Here's the first message!", 3000],
    ["This one is a little longer than the last message, so I need to make it last 6 seconds instead of 3 seconds.", 6000],
    ["Here's a short one.", 2000],
    ["Shortest one.", 1000],
    ["If I want \"quotations\" then I need to use a slash \\", 4000],
    ["- Love, Your Name", 15000]
];


/*
============================================================
DO NOT EDIT THIS SECTION
This section is required for the website to work correctly.
============================================================
*/

const fadeElement = document.querySelector("#fade"); /* querySelector is used to select an #idName from CSS (and an id from HTML) */
const startText = document.querySelector(".startingText"); // Select the element that will display the text
const mainText = document.getElementById("mainText"); // Select the main message
const button = document.getElementById('startButton'); /* getElementById is used to select an id from HTML (and an #idName from CSS) */
const displayButton = document.querySelector(".displayButton"); // Select the display button
const storyScreen = document.querySelector(".storyScreen"); // Select the story screen
const text = document.getElementById('storyText'); // Select the text element
const click = new Audio("Audio/Click.mp3"); // Create a new Audio object for the click sound effect
const music = new Audio("Audio/Story.mp3"); // Create a new Audio object for the background music

music.loop = true;

// Put the customizable main message into the HTML
mainText.textContent = MAIN_MESSAGE;

fadeOut(); // Fade out the black screen immediately
showText(); // Show the text immediately after fadeOut();
showDisplayButton(); // Show the display button immediately after fadeOut();

/* ~~~ BUTTON ANIMATION ~~~ */

button.addEventListener('mouseover', function() {
    displayButton.style.transition = "transform 0.3s ease-out"; // for smooth transition
    displayButton.style.transform = "translate(-50%, -50%) scale(1.1)"; // 120% of the original size, 20% change

    // since the CSS properties we want to change are scale AND translate (bc we dont want the button position to change when we scale it), they both are contained by 'transform' and hence we can use the transform property to apply both at once
});

button.addEventListener('mouseout', function() {
    displayButton.style.transition = "transform 0.3s ease-out";
    displayButton.style.transform = "translate(-50%, -50%) scale(1)"; // 100% = normal size, 0% change
});


/* ~~~ AFTER CLICKING START ~~~ */

button.addEventListener('click', function() {

    // Make the button slightly bigger than its hover size to show that it was clicked
    displayButton.style.transition = "transform 0.2s ease-out";
    displayButton.style.transform = "translate(-50%, -50%) scale(1.2)";
    displayButton.style.transition = "transform 0.2s ease-out";

    click.play();
    
    // Fade into the story screen
    setTimeout(fadeIn, 1000);

    // Wait for the click animation and fade to finish
    setTimeout(function() { 
        storyScreen.style.display = "block"; // make the story screen visible

        fadeOut();

        music.play(); // Play the background music

        // Start displaying the story messages
        startStory();

    }, 5000); 
});


/* ~~~ STORY TEXT ~~~ */

function startStory(){

    let initialDelay = 3000; // Initial delay before the first message appears

    for(let i = 0; i < MESSAGE.length; i++){

        let currMessage = MESSAGE[i]; // "let" means the variable can only be used in this block of code and CAN BE CHANGED
        let msg = currMessage[0];
        let time = currMessage[1];

        /* show text */
        setTimeout(function() {
            text.textContent = msg; // NOTE: be careful not to use 'currMessage", this is an ARRAY of items and its sole purpose was to break it down into 2 string: 'msg' & 'time'
            text.style.display = "block"; // make the text visible
        }, initialDelay); 

        /* hide text */
        setTimeout(function() {
            text.style.display = "none"; // make the text invisible
        }, initialDelay + time); 

        initialDelay += time + 1500; // continue to iterate the time to grow longer and longer for each message in relation to the initial message. This ensures the texts have their own run time and dont overlap

        // 1500 milliseconds is the time in between messages and is added onto 'initialDelay + time'
    }
}


/* ~~~ FUNCTIONS ~~~ */

function fadeIn(){
   fadeElement.style.display = "block"; // fade in to the black screen element

   setTimeout(function() {
       fadeElement.style.opacity = "1"; // RESET the fading animation from fadeOut();
   }, 500); // NOTE: the time here doesnt really make sense but the code works
}

function fadeOut(){
   fadeElement.style.display = "block";
   fadeElement.style.opacity = "0"; // fade out the black screen element

   setTimeout(function() {
       fadeElement.style.display = "none"; // make the black screen element invisible after fading out (need this so we can press the physically button wihtout being blocked by the opacity: 0 screen)
   }, 2000); // wait for 2 seconds to allow the opacity transition to complete
}

function showText(){

   setTimeout(function() {
       startText.style.transform = "translate(-50%, 0)"; /* move the text to the center of the screen after animation */
       startText.style.opacity = "1"; // make the text visible
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
       showButton(); // show the physcially clickable button
   }, 2500);
}

/* 
  LET: changeable variable
  CONST: final variable 
  SCALING: scale(#) where '#' is a multiplier to scale --> 1=100% (no change), 0.5=50% (half as big), 1.2=120% (20% bigger)
*/
