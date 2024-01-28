function taskModal() {
  // Contains the modal
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal", "fade");
  modalContainer.id = "new-task-modal";
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
  modalTitle.id = "tasks-form";
  modalTitle.classList.add("modal-title");
  modalTitle.innerText = "New Task";

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

  // Contains the form label for the task name
  const taskNameContainer = document.createElement("div");
  taskNameContainer.classList.add("mb-3");

  // form label for task name
  const taskNameLabel = document.createElement("label");
  taskNameLabel.htmlFor = "task-name";
  taskNameLabel.classList.add("form-label");
  taskNameLabel.innerText = "Task Name:";

  // Form input for task name
  const taskNameInput = document.createElement("input");
  taskNameInput.type = "text";
  taskNameInput.classList.add("form-control");
  taskNameInput.id = "task-name";
  taskNameInput.placeholder = "Example Task";

  taskNameContainer.appendChild(taskNameLabel);
  taskNameContainer.appendChild(taskNameInput);

  // Container for task description
  const taskDescContainer = document.createElement("div");
  taskDescContainer.classList.add("mb-3");

  // form label for task description
  const taskDescLabel = document.createElement("label");
  taskDescLabel.htmlFor = "task-description";
  taskDescLabel.classList.add("form-label");
  taskDescLabel.innerText = "Description:";

  // Form input for task description
  const taskDescriptionInput = document.createElement("textarea");
  taskDescriptionInput.rows = "3";
  taskDescriptionInput.classList.add("form-control");
  taskDescriptionInput.id = "task-description";
  taskDescriptionInput.placeholder = "";

  // Appends children of task description container
  taskDescContainer.appendChild(taskDescLabel);
  taskDescContainer.appendChild(taskDescriptionInput);

  const dueDateContainer = document.createElement("div");
  dueDateContainer.classList.add("mb-3");

  const dueDateLabel = document.createElement("label");
  dueDateLabel.htmlFor = "due-date";
  dueDateLabel.classList.add("form-label");
  dueDateLabel.innerText = "Due Date:";

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.classList.add("form-control");
  dueDateInput.id = "due-date";
  dueDateInput.name = "due-date";

  dueDateContainer.appendChild(dueDateLabel);
  dueDateContainer.appendChild(dueDateInput);

  const submitContainer = document.createElement("div");
  submitContainer.classList.add("col-12");

  const submitBtn = document.createElement("button");
  submitBtn.classList.add("btn", "btn-primary");
  submitBtn.type = "submit";
  submitBtn.innerText = "Submit";

  submitContainer.appendChild(submitBtn);

  // Appends the child elements of modal body
  modalBody.appendChild(taskNameContainer);
  modalBody.appendChild(taskDescContainer);
  modalBody.appendChild(dueDateContainer);
  modalBody.appendChild(submitContainer);

  // Appends all child elements to modalContent
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);

  // Appends all the necessary dialog children
  modalDialog.appendChild(modalContent);

  modalContainer.appendChild(modalDialog);

  return modalContainer;
}

export default taskModal;
