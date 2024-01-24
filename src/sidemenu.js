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

  return menuContainer;
}

export default sideMenu;
