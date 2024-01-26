function projectModal() {
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal", "fade");
  modalContainer.id = "new-project-modal";
  modalContainer.tabIndex = "-1";
  modalContainer.setAttribute("aria-labelledby", "tasks-form");
  modalContainer.setAttribute("aria-hidden", "true");

  const modalDialog = document.createElement("div");
  modalDialog.classList.add("modal-dialog");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");

  const modalTitle = document.createElement("h5");
  modalTitle.id = "tasks-form";
  modalTitle.classList.add("modal-title");
  modalTitle.innerText = "New Project";

  modalHeader.appendChild(modalTitle);

  modalDialog.appendChild(modalContent);
  modalDialog.appendChild(modalHeader);

  modalContainer.appendChild(modalDialog);

  return modalContainer;
}
export default projectModal;
