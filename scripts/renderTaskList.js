import { inputField, taskList } from "./elements";

export const renderTaskList = (tasks) => {
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
