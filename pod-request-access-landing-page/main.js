const emailId = document.getElementById("email-id");
const error = document.getElementById("error");
const remark = document.getElementById("remark");
const mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

//! check whether email address is valid or not
function checker() {
  if (emailId.value.match(mailRegex)) {
    remark.innerHTML = `<i class="fa-solid fa-circle-check"></i><span>Your email is now valid!</span>`;
    error.style.display = "none";
  } else if (emailId.value == "") {
    error.style.display = "none";
    remark.style.display = "none";
    window.location.reload();
  } else {
    error.style.display = "block";
  }
}

//! continue to show error message when press the backspace and delete
emailId.onkeydown = function (e) {
  var key = e.keyCode || e.charCode;

  if (key == 8 || key == 46) {
    error.style.display = "block";
    remark.style.display = "none";
  }
};

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
