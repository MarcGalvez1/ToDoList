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
  // Week
  today.textContent = "Today";
  const week = document.createElement("h5");
  week.classList.add("text-light", "text-start", "ms-5", "my-3", "custom-link");
  week.textContent = "This Week";

  menuContainer.appendChild(home);
  menuContainer.appendChild(today);
  menuContainer.appendChild(week);

  return menuContainer;
}

export default sideMenu;
