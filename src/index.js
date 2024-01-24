import _ from "lodash";
import navBar from "./nav";
import sideMenu from "./sidemenu";

const content = document.getElementById("content");

content.appendChild(navBar());

// Create the main content container
const mainContent = document.createElement("div");
mainContent.id = "main-content";
mainContent.classList.add("row");
mainContent.appendChild(sideMenu());

content.appendChild(mainContent);
