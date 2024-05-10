const markAll = document.querySelector(".mark-all-as-read");
const newNotifications = document.querySelectorAll(".new-notification");
const redPoints = document.querySelectorAll(".red-point");
const count = document.querySelector(".count");

count.innerText = newNotifications.length;

function redPoint() {
  redPoints.forEach((e) => {
    e.classList.remove("red-point");
  });
}

function newNotification() {
  newNotifications.forEach((e) => {
    e.classList.remove("new-notification");
  });
}

markAll.addEventListener("click", () => {
  redPoint();
  newNotification();
  const newMessages = document.querySelectorAll(".new-notification");
  count.innerText = newMessages.length;
});
