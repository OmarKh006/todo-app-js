import {
  darkThemeButton,
  getDeleteButtons,
  inputField,
  mainApp,
  submitTaskButton,
  taskList,
} from "./scripts/elements";

const saveToDB = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const fetchData = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : false;
};

const initTaskListiners = () => {
  getDeleteButtons().forEach((button, index) => {
    button.addEventListener("click", (e, index) => {
      deleteTask(index);
    });
  });
};

const renderTaskList = (tasks) => {
  let newTaskList = ``;

  tasks.forEach((task) => {
    newTaskList += `
    <li class="TaskList__taskContent ${
      task.isComplete ? "TaskList__taskContent--isActive" : ""
    }">
        <div class="TaskList__checkbox" tabindex="0" role="button">
            <img
                src="./assets/icon-checkmark.svg"
                alt="check icon"
                class="TaskList__checkboxImg"
            />
        </div>
        <div class="TaskList__valueContent">
        <p class="TaskList__value">
            ${task.value}
        </p>
        <img
            class="TaskList__deleteIcon"
            src="./assets/icon-basket.svg"
            alt="basket icon"
        />
        </div>
    </li>
  `;
  });

  taskList.innerHTML = newTaskList;
  inputField.value = "";
};

const addTask = (e) => {
  e.preventDefault();

  const taskValue = inputField.value;

  if (!taskValue) return;

  const task = {
    value: taskValue,
    isComplete: false,
  };

  const tasks = fetchData("tasks") || [];

  tasks.push(task);

  saveToDB("tasks", tasks);

  renderTaskList(tasks);

  initTaskListiners();
};

const deleteTask = (e, index) => {
  if (!confirm("Are you sure ??")) return;

  const tasks = fetchData("tasks");

  tasks.splice(index, 1);

  saveToDB("tasks", tasks);

  renderTaskList(tasks);
};

darkThemeButton?.addEventListener("click", () => {
  mainApp?.classList.toggle("App--isDark");
});

submitTaskButton.addEventListener("click", (e) => {
  addTask(e);
});
