---
Template: Digital Time Capsule Gift
Authour: Edrielle Mateo
Date: Fall 2026
---

# Overview

A small interactive digital time capsule made for someone you love.

This project is designed to be used as a personal template. You can create your own version for a partner, friend, family member, or anyone special to you.

The website includes:

- A password-protected opening screen
- A short animated introduction
- Background music
- A sequence of personalized messages
- Timed messages that appear one at a time
- Pixel-art visuals and animations

---

## Notes From Authour
This was actually my very first HTML/CSS/JS project, so you will see lots of comments as I learned the ropes of it all. I contemplated removing them for this template but I decided to leave it as a reminder for everyone that we all start somewhere!

## Before You Start

You do NOT need to know much HTML, CSS, or JavaScript to personalize this project.

The project has been designed so that the things you are expected to change are clearly marked in the JavaScript files.

### The only things you need to customize are:

1. The password
2. The main message
3. The story/timer messages

You should not need to change the CSS, HTML, images, colours, animations, or other JavaScript.

---

# 1. Download the Project

* Download or clone the entire project.

* Make sure you keep the folder structure intact.

* Do not rename or move these files unless you also update the code that refers to them.

---

# 2. Change the Password

Open:

    `index.js`

At the very top, you will see:

    ``` text
    // ============================================================
    // CUSTOMIZE YOUR PROJECT HERE
    // ============================================================

    const PASSWORD = "NEWPASS123";
    ```

Change the text inside the quotation marks. 

For example:

    `const PASSWORD = "HAPPYBDAY!";`

The person receiving the website will need to enter this password before they can continue.

Keep the password reasonably short (maximum of 10 characters) because the password box has a character limit.

---

# 3. Change the Main Message

Open:

    `Main.js`

At the very top, you will see:

    `const MAIN_MESSAGE = "HAPPY BIRTHDAY!";`

Change this to the message you want as soon as they enter the main screen.

For example:

    const MAIN_MESSAGE = "HAPPY 1ST ANNIVERSARY";

The value is also used as the browser page title.

## Important

The large visible message in the opening animation is part of:

    Images/Main_text.png

That means the visible words inside that image cannot be changed by editing JavaScript alone.

The `MAIN_MESSAGE` constant is still provided so that the main message is clearly defined in the customization section.

If you want to replace the actual words inside `Main_text.png`, you will need to edit or replace that image separately.

---

# 4. Customize the Timer Messages

Open:

    Main.js

At the top, underneath `MAIN_MESSAGE`, you will find:

    const TIMER_MESSAGES = [
        ["Your first message", 3000],
        ["Your second message", 5000],
        ["Your third message", 8000]
    ];

Each message has two parts:

    ["MESSAGE", TIME]

The first part is the text that appears on the screen.

The second part controls how long the message stays visible.

The time is measured in milliseconds.

    1000 = 1 second
    3000 = 3 seconds
    5000 = 5 seconds
    10000 = 10 seconds

For example:

    ["I love you!", 5000]

means that:

> "I love you!"

will stay on screen for 5 seconds.

---

## Adding a New Message

You can add as many messages as you want.

For example:

    const TIMER_MESSAGES = [
        ["Happy anniversary!", 5000],

        ["I am so lucky to have you.", 6000],

        ["Here's to many more years together.", 7000]
    ];

Make sure each message except the last one has a comma after it.

---

## Using Multiple Lines

You can make a message appear on multiple lines using:

    \n

For example:

    ["I love you.\nTo the moon and back.", 5000]

This will display:

    I love you.
    To the moon and back.

---

# 5. Changing How Long Messages Stay

The second number controls the amount of time each message remains visible.

For example:

    ["This is a short message.", 3000]

The message stays for 3 seconds.

Whereas:

    ["This is a longer message that needs more time to read.", 10000]

gives the reader 10 seconds.

Give longer messages more time so they are comfortable to read.

---

# 6. Running the Website

The easiest way to test the project is to open the project folder in a code editor such as Visual Studio Code.

You can then use a local development server.

If you are using Visual Studio Code, you can install the "Live Server" extension.

Then:

1. Open the project folder.
2. Open `index.html`.
3. Start the local server.
4. The website should open in your browser.
5. Enter your custom password.
6. Test the entire experience from beginning to end.

---

# 7. Important: Keep the Folder Structure

The website uses relative file paths.

For example:

    Images/Main.png

and:

    Audio/Story.mp3

Because of this, moving or renaming files can cause parts of the website to stop working.

Keep the `Images` and `Audio` folders in the same location as the HTML files.

---

# 8. What You Should NOT Change

Unless you know HTML, CSS, and JavaScript, you should leave these files alone:

    index.css
    Main.css
    index.html
    Main.html

The rest of `index.js` and `Main.js` should also be left alone.

The customizable sections are intentionally placed at the top of the JavaScript files.

Look for:

    // CUSTOMIZE YOUR PROJECT HERE

and:

    // DO NOT EDIT BELOW THIS LINE

Everything between those sections is the part you can personalize.

---

# 9. Project Structure

### index.html

The password screen.

### index.css

Controls the appearance and positioning of the password screen.

### index.js

Controls the password and the transition into the main website.

The password is located at the top of this file.

### Main.html

Contains the main anniversary screen and story screen.

### Main.css

Controls the appearance, positioning, animations, and layout of the main screen.

### Main.js

Controls the animations, transitions, music, and personalized story.

The main message and timer messages are located at the top of this file.

### Images/

Contains the artwork used by the website.

### Audio/

Contains the sound effects and background music.

---

# 10. Personalization Checklist

Before giving the website to someone, check:

- [ ] I changed the password.
- [ ] I changed the main message.
- [ ] I replaced all of the example story messages.
- [ ] I checked the timing of each message.
- [ ] I tested the password.
- [ ] I tested the entire story from beginning to end.
- [ ] I kept the `Images` folder intact.
- [ ] I kept the `Audio` folder intact.
- [ ] I did not accidentally delete or rename any required files.

---

# Have Fun With It!

The point of this project isn't to make a technically complicated website.

It's to give someone a little digital time capsule that feels like it was made specifically for them.

Write the things you normally wouldn't put into a regular text message.

Add your inside jokes.

Add memories.

Add little things that only the two of you would understand.

Make it yours.