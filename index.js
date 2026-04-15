import { darkThemeButton, mainApp } from "./scripts/elements";

darkThemeButton?.addEventListener("click", () => {
  mainApp?.classList.toggle("App--isDark");
});
