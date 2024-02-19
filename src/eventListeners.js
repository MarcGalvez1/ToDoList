import { Project, Task } from "./controls";
import { projectList } from "./sidemenu";
import { allTasksList } from "./controls";
import saveToLocalStorage from "./localStorageMGT";
function eventListeners() {
  document.addEventListener("DOMContentLoaded", () => {
    //Ensures that the DOM is loaded before activating the event listeners
    const sideMenuSlide = document.getElementById("menu");
    const todosSlide = document.getElementById("todos");
    const iconToggle = document.getElementById("icon");
    const projectForm = document.getElementById("new-project-form");

    // Creates the initial project list for the tasks form
    const projectListInput = document.getElementById("project-choice");
    projectList.getProjectArr().forEach((value, key) => {
      const option = document.createElement("option");
      if (key !== "Today" && key !== "This Week") {
        option.value = key;
        option.text = key;
        projectListInput.appendChild(option);
      }
    });

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

        // Add the current project to the project list selection in the task form
        const option = document.createElement("option");
        option.value = currProject.getName();
        option.text = currProject.getName();
        projectListInput.appendChild(option);
      }

      saveToLocalStorage("projectList", projectList.serialize());
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

        // display the tasks assosciated with the correct projects
        const currProject = projectList.getActiveProject();
        console.log(currProject.getTask());
        currProject.displayAllTasks();
      }
    });

    const taskFormSubmit = document.getElementById("new-task-form");
    taskFormSubmit.onsubmit = (event) => {
      event.preventDefault();

      const taskName = document.getElementById("task-name").value;
      const taskDescription = document.getElementById("task-description").value;
      const taskDue = document.getElementById("due-date").value;
      const projectListVal = document.getElementById("project-choice").value;
      const currTask = new Task(
        taskName,
        taskDescription,
        taskDue,
        projectListVal
      );
      const taskContainer = document.getElementById("task-list-container");
      const currProject = projectList.searchProject(projectListVal);
      currProject.addTask(currTask);
      saveToLocalStorage("projectList", projectList.serialize());

      if (!currTask.getIsRepeat()) {
        switch (projectList.getActiveProject().getName()) {
          case "Home":
            taskContainer.innerHTML = "";
            console.log(allTasksList.getAllTaskList());
            for (const task of allTasksList.getAllTaskList()) {
              taskContainer.appendChild(task.createTask());
            }
            break;
          case "Today":
            taskContainer.innerHTML = "";
            for (const task of allTasksList.makeToday()) {
              taskContainer.appendChild(task.createTask());
            }
            break;
          case "This Week":
            taskContainer.innerHTML = "";
            for (const task of allTasksList.makeThisWeek()) {
              taskContainer.appendChild(task.createTask());
            }
            break;
          case currProject.getName():
            taskContainer.appendChild(currTask.createTask());
            break;
          default:
            // Does nothing because it should not display if the selected project isnt the active project
            break;
        }
      }

      document.getElementById("task-name").value = "";
      document.getElementById("task-description").value = "";
      document.getElementById("due-date").value = "";
      document.getElementById("project-choice").value = "Home";
    };

    const taskModal = document.getElementById("new-task-modal");
    taskModal.addEventListener("hidden.bs.modal", () => {
      // Clear task form on close of modal
      document.getElementById("task-name").value = "";
      document.getElementById("task-description").value = "";
      document.getElementById("due-date").value = "";
      document.getElementById("project-choice").value = "Home";
    });
  });
}
export default eventListeners;
