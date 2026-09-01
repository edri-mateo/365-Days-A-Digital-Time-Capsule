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
   const message = [
       ["Hi Bryce it\'s me, Edrie (aka your official official gf) :)", 3000],
       ["I know this a few months late, but I wanted to make something a little bit different for you this time.", 6000],
       ["Whenever I was asked to make a wish, I used to wish for the silliest of things: a horse, a dog, a duck, or even more wishes :D", 10000],
       ["But on the days that felt a little bit darker, a little more heavier and a lot more lonelier, sometimes I would whisper under my breath: ", 11000],
       ["\"all I want is to be seen a little clearer, to be heard a little louder, and to feel a little happier\"", 8000],
       ["This was a wish that I didn\'t make on my birthday or under a bridge. It was a silent plea that I didn\'t think anyone would hear.", 10000],
       ["A few months ago last year, the most unexpected person had walked into my life.", 8000],
       ["Then around this time of last year, I somehow knew that things were going to be different.", 9000],
       ["However, never did I think that this person would change me in ways beyond what I ever imagined for myself.", 9000],
       ["As we grew closer, we watched our hearts open up bit by bit.", 6000],
       ["I\'ll be honest, it was kinda Scary.. but it also so Fulfilling.", 5000],
       ["I was overwhelmed with unexplainable Ache, but I have never Loved harder.", 5000],
       ["I felt Vulnerable. Yet somehow I\'ve never felt Safer.", 5000],
       ["We know keeping a love like ours isn\'t always the easiest thing.", 5000],
       ["Distance is hard.", 3000],
       ["Conflicts are hard.", 3000],
       ["Understanding the jumble of intense, new feelings that we now experience because of each other..", 8000],
       ["..Is so unbelievably hard.", 5000],
       ["However,", 4000],
       ["If it means that I get to continue being part of your life, to continue being your #1 supporter (hater), to be your rest and comfort, your movie-watching buddy, and your safe space..", 16000],
       ["Then I would undoubtedly experience it all again. Now, then, and in the future.", 7000],
       ["Everyday, since the moment I agreed to become your gf..", 5000],
       ["..To the day that I say \"I do\",", 5000],
       ["Until the day that we have to watch each other take our last breaths,", 5000],
       ["It\'ll always be you.", 5000],
       ["Thank you for listening to me with all my ridiculous rants and insane ideas at 3am.", 9000],
       ["Thank you for seeing me often, for noticing the slightest changes in me, and for remembering my favourite things.", 10000],
       ["Thank you for loving me so entirely and so completely. Thank you for making me smile and laugh, for making my heart flutter, for comforting me and protecting me, and for being the one to make me the most happiest girl in the world.", 18000],
       ["Even on your most exhausting days, you still find a way back to me.", 6000],
       ["And all of a sudden, I realized that you were my wish all along.", 6000],
       ["To more years of us,", 5000],
       ["I love you. \n(to the moon and back)", 5000],
       ["- Love, Edrielle", 15000]
   ];

   let initialDelay = 8000; // Initial delay before the first message appears

   for(let i=0; i<message.length; i++){
        let currMessage = message[i]; // "let" means the variable can only be used in this block of code and CAN BE CHANGED
        let msg = currMessage[0];
        let time = currMessage[1];

       /* show text */
       setTimeout(function() {
           text.textContent = msg; // NOTE: be careful not to use 'currMessage", this is an ARRAY of items and its sole purpose was to break it down into 2 string: 'msg' & 'time'
           text.style.display = "block"; // make the text visible
       }, initialDelay); // show text after after hidden (will always be consistent after the intial 8000 milliseconds)

       /* hide text */
       setTimeout(function() {
           text.style.display = "none"; // make the text invisible
       }, initialDelay + time); // hide text after the time specified in the message array

       initialDelay += time + 1500; // continue to iterate the time to grow longer and longer for each message in relation to the initial message. This ensures the texts have their own run time and dont overlap 
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
        fadeElement.style.display = "none"; // make the black screen element invisible after fading out (need this so we can press the physically button wihtout being blocked by the opacity: 0 screen)
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
        showButton(); // show the physcially clickable button
    }, 2500);
}

/* 
   LET: changeable variable
   CONST: final variable  
   SCALING: scale(#) where '#' is a multiplier to scale --> 1=100% (no change), 0.5=50% (half as big), 1.2=120% (20% bigger)
*/