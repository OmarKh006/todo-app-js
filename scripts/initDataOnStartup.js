import { initTaskListeners } from "./eventListeners";
import { fetchData } from "./fetchData";
import { renderTaskList } from "./renderTaskList";
import { toggleDarkMode } from "./toggleDarkMode";

export const initDataOnStartup = () => {
  fetchData("isDark") && toggleDarkMode();
  renderTaskList(fetchData("tasks"));
  initTaskListeners();
};
