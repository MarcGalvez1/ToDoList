function todos() {
  const headerContainer = document.createElement("div");
  const titleContainer = document.createElement("h1");

  titleContainer.classList.add(
    "text-dark",
    "text-start",
    "ms-5",
    "my-3",
    "display-2"
  );
  titleContainer.textContent = "To-do's:";

  // Create the <div> element with the specified classes
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("d-grid", "mx-auto", "custom-button");

  // Create the <button> element with the specified classes and attributes
  const createTodosBtn = document.createElement("button");
  createTodosBtn.classList.add("btn", "btn-dark");
  createTodosBtn.id = "new-task";
  createTodosBtn.type = "button";
  createTodosBtn.setAttribute("data-bs-toggle", "modal");
  createTodosBtn.setAttribute("data-bs-target", "#new-task-modal");

  // Create the <h2> element with the specified class and text content
  const btnText = document.createElement("h2");
  btnText.classList.add("text-center");
  btnText.textContent = "New Task";

  // Append the <h2> element to the <button> element
  createTodosBtn.appendChild(btnText);

  // Append the <button> element to the <div> element
  buttonContainer.appendChild(createTodosBtn);

  headerContainer.appendChild(titleContainer);
  headerContainer.appendChild(buttonContainer);

  return headerContainer;
}
export default todos;
