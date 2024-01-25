import _ from "lodash";
import navBar from "./nav";
import sideMenu from "./sidemenu";

const content = document.getElementById("content");

content.appendChild(navBar());

// Create the main content container
const mainContent = document.createElement("div");
mainContent.id = "main-content";
mainContent.classList.add("row");
mainContent.appendChild(sideMenu());

content.appendChild(mainContent);

const sideMenuSlide = document.getElementById("menu");
const todosSlide = document.getElementById("todos");
const iconToggle = document.getElementById("icon");
iconToggle.addEventListener("click", () => {
  sideMenuSlide.classList.toggle("slide-in-out");
  todosSlide.classList.toggle("custom-todos");
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    sideMenuSlide.classList.remove("slide-in-out");
    todosSlide.classList.remove("custom-todos"); // Remove "custom-todos" when menu is visible
  } else {
    sideMenuSlide.classList.add("slide-in-out");
    todosSlide.classList.add("custom-todos"); // Add "custom-todos" when menu is hidden
  }
});

window.addEventListener("load", function () {
  if (window.innerWidth > 768) {
    sideMenuSlide.classList.remove("slide-in-out");
  } else {
    sideMenuSlide.classList.add("slide-in-out");
  }
});
