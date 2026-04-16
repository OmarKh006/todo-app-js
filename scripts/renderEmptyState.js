import { taskList } from "./elements";

export const renderEmptyState = () => {
  taskList.innerHTML = `
            <li class="EmptyList">
              <img
                src="./assets/icon-empty.svg"
                alt="empty list"
                class="EmptyList__img"
              />
              <p>Tasks List is empty</p>
            </li>
            `;
};
