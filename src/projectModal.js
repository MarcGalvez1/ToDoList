function projectModal() {
  // Contains the modal
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal", "fade");
  modalContainer.id = "new-project-modal";
  modalContainer.tabIndex = "-1";
  modalContainer.setAttribute("aria-labelledby", "tasks-form");
  modalContainer.setAttribute("aria-hidden", "true");

  // Contains the modal-dialog
  const modalDialog = document.createElement("div");
  modalDialog.classList.add("modal-dialog");

  // Contains all modal content
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  // Contains title and close button
  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");

  // Modal Title
  const modalTitle = document.createElement("h5");
  modalTitle.id = "projects-title";
  modalTitle.classList.add("modal-title");
  modalTitle.innerText = "New Project";

  // Modal Close
  const modalClose = document.createElement("button");
  modalClose.type = "button";
  modalClose.classList.add("btn-close");
  modalClose.setAttribute("data-bs-dismiss", "modal");
  modalClose.setAttribute("aria-label", "Close");

  // Appends the title and close to the header
  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(modalClose);

  // Contains the form
  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");

  // Contains form
  const newProjectForm = document.createElement("form");
  newProjectForm.id = "new-project-form";
  newProjectForm.classList.add("mx-2", "mt-2");

  // Contains the form label for the project name
  const projectNameContainer = document.createElement("div");
  projectNameContainer.classList.add("mb-3");

  // form label for project name
  const projectNameLabel = document.createElement("label");
  projectNameLabel.htmlFor = "project-name";
  projectNameLabel.classList.add("form-label");
  projectNameLabel.innerText = "Project Name:";

  // Form input for project name

  const projectNameInput = document.createElement("input");
  projectNameInput.type = "text";
  projectNameInput.classList.add("form-control");
  projectNameInput.id = "project-name";
  projectNameInput.placeholder = "Example Project";

  projectNameContainer.appendChild(projectNameLabel);
  projectNameContainer.appendChild(projectNameInput);

  // Container for project description
  const projectDescContainer = document.createElement("div");
  projectDescContainer.classList.add("mb-3");

  // form label for project description
  const projectDescLabel = document.createElement("label");
  projectDescLabel.htmlFor = "project-description";
  projectDescLabel.classList.add("form-label");
  projectDescLabel.innerText = "Project Description:";

  // Form input for project Description
  const projectDescriptionInput = document.createElement("textarea");
  projectDescriptionInput.rows = "3";
  projectDescriptionInput.classList.add("form-control");
  projectDescriptionInput.id = "project-description";
  projectDescriptionInput.placeholder = "";
  // Appends children of project description container
  projectDescContainer.appendChild(projectDescLabel);
  projectDescContainer.appendChild(projectDescriptionInput);

  const submitContainer = document.createElement("div");
  submitContainer.classList.add("col-12");

  const submitBtn = document.createElement("button");
  submitBtn.classList.add("btn", "btn-primary");
  submitBtn.type = "submit";
  submitBtn.innerText = "New Project";

  submitContainer.appendChild(submitBtn);

  // Appends the child elements of modal form
  newProjectForm.appendChild(projectNameContainer);
  newProjectForm.appendChild(projectDescContainer);
  newProjectForm.appendChild(submitContainer);

  // Appends form to body
  modalBody.appendChild(newProjectForm);

  // Appends all child elements to modalContent
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);

  // Appends all the nescessary dialog childs
  modalDialog.appendChild(modalContent);

  modalContainer.appendChild(modalDialog);

  return modalContainer;
}
export default projectModal;
