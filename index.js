import {
  darkThemeButton,
  inputField,
  mainApp,
  submitTaskButton,
  taskList,
} from "./scripts/elements";

const addTask = (e) => {
  e.preventDefault();

  const taskValue = inputField.value;

  if (!taskValue) return;

  taskList.innerHTML = `
  <li class="TaskList__taskContent">
    <div class="TaskList__checkbox" tabindex="0" role="button">
        <img
            src="./assets/icon-checkmark.svg"
            alt="check icon"
            class="TaskList__checkboxImg"
        />
    </div>
    <div class="TaskList__valueContent">
    <p class="TaskList__value">
        ${taskValue}
    </p>
    <img
        class="TaskList__deleteIcon"
        src="./assets/icon-basket.svg"
        alt="basket icon"
    />
    </div>
    </li>
  `;
};

darkThemeButton?.addEventListener("click", () => {
  mainApp?.classList.toggle("App--isDark");
});

submitTaskButton.addEventListener("click", (e) => {
  addTask(e);
});
