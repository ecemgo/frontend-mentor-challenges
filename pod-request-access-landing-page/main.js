const emailId = document.getElementById("email-id");
const error = document.getElementById("error");
const remark = document.getElementById("remark");
const mailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//! check whether email address is valid or not
function checker() {
  if (emailId.value.match(mailRegex)) {
    remark.innerHTML = `<i class="fa-solid fa-circle-check"></i><span>Your email is now valid!</span>`;
    remark.style.margin = "0 0 3rem 0";
    error.style.display = "none";
  } else if (emailId.value == "") {
    remark.style.display = "none";
    error.style.display = "none";
    emailId.style.margin = "0 0 4.5rem 0";
  } else {
    error.style.display = "block";
    emailId.style.margin = "0 0 0 0";
  }
}

//! submit the email address
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Your email address has been submitted successfully!");
  emailId.value = "";
  remark.style.display = "none";
  window.location.reload();
});

//! get the cursor position in the input
emailId.addEventListener("keyup", (e) => {
  console.log("Caret at: ", e.target.selectionStart);
});
