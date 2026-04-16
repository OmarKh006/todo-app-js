import Sortable from "sortablejs";
import { initDataOnStartup } from "./scripts/initDataOnStartup";
import { taskList } from "./scripts/elements";

initDataOnStartup();

new Sortable(taskList, {
  animation: 150,
});
