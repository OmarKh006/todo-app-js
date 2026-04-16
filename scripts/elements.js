export const darkThemeButton = document.querySelector(".DarkThemeToggle");
export const mainApp = document.querySelector(".App");
export const inputField = document.querySelector(".TaskSearchBar__input");
export const taskList = document.querySelector(".TaskList__list");
export const taskListLink = document.querySelector(".TaskList__link");
export const submitTaskButton = document.querySelector(
  ".TaskSearchBar__button",
);

export const getDeleteButtons = () =>
  document.querySelectorAll(".TaskList__deleteIcon");

export const getCheckBoxes = () =>
  document.querySelectorAll(".TaskList__checkbox");
