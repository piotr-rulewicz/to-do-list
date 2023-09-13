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
      <button class="doneButton">Zrobione</button>
        <li
          ${task.done ? " class=\"list__content--done\" " : " class=\"list__content\" "}>
          ${task.content}
        </li>
        <button class="removeButton">Usuń</button>               
        `;
    };

    document.querySelector(".js-toDo").innerHTML = htmlString;
  };

  const addNewTask = (newTask) => {
    tasks.push({
      content: newTask,
    });

    render();
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-inputTasks");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const newTask = document.querySelector(".js-writeTask").value.trim();

      if (newTask === "") {
        return;
      }

      addNewTask(newTask);
    });
  };

  init();
}