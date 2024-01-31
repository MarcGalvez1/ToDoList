import { forEach } from "lodash";

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
    projectTag.addEventListener("click", () => {
      window.alert("hello");
    });
    projectTag.innerText = this.name;
    projectsContainer.appendChild(projectTag);
  }
  getName() {
    return this.name;
  }
}

export { Project, ProjectList };
