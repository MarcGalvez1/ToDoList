import toggleMenu from "./eventListeners";
function navBar() {
  // Outer most nav container
  const navContainer = document.createElement("nav");
  navContainer.classList.add(
    "navbar",
    "navbar-light",
    "bg-light",
    "row",
    "bg-dark"
  );

  // Contains all inner elements
  const navContent = document.createElement("div");
  navContent.classList.add("container-fluid");

  // Icon container
  const iconContainer = document.createElement("icon");
  iconContainer.classList.add("icon");
  iconContainer.addEventListener("click", toggleMenu);

  // Creates the 3 icon bars
  for (let i = 1; i <= 3; i++) {
    const IconBar = document.createElement("div");
    IconBar.classList.add("bar" + i);
    iconContainer.appendChild(IconBar);
  }

  // Logo
  const logo = document.createElement("img");
  logo.classList.add("d-inline-block", "align-text-top", "custom-logo");
  logo.src = "./images/logo.png";

  // Title
  const title = document.createElement("h1");
  title.classList.add(
    "display-1",
    "mx-auto",
    "dblock",
    "text-center",
    "text-light"
  );
  title.innerText = "To-Do List";

  navContent.appendChild(iconContainer);
  navContent.appendChild(logo);
  navContent.appendChild(title);

  navContainer.appendChild(navContent);

  return navContainer;
}

export default navBar;
