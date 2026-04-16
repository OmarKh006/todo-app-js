import Sortable from "sortablejs";
import { initTaskListeners } from "./eventListeners";
import { fetchData } from "./fetchData";
import { renderEmptyState } from "./renderEmptyState";
import { renderTaskList } from "./renderTaskList";
import { toggleDarkMode } from "./toggleDarkMode";
import { taskList } from "./elements";
import { reOrder } from "./reOrder";

export const initDataOnStartup = () => {
  fetchData("isDark") && toggleDarkMode();

  const tasks = fetchData("tasks");
  if (!tasks) {
    renderEmptyState();
  } else {
    renderTaskList(tasks);
  }

  initTaskListeners();
};

export const orderList = () => {
  new Sortable(taskList, {
    animation: 150,

    onEnd() {
      reOrder();
    },
  });
};
