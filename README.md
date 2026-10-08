---
Template: Digital Time Capsule Gift
Authour: Edrielle Mateo
Original Creation: August 2025
Template Creation: October 2026
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

## Notes From Author

This was actually my very first HTML/CSS/JS project, so you will see lots of comments as I learned the ropes of it all. I contemplated removing them for this template, but I decided to leave them as a reminder that we all start somewhere!

## Before You Start

You do **not** need to know much HTML, CSS, or JavaScript to personalize this project.

The project has been designed so that the things you are expected to change are clearly marked in the JavaScript files.

### The only things you need to customize are:

1. **The password**
2. **The main message**
3. **The story/timer messages**

You should **not** need to change the CSS, HTML, images, colours, animations, or other JavaScript.

---

# 1. Download the Project

Download or clone this project onto your computer.

If you are using GitHub, you can select **Code → Download ZIP** and extract the folder.

Open the project in a code editor such as **Visual Studio Code**.

---

# 2. Customize Your Website

All customizable information is located at the top of the JavaScript files under **CUSTOMIZE HERE**.

### Password

Open `Index.js` and find:

```js
const PASSWORD = "NEWPASS123";
```

Replace `"NEWPASS123"` with the password you want.

**Important:**
- Keep the password inside the quotation marks.
- The password must be **20 characters max**.
- The password is case-sensitive.

For example:

```js
const PASSWORD = "SUPERSECRET123";
```

### Main Message

Open `Main.js` and find:

```js
const MAIN_MESSAGE = "HAPPY BIRTHDAY!";
```

Replace the message with whatever you want displayed during the introduction.

For example:

```js
const MAIN_MESSAGE = "HAPPY 40TH BIRTHDAY SPONGEBOB!";
```

### Story / Timer Messages

In `Main.js`, you will also find:

```js
const MESSAGE = [
    ["Hi! Here's the first message!", 3000],
    ["This one is a little longer than the last message, so I need to make it last 6 seconds instead of 3 seconds.", 6000],
    ["Here's a short one.", 2000],
    ["Shortest one.", 1000],
    ["If I want \"quotations\" then I need to use a slash \\", 4000],
    ["- Love, Your Name", 15000]
];
```

Each message follows this format:

```js
["YOUR MESSAGE", TIME]
```

The time is written in **milliseconds**.

For reference:

- `1000` = 1 second
- `3000` = 3 seconds
- `5000` = 5 seconds
- `10000` = 10 seconds

You can add, remove, or rearrange messages as you wish.

For example:

```js
const MESSAGE = [
    ["Happy birthday!", 3000],
    ["I hope you have an amazing day :)", 5000],
    ["I love you!", 4000],
    ["- Love, Your Name", 10000]
];
```

**Important:** If you want to include quotation marks inside a message, place a `\` before them:

```js
["She said \"I love you!\"", 4000]
```

---

# 3. Things to Keep in Mind

- Do **not** rename, move, or delete the project files or folders.
- Keep the existing `Images` and `Audio` folders in the same location.
- Do not remove the quotation marks around your customizable text.
- Passwords are **case-sensitive**.
- Story message times are measured in **milliseconds**, not seconds.
- You do not need to change anything outside the sections marked **CUSTOMIZE HERE**.
- The website is designed for a desktop/laptop browser and may not look exactly the same on every screen size.
- The password is part of the JavaScript code, so this is a fun password screen rather than a secure method of protecting sensitive information.

---

# 4. Test Your Website

Before sending the website to someone, test it on your own computer.

1. Find `Index.html` in the project folder.
2. Right-click it and select **Copy Path**.
3. Paste the path into your web browser and press **Enter**.

The website should open in your browser.

Test that:

1. The password works.
2. The introduction appears correctly.
3. The Start button works.
4. The music plays.
5. The messages appear in the correct order.
6. Each message stays on screen for the amount of time you intended.

---

# 5. Put the Website Online

To let someone else open the website from their own browser, you need to host the project online.

One simple option is **GitHub Pages**.

1. Create a GitHub repository.
2. Upload all of the project files and folders.
3. Make sure `Index.html` is in the main project folder.
4. Open the repository's **Settings**.
5. Find **Pages** under the repository settings.
6. Under **Build and deployment**, select your main branch as the source.
7. GitHub will provide you with a website link.

Send that link to the person receiving the gift.

They can open the link in their browser, enter the password, and experience the time capsule.

---

## Enjoy!

That's it! Customize the three sections marked **CUSTOMIZE HERE**, leave everything else alone, and you should be ready to create your own digital time capsule.