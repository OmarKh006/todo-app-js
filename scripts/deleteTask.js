import { fetchData } from "./fetchData";
import { initTaskList } from "./initTaskList";
import { saveToDB } from "./saveToDB";

export const deleteTask = (e, index) => {
  if (!confirm("Are you sure ??")) return;

  const tasks = fetchData("tasks");

  tasks.splice(index, 1);

  saveToDB("tasks", tasks);

  initTaskList(tasks);
};
