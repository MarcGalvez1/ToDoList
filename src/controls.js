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
  //   displayProjects() {
  //     for (const project in this.projectArr) {
  //     }
  //   }
}

class Project {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    // const taskList = [];
  }
}

export { Project, ProjectList };
