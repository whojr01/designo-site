# Frontend Mentor - Designo agency website solution

This is a solution to the [Designo agency website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/designo-multipage-website-G48K6rfUT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

~

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email Address` or `Your Message` fields are empty should show "Can't be empty"
  - The `Email Address` is not formatted correctly should show "Please use a valid email address"
- **Bonus**: View actual locations on the locations page maps (we recommend [Leaflet JS](https://leafletjs.com/) for this)

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

To start I downloaded the starter files, created this git repository, copied the readme template, and pushed. So pretty basic start.

What I'm going to do now is to focus on understanding the figma file. The file has desktop, tablet, and mobile design.

**Desktop**
**Tablets**

- Menu items

  - Size: 14px
  - Letter Spacing: 2px
  - line Height: 14px
  - Uppercase
  - Regular

- H1 (Award winning)

  - Size: 48px
  - Line Height: 48px
  - Letter spacing: 0px
  - Medium

- H2 ( WEB Design)

  - Size: 40px
  - Line Height: 48px
  - Letter Spacing: 2px
  - Medium
  - Uppercase

- H3 (Passionate)

  - Size: 20px
  - Line Height: 26px
  - Letter Spacing: 5px
  - Uppercase
  - Medium

- H4 (View Projects)

  - Size: 15px
  - Line Height: Auto
  - Letter Spacing: 5px
  - Uppercase
  - Medium

- Body

  - Size: 16
  - Line Height: 26
  - Letter Spacing: 0
  - regular

- Button Text:
  - Size: 15
  - Line height: auto
  - Letter Spacing: 1px
  - Meduim

**Footer**

- H2 (Let's Talk - footer)

  - Size: 40px
  - Line Height: 40px
  - Letter Spacing: 0
  - Medium

**Mobile**

- Menu items

  - Size: 24px
  - Letter Spacing: 2px
  - line Height: 25px
  - Uppercase
  - Regular

- H1 (Award winning)

  - Size: 32px
  - Line Height: 36px
  - Letter spacing: 0px
  - Medium

- H2 ( WEB Design)

  - Size: 28px
  - Line Height: 36px
  - Letter Spacing: 1.4px
  - Medium
  - Uppercase

- H3 (Passionate)

  - Size: 20px
  - Line Height: 26px
  - Letter Spacing: 5px
  - Uppercase
  - Medium

- H4 (View Projects)

  - Size: 15px
  - Line Height: Auto
  - Letter Spacing: 5px
  - Uppercase
  - Medium

- Award Body

  - Size: 15
  - Line Height: 25
  - Letter Spacing: 0
  - regular

- Body

  - Size: 16
  - Line Height: 26
  - Letter Spacing: 0
  - regular

- Button Text:
  - Size: 15
  - Line height: auto
  - Letter Spacing: 1px
  - Meduim

**Footer**

- H2 (Let's Talk - footer)

  - Size: 32px
  - Line Height: 36px
  - Letter Spacing: 0
  - Medium

### Built with

HTML
CSS
SASS
Javascript (If needed)

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Well... The organization of the project is first and formost on my mind. I made a decision to implement the `mobile menu using CSS specifically the checkbox hack`. It works fine bust goes agains the convention of using javascript to control action/state. So IDK I'm likely to change it for other pages since its only a couple of lines of code.

Sigh... Well it looks like the CSS `checkbox hack` isn't living up to my expectation. The issue is turning off the checkbox. The checkbox is tied to the label and the label wraps all of the menu so it's impossible to turn off. I haven't tried rearranging the label to see if I can get around the menu being fired at tablet and desktop sizes. I will probably do that after I finish but before I convert it to a javascript solution.

It's an interesting problem in that debugging it highlighted the lack of identification of when a HTML input occurs. It's not like javascript where you can trace through the code and the current chrome devtools don't offer a dynamic HTML trace. Everything shown in devtools in regards to HTML/CSS is after it is rendered. Bummer...

The current organization needs a few tweaks that will be implemented the next time I push my changes. The current organization is as follows:

All of the CSS is rolled up into style.css as generated by SASS. I haven't implemented any compression or tree shaking yet in my gulpfile. So the style.css includes:

**style.css**

- \_css-reset.scss - Contains well... reset of properties
- \_mixins.scss - Contains setFont mixin. The only one so far
- \_variables.scss - Contains variables and utility classes
- \_menu.scss - Contains only the menu.
- \_home.scss - Contains only the styles used on the home page
- \_webdesign.scss - Contains only the styles used on the web-design page.
- \_footer.scss - Contains only the footer

So the **style.css** will be renamed to home.css and only contain styles specific to building the home page. So this will be renamed to **home.css** and each page will have its own css file named after it.

So I'm likely to elevate **\_menu.css** and **\_footer.css** so I don't have redunant copies of the menu in all the files. This means that I will have to create a new top level file that is included along with **home.css**.

The **home.css** contains the complete styles for mobile, tablet, and desktop. Within the home page there are a number of syles that should become components and if that occurs then maybe I will further breakdown the heirachy I'm roughly sketching out here.

I've run into a few cases where my code isn't as dry or efficient as it needs to be. I am working on it. I will likely take time before I start the next page to work the organization and cleaning up the code so I can learn where I am coming up short.

**Accessability**... Yeah it's on my mind and I have a lot of research to do to incorporate it correctly. This will likely impact favorably the decision to implement a javascript menu. I will also have to re-evaluate the types of elements I am using for flow control and UX.

I'm trying to keep the organization for this site as easy as possible but I'm leaning towards adding a html template engine to reduce the number of touches to fix a single component. Right now if there's a problem in the CSS for the menu/footer I touch it once and recompile. Unfortunately that's not true for the HTML. So if I pair the HTML with a SASS mixin/extend I could componetize a number of the cards and ensure consistency across pages.

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
