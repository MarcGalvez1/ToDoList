const sideMenu = document.getElementById("menu");
const todos = document.getElementById("todos");
// function toggleMenu() {
//   sideMenu.classList.toggle("slide-in-out");
//   todos.classList.toggle("custom-todos");
// }

function sideMenuHandler() {
  sideMenu.addEventListener("click", () => {
    console.log("Hello");
  });
}
// Ensure the menu is initially displayed for screens greater than 768px
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    sideMenu.classList.remove("slide-in-out");
    todos.classList.remove("custom-todos"); // Remove "custom-todos" when menu is visible
  } else {
    sideMenu.classList.add("slide-in-out");
    todos.classList.add("custom-todos"); // Add "custom-todos" when menu is hidden
  }
});

function loadHandler() {
  // Trigger the initial check on page load
  window.addEventListener("load", function () {
    if (window.innerWidth > 768) {
      sideMenu.classList.remove("slide-in-out");
    } else {
      sideMenu.classList.add("slide-in-out");
    }
  });
}
export default { sideMenuHandler, loadHandler };
