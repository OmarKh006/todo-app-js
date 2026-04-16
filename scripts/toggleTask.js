import { fetchData } from "./fetchData";
import { saveToDB } from "./saveToDB";

export const toggleTask = (e, index) => {
  const tasks = fetchData("tasks");
  tasks[index].isComplete = !tasks[index].isComplete;
  saveToDB("tasks", tasks);
  e.currentTarget.parentElement.classList.toggle(
    "TaskList__taskContent--isActive",
  );
};
