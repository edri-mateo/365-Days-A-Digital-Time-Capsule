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



# 1. Create Your Own Copy

This project is a **GitHub Template Repository**, which means you can create your own copy of it and customize it without changing the original template.

1. Click **Use this template** at the top of this GitHub repository.
2. Select **Create a new repository**.
3. Give your repository a name.
4. Choose whether you want the repository to be **Public** or **Private**.
5. Click **Create repository**.

You now have your own copy of the website!



# 2. Open the Project in an IDE

You will need a code editor (IDE) to customize the website. **Visual Studio Code** is recommended, but other code editors will work too.

### Using Visual Studio Code

1. Open your new GitHub repository.
2. Click the **Code** button.
3. Select **HTTPS** and copy the URL.
4. Open Visual Studio Code.

Then clone your repository directly through Visual Studio Code.



# 3. Customize Your Website

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

**Important #1:** If you want to include quotation marks inside a message, place a `\` before them:

```js
["She said \"I love you!\"", 4000]
```

**Important #2:** If any piece of text goes off the screen, you can use `\n` to add a new line:

```js
const MAIN_MESSAGE = "HAPPY 1ST YEAR ANNIVERSARY! \n (jk it's our 2nd year)"
```


# 4. Things to Keep in Mind

- Do **not** rename, move, or delete the project files or folders.
- Keep the existing `Images` and `Audio` folders in the same location.
- Do not remove the quotation marks around your customizable text.
- Passwords are **case-sensitive**.
- Story message times are measured in **milliseconds**, not seconds.
- You do not need to change anything outside the sections marked **CUSTOMIZE HERE**.
- The website is designed for a desktop/laptop browser and may not look exactly the same on every screen size.
- The password is part of the JavaScript code, so this is a fun password screen rather than a secure method of protecting sensitive information.


# 5. Test Your Website

Before sending the website to someone, test it on your own computer.

1. Find `index.html` in the project folder.
2. Right-click it and select **Copy Path**.
3. Paste the path into your web browser and press **Enter**.

The website should open in your browser.

Test that:
- [ ] The password works.
- [ ] The introduction appears correctly.
- [ ] The Start button works.
- [ ] The music plays.
- [ ] The messages appear in the correct order.
- [ ] Each message stays on screen for the amount of time you intended.


# 6. Put the Website Online

Once you are happy with your website, you can use **GitHub Pages** to make it accessible through a normal website link.

1. Open your GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. Leave **Custom domain** empty.
5. Save your settings.
6. Wait a few minutes for GitHub to finish publishing your website.

### Your Website URL

Your website will be available at:

`https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY-NAME/`

Once it is live, send the link to the person receiving the gift!

They can open the link in their browser, enter the password, and experience the time capsule.

**Important:** Make sure the entire project remains in your repository, including the `Images` and `Audio` folders. These files are needed for the website to work correctly.


## Enjoy!

And that's it! Now you have everything you need to create your own little digital time capsule.

I hope this template helps you make something special for someone you love, whether it's for a birthday, anniversary, holiday, or just because. Sometimes the simplest gifts are the ones that mean the most :)

Have fun making it yours, and I hope whoever receives it loves it as much as you loved making it!