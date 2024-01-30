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
  }
  displayProjectTag() {
    const sideMenu = document.getElementById("menu");

    const projectTag = document.createElement("h5");
    projectTag.classList.add(
      "text-light",
      "text-start",
      "ms-5",
      "my-3",
      "custom-link",
      "projects"
    );
    projectTag.innerText = project.getName();
    sideMenu.appendChild(projectTag);
  }
}

class Project {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    // const taskList = [];
  }
  getName() {
    return this.name;
  }
}

export { Project, ProjectList };
