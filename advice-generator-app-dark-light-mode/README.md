# <img src="https://user-images.githubusercontent.com/13468728/222973742-9133bdb5-61f0-4f53-8b08-bb3c349e2056.png" title="Frontend Mentor" alt="Frontend Mentor" width="50" height="50"/> Frontend Mentor - Advice Generator App Solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](images/advice-generator-light-mode.jpg)

### Links

- [Solution URL](https://github.com/ecemgo/frontend-mentor-challenges/tree/main/advice-generator-app-dark-light-mode)
- [Live Site URL](https://advice-generator-app-dark-light-mode.netlify.app/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Fetch API

### What I learned

The `<source>` elements include a `media` attribute that contains a media condition — as with the first `srcset` example, these conditions are tests that decide which image is shown — the first one that returns true will be displayed. In this case, if the viewport width is 799px wide or less, the first `<source>` element's image will be displayed. If the viewport width is 800px or more, it'll be the second one.

```
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(min-width: 800px)" srcset="elva-800w.jpg" />
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
</picture>
```
https://mycolor.space/
### Useful resources

- [Advice Slip API](https://api.adviceslip.com/) - It is used to generate random advice.
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) - It is used to learn how to apply responsive images.
- [CSS Tricks](https://css-tricks.com/snippets/css/keyframe-animation-syntax/) - It is used for keyframe animation.
- [Stack Overflow](https://stackoverflow.com/questions/63303763/trigger-css-animation-on-click-via-javascript) - It is used for trigger CSS animation on click.
- [ColorSpace](https://mycolor.space/) - It is used to set colors.

## Author

- Website - [ecemgo.com](https://www.ecemgo.com/)
- Frontend Mentor - [@ecemgo](https://www.frontendmentor.io/profile/ecemgo)
- Twitter - [@ecemgo](https://twitter.com/ecemgo)
