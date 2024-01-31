import { Project, ProjectList } from "./controls";

function eventListeners() {
  const projectList = new ProjectList();
  document.addEventListener("DOMContentLoaded", () => {
    //Ensures that the DOM is loaded before activating the event listeners
    const sideMenuSlide = document.getElementById("menu");
    const todosSlide = document.getElementById("todos");
    const iconToggle = document.getElementById("icon");
    const projectForm = document.getElementById("new-project-form");

    iconToggle.addEventListener("click", () => {
      //Allows the menu to slide in and out when the icon is clicked
      sideMenuSlide.classList.toggle("slide-in-out");
      todosSlide.classList.toggle("custom-todos");
    });

    window.addEventListener("resize", function () {
      // Ensures that the menu is in the correct position when the page is resized
      if (window.innerWidth > 768) {
        sideMenuSlide.classList.remove("slide-in-out");
        todosSlide.classList.remove("custom-todos"); // Remove "custom-todos" when menu is visible
      } else {
        sideMenuSlide.classList.add("slide-in-out");
        todosSlide.classList.add("custom-todos"); // Add "custom-todos" when menu is hidden
      }
    });

    window.addEventListener("load", function () {
      // Ensures that the menu is in the correct position when the page is loaded
      if (window.innerWidth > 768) {
        sideMenuSlide.classList.remove("slide-in-out");
      } else {
        sideMenuSlide.classList.add("slide-in-out");
      }
    });

    projectForm.onsubmit = (event) => {
      event.preventDefault();
      const projectName = document.getElementById("project-name");
      const projectDescription = document.getElementById("project-description");
      const currProject = new Project(
        projectName.value,
        projectDescription.value
      );
      projectList.addProject(currProject);
      //currProject.displayProjectTag();
      projectList.displayProjectList();
    };

    // const projectListDOM = document.querySelectorAll("projects");
    // projectListDOM.addEventListener("click", () => {
    //   console.log("Hello");
    // });
  });
}
export default eventListeners;
