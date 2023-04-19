const toggleText = document.getElementById("toggle-text");
const noResults = document.getElementById("no-results");
const moonIcon = document.getElementById("moon");
const sunIcon = document.getElementById("sun");
const toggle = document.getElementById("toggle");
const searchUser = document.getElementById("search-user");

//! submit form
function submitForm(e) {
  e.preventDefault();
  const githubUser = searchUser.value;
  fetchUser(githubUser);
}

//! Fetch GitHub user by username by using API
async function fetchUser(username) {
  noResults.classList.add("hidden");

  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();

    if (!res.ok) {
      searchUser.setAttribute("style", "width: 55%");
      return noResults.classList.remove("hidden");
    }
    searchUser.setAttribute("style", "width: 70%");
    return updateDOM(data);
  } catch (err) {
    return console.log(err);
  }
}

//! get GitHub user info
function updateDOM(user) {
  const joinedAt = user.created_at.split("T")[0];
  const dateSegment = joinedAt.split("-");
  const year = dateSegment[0];
  const month = dateSegment[1];
  const day = dateSegment[2];

  const date = new Date(year, month, day);
  date.setMonth(month - 1);
  const monthTxt = date.toLocaleDateString("en", { month: "short" });

  const userImg = document.getElementById("user-img");
  const userImgMobile = document.getElementById("user-img-mobile");
  const userName = document.getElementById("username");
  const githubUser = document.getElementById("github-user");
  const joinedDate = document.getElementById("joined-date");
  const joinedDateMobile = document.getElementById("joined-date-mobile");
  const userBio = document.getElementById("bio");
  const userRepos = document.getElementById("repos");
  const userFollowers = document.getElementById("followers");
  const userFollowing = document.getElementById("following");
  const userLocation = document.getElementById("location");
  const userTwitter = document.getElementById("twitter");
  const userWebsite = document.getElementById("website");
  const userCompany = document.getElementById("company");

  userImg.src = user.avatar_url;
  userImgMobile.src = user.avatar_url;

  joinedDate.dateTime = joinedAt;
  joinedDateMobile.dateTime = joinedAt;
  joinedDate.innerText = `Joined ${day} ${monthTxt} ${year}`;
  joinedDateMobile.innerText = `Joined ${day} ${monthTxt} ${year}`;

  if (!user.name || user.name.length < 1) {
    githubUser.innerText = user.login;
  } else {
    githubUser.innerText = user.name;
  }

  userName.innerText = `@${user.login}`;

  if (!user.bio || user.bio.length < 1) {
    userBio.innerText = "This profile has no bio";
  } else {
    userBio.innerText = user.bio;
  }

  userRepos.innerText = user.public_repos;
  userFollowers.innerText = user.followers;
  userFollowing.innerText = user.following;

  if (!user.location || user.location.length < 1) {
    userLocation.classList.add("opacity-50");
    userLocation.querySelector(".user-profile-info").innerText =
      "Not Available";
  } else {
    userLocation.classList.remove("opacity-50");
    userLocation.querySelector(".user-profile-info").innerText = user.location;
  }

  if (!user.twitter_username || user.twitter_username.length < 1) {
    userTwitter.classList.add("opacity-50");
    userTwitter.querySelector(".user-profile-info").innerText = "Not Available";
    userTwitter.querySelector(".user-profile-info").removeAttribute("href");
    userTwitter
      .querySelector(".user-profile-info")
      .setAttribute("style", "text-decoration: none");
  } else {
    userTwitter.classList.remove("opacity-50");
    userTwitter.querySelector(
      ".user-profile-info"
    ).innerText = `@${user.twitter_username}`;
    userTwitter.querySelector(
      ".user-profile-info"
    ).href = `https://twitter.com/${user.twitter_username}`;
  }

  if (!user.blog || user.blog.length < 1) {
    userWebsite.classList.add("opacity-50");
    userWebsite.querySelector(".user-profile-info").innerText = "Not Available";
    userWebsite.querySelector(".user-profile-info").removeAttribute("href");
    userWebsite
      .querySelector(".user-profile-info")
      .setAttribute("style", "text-decoration: none");
  } else {
    userWebsite.classList.remove("opacity-50");

    if (
      user.blog.indexOf("http://") == 0 ||
      user.blog.indexOf("https://") == 0
    ) {
      userWebsite.querySelector(".user-profile-info").innerText =
        user.blog.split("/")[2];
      userWebsite.querySelector(".user-profile-info").href = user.blog;
    } else {
      userWebsite.querySelector(".user-profile-info").innerText = user.blog;
      userWebsite.querySelector(
        ".user-profile-info"
      ).href = `http://${user.blog}`;
    }
  }

  if (!user.company || user.company.length < 1) {
    userCompany.classList.add("opacity-50");
    userCompany.querySelector(".user-profile-info").innerText = "Not Available";
  } else {
    userCompany.classList.remove("opacity-50");
    userCompany.querySelector(".user-profile-info").innerText = user.company;
  }
}

//! change the mode to dark or light when clicking the toggle
function switchTheme() {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
    toggleText.innerText = "LIGHT";
    localStorage.setItem("theme", "dark");
  } else {
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
    toggleText.innerText = "DARK";
    localStorage.setItem("theme", "light");
  }
}

//! change theme
function updateTheme(themeMode) {
  sunIcon.classList.add("hidden");
  moonIcon.classList.add("hidden");

  if (themeMode === "dark") {
    sunIcon.classList.remove("hidden");
    return document.body.classList.add("darkmode");
  } else {
    moonIcon.classList.remove("hidden");
    document.body.classList.remove("darkmode");
  }
}

//! store the theme in local storage
function initialTheme() {
  const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme === "dark") {
    toggleText.innerText = "LIGHT";
    return updateTheme("dark");
  }

  if (storedTheme === "light") {
    toggleText.innerText = "DARK";
    return updateTheme("light");
  }

  if (prefersDarkTheme.matches) {
    toggleText.innerText = "DARK";
    return updateTheme("dark");
  }
}

//! typing animation for the placeholder
let i = 0;
let placeholder = "";
const txt = "Search Github username...";
const speed = 100;

function type() {
  placeholder += txt.charAt(i);
  searchUser.setAttribute("placeholder", placeholder);
  i++;
  setTimeout(type, speed);
}

type();
initialTheme();
