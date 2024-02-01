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
    projectTag.addEventListener("click", (event) => {
      const customLinksToggler = document.querySelectorAll(".custom-link");
      customLinksToggler.forEach((element) => {
        element.classList.remove("h1", "active");
      });
      event.target.classList.add("h1", "active");
    });

    // Create the delete icon
    const deleteIconContainer = document.createElement("h5");
    deleteIconContainer.classList.add(
      "text-light",
      "text-start",
      "ms-5",
      "my-3",
      "custom-link",
      "del-icon"
    );
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash");
    deleteIcon.addEventListener("click", () => {
      console.log("delete");
    });

    deleteIconContainer.appendChild(deleteIcon);

    projectTagContainer.appendChild(projectTag);
    projectTagContainer.appendChild(deleteIconContainer);

    projectsContainer.appendChild(projectTagContainer);
  }
  getName() {
    return this.name;
  }
}

export { Project, ProjectList };
