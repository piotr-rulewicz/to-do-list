{
  const tasks = [
    {
      content: "Nagrać lekcję",
      done: false,
    },
    {
      content: "Zjeść pierogi",
      done: true,
    },
  ];

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
        <li
          ${task.done ? " class=\"list__content--done\" " : " class=\"list__content\" "}>
          <button class="list__removeButton js-removeButton">Usuń</button>
          ${task.content}
        </li>                       
        `;
    };

    document.querySelector(".js-toDo").innerHTML = htmlString;

    const removeButtons = document.querySelectorAll(".js-removeButton");

    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        tasks.splice(index, 1);
        render();
      });
    });
  };

  const addNewTask = (newTask) => {
    tasks.push({
      content: newTask,
    });

    render();
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