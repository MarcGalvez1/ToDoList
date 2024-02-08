import { Project, Task } from "./controls";
import { projectList } from "./sidemenu";
function eventListeners() {
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
    const projectsContainer = document.getElementById("projects-container");
    projectForm.onsubmit = (event) => {
      event.preventDefault();
      const projectName = document.getElementById("project-name").value;
      const currProject = new Project(projectName, false);

      projectList.addProject(currProject);
      projectList.displayProjectList();
      if (!currProject.getRepeat()) {
        projectsContainer.appendChild(currProject.displayTag());
      }

      document.getElementById("project-name").value = "";
    };

    const menuList = document.getElementById("menu");
    menuList.addEventListener("click", (event) => {
      // Check if the clicked element has the class .custom-link
      if (event.target.classList.contains("custom-link")) {
        // Remove "h1" and "active" classes from all elements with .custom-link
        const customLinksToggler = document.querySelectorAll(".custom-link");
        customLinksToggler.forEach((element) => {
          element.classList.remove("h1", "active");
        });

        // Add "h1" and "active" classes to the clicked element
        event.target.classList.remove("h5");
        event.target.classList.add("h1", "active");

        // edit the size of the delete button
        const closestSibling = event.target.nextElementSibling;
        if (event.target.classList.contains("projects")) {
          closestSibling.classList.remove("h5");
          closestSibling.classList.add("h1");
        }

        // set the active project
        const activeLink = event.target.innerText;
        projectList.setActiveProject(activeLink);
        console.log(projectList.getActiveProject());
      }
    });

    const taskFormSubmit = document.getElementById("new-task-form");
    taskFormSubmit.onsubmit = (event) => {
      event.preventDefault();
      const currProject = projectList.getActiveProject();

      const taskName = document.getElementById("task-name").value;
      const taskDescription = document.getElementById("task-description").value;
      const taskDue = document.getElementById("due-date").value;
      const currTask = new Task(taskName, taskDescription, taskDue);
      currProject.addTask(currTask);

      document.getElementById("task-name").value = "";
      document.getElementById("task-description").value = "";
      document.getElementById("due-date").value = "";
    };
  });
}
export default eventListeners;
