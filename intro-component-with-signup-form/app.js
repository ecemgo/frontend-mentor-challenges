const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const subscription = document.querySelector(".subscription");
const submitted = document.querySelector(".submitted");
const message = document.querySelector(".message");

//! submit the form when clicking the button
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    firstname.value.trim() === "" ||
    lastname.value.trim() === "" ||
    email.value.trim() === "" ||
    password.value.trim() === ""
  ) {
    checkInputs();
  } else {
    submittedForm();
  }
});

//! check whether inputs are empty or not
function checkInputs() {
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstnameValue === "") {
    setErrorFor(firstname, "First Name cannot be empty");
  } else {
    setSuccessFor(firstname);
  }

  if (lastnameValue === "") {
    setErrorFor(lastname, "Last Name cannot be empty");
  } else {
    setSuccessFor(lastname);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be empty");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Looks like this is not an email");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be empty");
  } else {
    setSuccessFor(password);
  }
}

//! add error class to the form-control
function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control
  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.style.paddingBottom = "22px";
  formControl.className = "form-control error";
}

//! add success class to the form-control
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.style.paddingBottom = "0";
  formControl.className = "form-control success";
}

//! check email with Regex
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

//! show the message of 'submitted'
function submittedForm() {
  subscription.classList.add("hidden");
  form.classList.add("hidden");
  message.classList.remove("hidden");
  ani();
  setTimeout("location.reload(true);", 3000);
}

//! add animation to the message box
function ani() {
  submitted.classList.add("fade-in");
}
