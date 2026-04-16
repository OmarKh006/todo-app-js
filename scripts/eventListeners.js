import { addTask } from "./addTask";
import { deleteTask } from "./deleteTask";
import {
  darkThemeButton,
  getCheckBoxes,
  getDeleteButtons,
  submitTaskButton,
  taskList,
  taskListLink,
} from "./elements";
import { toggleDarkMode } from "./toggleDarkMode";
import { toggleTask } from "./toggleTask";

darkThemeButton?.addEventListener("click", () => {
  toggleDarkMode();
});

submitTaskButton?.addEventListener("click", (e) => {
  addTask(e);
});

taskListLink?.addEventListener("click", () => {
  taskList?.classList.toggle("TaskList__list--hideCompleted");
  taskListLink?.classList.toggle("TaskList__link--isActive");
});

export const initTaskListeners = () => {
  getDeleteButtons().forEach((button, index) => {
    button.addEventListener("click", (e) => {
      deleteTask(e, index);
    });
  });

  getCheckBoxes().forEach((box, index) => {
    box.addEventListener("click", (e) => {
      toggleTask(e, index);
    });
    box.addEventListener("keydown", (e) => {
      e.key === "Enter" && toggleTask(e, index);
    });
  });
};
