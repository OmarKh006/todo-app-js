import { mainApp } from "./elements";
import { saveToDB } from "./saveToDB";

export const toggleDarkMode = () => {
  mainApp?.classList.toggle("App--isDark");
  saveToDB("isDark", mainApp?.classList.contains("App--isDark"));
};
