import { inputField } from "./elements";
import { fetchData } from "./fetchData";
import { initTaskList } from "./initTaskList";
import { saveToDB } from "./saveToDB";

export const addTask = (e) => {
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
