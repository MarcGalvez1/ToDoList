class ProjectList {
  constructor() {
    this.projectArr = [];
  }
  addProject(project) {
    this.projectArr.push(project);
  }
  displayProjectList() {
    console.log(this.projectArr);
    const projectsContainer = document.getElementById("projects-container");
    projectsContainer.innerHTML = "";
    for (const project of this.projectArr) {
      project.displayProjectTag();
    }
  }
}

class Project {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    // const taskList = [];
  }
  displayProjectTag() {
    const projectTagContainer = document.createElement("div");
    projectTagContainer.classList.add("d-flex", "flex-row");

    // Create the project tag
    const projectTag = document.createElement("h5");
    const projectsContainer = document.getElementById("projects-container");
    projectTag.classList.add(
      "text-light",
      "text-start",
      "ms-5",
      "my-3",
      "custom-link",
      "projects"
    );
    projectTag.innerText = this.name;
    // Event listener to populate the tasks to the correct projects
    projectTag.addEventListener("click", (event) => {
      // const customLinksToggler = document.querySelectorAll(".custom-link");
      // customLinksToggler.forEach((element) => {
      //   element.classList.remove("h1", "active");
      // });
      // event.target.classList.add("h1", "active");
    });

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
      console.log("delete");
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

    projectsContainer.appendChild(projectTagContainer);
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
    // Main Container
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("row");

    // Card Container
    const card = document.createElement("div");
    card.classList.add(
      "card",
      "col-12",
      "col-sm-6",
      "col-md-8",
      "col-lg-5",
      "col-xl-6",
      "col-xxl-3",
      "my-2",
      "ms-3"
    );

    // Card header
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // Card Title
    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = "Example Task";

    // Date
    const cardSubtitle = document.createElement("h6");
    cardSubtitle.classList.add("card-subtitle", "mb-2", "text-muted");
    cardSubtitle.textContent = "Jan xx, 20xx";

    // Description
    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis necessitatibus nisi incidunt error sunt sapiente libero quo expedita at in!";

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
    taskContainer.appendChild(card);

    return taskContainer;
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

export { Project, ProjectList, Task };
