import {
  darkThemeButton,
  getCheckBoxes,
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

const initTaskListeners = () => {
  getDeleteButtons().forEach((button, index) => {
    button.addEventListener("click", (e) => {
      deleteTask(e, index);
    });
  });

  getCheckBoxes().forEach((box, index) => {
    box.addEventListener("click", (e) => {
      toggleTask(e, index);
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

  initTaskList(tasks);
};

const deleteTask = (e, index) => {
  if (!confirm("Are you sure ??")) return;

  const tasks = fetchData("tasks");

  tasks.splice(index, 1);

  saveToDB("tasks", tasks);

  initTaskList(tasks);
};

const toggleDarkMode = () => {
  mainApp?.classList.toggle("App--isDark");
  saveToDB("isDark", mainApp?.classList.contains("App--isDark"));
};

const initDataOnStartup = () => {
  fetchData("isDark") && toggleDarkMode();
  renderTaskList(fetchData("tasks"));
  initTaskListeners();
};

const initTaskList = (tasks) => {
  if (!tasks?.length) {
    renderEmptyState();
    return;
  }
  renderTaskList(tasks);
  initTaskListeners();
};

const renderEmptyState = () => {
  taskList.innerHTML = `
            <li class="EmptyList">
              <img
                src="./assets/icon-empty.svg"
                alt="empty list"
                class="EmptyList__img"
              />
              <p>Tasks List is empty</p>
            </li>
            `;
};

const toggleTask = (e, index) => {
  const tasks = fetchData("tasks");
  tasks[index].isComplete = !tasks[index].isComplete;
  saveToDB("tasks", tasks);
  e.currentTarget.parentElement.classList.toggle(
    "TaskList__taskContent--isActive",
  );
};

darkThemeButton?.addEventListener("click", () => {
  toggleDarkMode();
});

submitTaskButton.addEventListener("click", (e) => {
  addTask(e);
});

initDataOnStartup();
