import { initTaskListeners } from "./eventListeners";
import { renderEmptyState } from "./renderEmptyState";
import { renderTaskList } from "./renderTaskList";

export const initTaskList = (tasks) => {
  if (!tasks?.length) {
    renderEmptyState();
    return;
  }
  renderTaskList(tasks);
  initTaskListeners();
};
