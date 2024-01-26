import _ from "lodash";
import projectModal from "./projectModal";
import navBar from "./nav";
import sideMenu from "./sidemenu";
import todos from "./todos";
import eventListeners from "./eventListeners";

const content = document.getElementById("content");
content.appendChild(projectModal());
content.appendChild(navBar());

// Create the main content container
const mainContent = document.createElement("div");
mainContent.id = "main-content";
mainContent.classList.add("row");

// Create the todos side of the content
const todosContainer = document.createElement("div");
todosContainer.id = "todos";
todosContainer.classList.add(
  "col-12",
  "col-sm-12",
  "col-md-7",
  "col-lg-8",
  "col-xxl-10",
  "bg-info",
  "slide-animation"
);
todosContainer.appendChild(todos());

mainContent.appendChild(sideMenu());
mainContent.appendChild(todosContainer);

content.appendChild(mainContent);

eventListeners();
