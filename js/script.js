{
  const tasks = [
  ];

  const addNewTask = (newTask) => {
    tasks.push({
      content: newTask,
    });
    render();
  };

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  }

  const toggleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  }

  const bindEvents = () => {
    const removeButtons = document.querySelectorAll(".js-removeButton");

    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });

    const toggleDoneButtons = document.querySelectorAll(".js-doneButton");

    toggleDoneButtons.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
      });
    });
  }

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      const listButtonChecked = task.done ? "list__doneButton--checked" : "list__doneButton";
      htmlString += `
        <li
          ${task.done ? " class=\"list__content--done\" " : " class=\"list__content\" "}>
          <button class="${listButtonChecked} js-doneButton"><i class="fa-solid fa-check"></i></button>
          ${task.content}
          <button class="list__removeButton js-removeButton"><i class="fa-regular fa-trash-can"></i></button>          
        </li>                       
        `;
    };

    document.querySelector(".js-toDo").innerHTML = htmlString;

    bindEvents();

  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTask = document.querySelector(".js-writeTask").value.trim();

    if (newTask === "") {
      return;
    }

    addNewTask(newTask);
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-inputTasks");

    form.addEventListener("submit", onFormSubmit);
  };

  init();
}