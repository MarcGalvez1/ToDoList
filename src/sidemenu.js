function sideMenu() {
  const menuContainer = document.createElement("div");
  menuContainer.id = "menu";
  menuContainer.classList.add(
    "bg-dark",
    "col-12",
    "col-sm-12",
    "col-md-5",
    "col-lg-4",
    "col-xxl-2",
    "slide-animation"
  );

  // Menu list
  // Home
  const home = document.createElement("h1");
  home.classList.add(
    "text-light",
    "text-start",
    "ms-5",
    "my-3",
    "custom-link",
    "active"
  );
  home.textContent = "Home";
  // Today
  const today = document.createElement("h5");
  today.classList.add(
    "text-light",
    "text-start",
    "ms-5",
    "my-3",
    "custom-link"
  );
  today.textContent = "Today";
  // Week

  const week = document.createElement("h5");
  week.classList.add("text-light", "text-start", "ms-5", "my-3", "custom-link");
  week.textContent = "This Week";
  // Horizontal Rule
  const horizontalRule = document.createElement("hr");
  horizontalRule.classList.add("text-light");
  // Button Container
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add(
    "d-grid",
    "gap-2",
    "col-6",
    "mx-auto",
    "custom-button"
  );
  // Button
  const button = document.createElement("button");
  button.id = " new-project";
  button.classList.add("btn", "btn-primary", "text-start", "ms-5", "ps-4");
  button.type = "button";
  button.setAttribute("data-bs-toggle", "modal");
  button.setAttribute("data-bs-target", "#new-project-modal");
  // Button Text
  const btnText = document.createElement("h2");
  btnText.textContent = "New Project";
  button.appendChild(btnText);

  buttonContainer.append(button);

  const projectsContainer = document.createElement("projects-container");

  menuContainer.appendChild(home);
  menuContainer.appendChild(today);
  menuContainer.appendChild(week);
  menuContainer.appendChild(horizontalRule);
  menuContainer.appendChild(buttonContainer);
  menuContainer.appendChild(projectsContainer);

  return menuContainer;
}

export default sideMenu;
