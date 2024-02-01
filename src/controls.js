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

export { Project, ProjectList };
