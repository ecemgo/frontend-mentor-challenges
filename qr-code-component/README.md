# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### Screenshot

![](./images/qr-code-screenshot.jpg)

### Links

- [Solution URL](https://github.com/ecemgo/Frontend-Mentor-Challenges/tree/main/qr-code-component)
- [Live Site URL](https://ecemgo-qr-code-component.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Pure CSS
- Flexbox

### What I learned

In this project, pure CSS and flexbox were used. Flexbox is a one-dimensional layout system to make web design responsive, and it provides that the elements can change their behavior depending on the kind of device displaying them. Additionally, it makes elements flexible and provides them with appropriate position, and symmetry. Thus, responsive web pages are able to be designed and built without having to use a lot of float and position properties in the CSS.

- In this project, align-self was used to center the qr-code box in html:

```html
<div class="qr-code-box" style="align-self: center"></div>
```

- and align-self was also used to make the footer located at the end of the page in the html:

```html
<div class="attribution" style="align-self: flex-end"></div>
```

- In order to center the qr-code-box on the page and make it responsive, features of the flexbox were also used in CSS:

```css
.qr-code-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
```

- Additionally, the code was used to center image:

```css
.qrimg {
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
```

## Author

- Website - [ecemgo.com](https://www.ecemgo.com/)
- Frontend Mentor - [@ecemgo](https://www.frontendmentor.io/profile/ecemgo)
- Twitter - [@ecemgo](https://twitter.com/ecemgo)
- Medium - [@ecemgo](https://medium.com/@ecemgo)
