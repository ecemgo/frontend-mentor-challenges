const emailId = document.getElementById("email-id");
const mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

//! get the cursor position in the input
emailId.addEventListener("keyup", (e) => {
  console.log("Caret at: ", e.target.selectionStart);
});

//! show whether the email address is valid or not with an outline
emailId.addEventListener("input", (e) => {
  const emailInputValue = e.currentTarget.value;
  if (
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailInputValue) !=
    true
  ) {
    emailId.style.outline = "4px dotted rgb(240, 10, 21)";
  } else {
    emailId.style.outline = "4px dotted rgb(84, 230, 175)";
  }
});

//! if email address is empty, remove the outline from the input
function checkEmpty() {
  if (emailId.value == "") {
    emailId.style.outline = "none";
    window.location.reload();
  }
}

//! submit the email address
form.addEventListener("submit", (e) => {
  if (emailId.value.match(mailRegex)) {
    e.preventDefault();
    form.innerHTML = `<p style="font-size: 2rem; color: rgb(84, 230, 175);">Subscribed!</p>`;
    setTimeout("location.reload(true);", 2000);
    // alert("Your email address has been submitted successfully!");
    // emailId.value = "";
    // window.location.reload();
  } else {
    e.preventDefault();
    alert("Oops! Please check your email");
  }
});

//! typing animation for the placeholder
let i = 0;
let placeholder = "";
const txt = "example@domain.com";
const speed = 120;

function type() {
  placeholder += txt.charAt(i);
  emailId.setAttribute("placeholder", placeholder);
  i++;
  setTimeout(type, speed);
}

type();
