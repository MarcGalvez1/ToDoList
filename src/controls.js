import { projectList } from "./sidemenu";
class ProjectList {
  constructor() {
    this.projectArr = new Map();
    this.activeProject = "Home";
  }
  addProject(project) {
    if (!this.projectArr.has(project.getName())) {
      this.projectArr.set(project.getName(), project);
      project.setRepeat(false);
    } else {
      console.log("Can not add existing project");
      project.setRepeat(true);
    }
  }
  removeProject(projectName) {
    if (this.projectArr.has(projectName)) {
      this.projectArr.delete(projectName);
      console.log(this.projectArr);
    }
  }
  displayProjectList() {
    console.log(this.projectArr);
  }
  setActiveProject(projectKey) {
    this.activeProject = projectKey;
  }
  getActiveProject() {
    return this.projectArr.get(this.activeProject);
  }
}

class Project {
  constructor(name, isDefault) {
    this.name = name;
    this.default = isDefault;
    this.isRepeat = false;
    this.taskList = new Map();
  }
  displayDefaultTag() {
    const tag = document.createElement("h5");
    tag.classList.add(
      "text-light",
      "text-start",
      "ms-5",
      "my-3",
      "custom-link"
    );
    if (this.name === "Home") {
      tag.classList.add("h1");
      tag.classList.add("active");
    }
    tag.innerText = this.name;

    return tag;
  }
  displayProjectTag() {
    // Contains the project tag and delete button
    const projectTagContainer = document.createElement("div");
    projectTagContainer.classList.add("d-flex", "flex-row");

    // Create the project tag
    const projectTag = this.displayDefaultTag();
    projectTag.classList.add("projects");
    // Create the delete icon
    const deleteIconContainer = document.createElement("h5");
    deleteIconContainer.classList.add(
      "text-light",
      "text-start",
      "ms-5",
      "my-3",
      "custom-link",
      "h5"
    );
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash", "del-icon");
    deleteIcon.addEventListener("click", () => {
      // Remove Dome Element For the deleted project
      const parentContainer = document.getElementById("projects-container");
      parentContainer.removeChild(projectTagContainer);
      if (this.name === projectList.getActiveProject()) {
        // Ensure that the active element is valid and set to the default location "Home"
        projectList.setActiveProject("Home");
      }
      // Remove project frome projectList
      projectList.removeProject(this.name);
    });

    // event listeners to show hide the delete icon
    // Function to show delete icon
    function showDeleteIcon() {
      deleteIcon.style.display = "inline-block";
    }

    // Function to hide delete icon
    function hideDeleteIcon() {
      deleteIcon.style.display = "none";
    }

    // Event listeners to show and hide delete icon on hover
    projectTagContainer.addEventListener("mouseenter", showDeleteIcon);
    projectTagContainer.addEventListener("mouseleave", hideDeleteIcon);

    deleteIconContainer.appendChild(deleteIcon);
    projectTagContainer.appendChild(projectTag);
    projectTagContainer.appendChild(deleteIconContainer);

    return projectTagContainer;
  }

  displayTag() {
    let tag;
    // let tagContainer;
    if (this.default === true) {
      tag = this.displayDefaultTag();
      // tagContainer = document.getElementById("defaults-container");
    } else {
      tag = this.displayProjectTag();
      // tagContainer = document.getElementById("projects-container");
    }
    // tagContainer.appendChild(tag);
    return tag;
  }

  addTask(task) {
    if (!this.taskList.has(task.getName())) {
      this.taskList.set(task.getName(), task);
      console.log(this.taskList);
    } else {
      console.log("Tasks can not have the same name in the same project");
    }
  }

  setRepeat(isRepeat) {
    this.isRepeat = isRepeat;
  }
  getRepeat() {
    return this.isRepeat;
  }

  getDefault() {
    return this.default;
  }

  getName() {
    return this.name;
  }
}

class Task {
  constructor(taskName, taskDescription, taskDueDate) {
    this.taskName = taskName;
    this.taskDescription = taskDescription;
    this.taskDueDate = taskDueDate;
  }
  createTask() {
    // Card Container
    const card = document.createElement("div");
    card.classList.add(
      "card",
      "col-12",
      "col-md-12",
      "col-lg-12",
      "col-xl-12",
      "col-xxl-6",
      "my-2",
      "mx-2",
      "p-2"
    );

    // Card header
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // Card Title
    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = this.taskName;

    // Date
    const cardSubtitle = document.createElement("h6");
    cardSubtitle.classList.add("card-subtitle", "mb-2", "text-muted");
    cardSubtitle.textContent = this.taskDueDate;

    // Description
    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = this.taskDescription;

    const container = document.createElement("div");
    container.classList.add("container");

    // button row
    const row = document.createElement("div");
    row.classList.add("row");

    const completeBtn = createButton(
      "Complete",
      "btn-success",
      "complete-task"
    );
    const editBtn = createButton(
      "Edit",
      "btn-warning",
      "edit-task",
      "text-light"
    );
    const deleteBtn = createButton("Delete", "btn-danger", "delete-task");

    row.appendChild(completeBtn);
    row.appendChild(editBtn);
    row.appendChild(deleteBtn);

    container.appendChild(row);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardSubtitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(container);

    card.appendChild(cardBody);

    return card;
  }

  getName() {
    return this.taskName;
  }
}

function createButton(text, btnClass, btnId, textClass) {
  const button = document.createElement("button");
  button.classList.add("btn", btnClass, "mx-2", "my-1", "col");
  button.id = btnId;
  button.type = "button";

  const buttonText = document.createElement("h2");
  buttonText.classList.add("text-center", textClass);
  buttonText.textContent = text;

  button.appendChild(buttonText);

  return button;
}

export { Project, Task, ProjectList };
