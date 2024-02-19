import { Project, ProjectList } from "./controls";
import { saveToLocalStorage, loadFromLocalStorage } from "./localStorageMGT";
const storedProjectList = loadFromLocalStorage("projectList");
const projectList = storedProjectList
  ? ProjectList.deserialize(storedProjectList)
  : new ProjectList();
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

  // Container for default projects

  const defaultsContainer = document.createElement("div");
  defaultsContainer.id = "defaults-container";

  // Menu list
  // Home
  const homeDefault = new Project("Home", true);
  projectList.addProject(homeDefault);
  defaultsContainer.appendChild(homeDefault.displayTag());
  saveToLocalStorage("projectList", projectList.serialize());
  // Today
  const todayDefault = new Project("Today", true);
  projectList.addProject(todayDefault);
  defaultsContainer.appendChild(todayDefault.displayTag());
  saveToLocalStorage("projectList", projectList.serialize());
  // Week
  const weekDefault = new Project("This Week", true);
  projectList.addProject(weekDefault);
  defaultsContainer.appendChild(weekDefault.displayTag());
  saveToLocalStorage("projectList", projectList.serialize());
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

  const projectsContainer = document.createElement("div");
  projectsContainer.id = "projects-container";
  projectsContainer.innerText = "Hello";

  menuContainer.appendChild(defaultsContainer);
  menuContainer.appendChild(horizontalRule);
  menuContainer.appendChild(buttonContainer);
  menuContainer.appendChild(projectsContainer);

  return menuContainer;
}

export { projectList };
export default sideMenu;
