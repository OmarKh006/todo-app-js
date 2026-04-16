import { taskList, taskValue } from "./elements";
import { saveToDB } from "./saveToDB";

export const reOrder = () => {
  const tasks = [...taskList.children].map((li, index) => ({
    value: taskValue()[index].textContent.trim(),
    isComplete: li.classList.contains("TaskList__taskContent--isActive"),
  }));

  saveToDB("tasks", tasks);
};
