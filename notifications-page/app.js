const markAll = document.querySelector(".mark-all-as-read");
const unreadNotifications = document.querySelectorAll(".unread");
const redPoints = document.querySelectorAll(".red-point");
const count = document.querySelector(".count");

count.innerText = unreadNotifications.length;

function redPoint() {
  redPoints.forEach((e) => {
    e.classList.remove("red-point");
  });
}

function unreadMessage() {
  unreadNotifications.forEach((e) => {
    e.classList.remove("unread");
    const redPoint = e.querySelector(".red-point");
    if (redPoint) {
      redPoint.classList.remove("red-point");
    }
  });
}

function updateUnreadCount() {
  const newUnreadNotifications = document.querySelectorAll(".unread");
  count.innerText = newUnreadNotifications.length;
}

markAll.addEventListener("click", () => {
  redPoint();
  unreadMessage();
  updateUnreadCount();
});

unreadNotifications.forEach((notificationBox) => {
  notificationBox.addEventListener("click", () => {
    if (notificationBox.classList.contains("unread")) {
      notificationBox.classList.remove("unread");
      const redPoint = notificationBox.querySelector(".red-point");
      if (redPoint) {
        redPoint.classList.remove("red-point");
      }
      updateUnreadCount();
    }
  });
});
