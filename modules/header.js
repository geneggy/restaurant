import { changeContent } from "./initialize.js";

const header = (headerItems) => {
  const headerEl = document.createElement("header");
  const headerListEl = document.createElement("ul");
  headerEl.classList.add("header");
  headerListEl.classList.add("header-list");

  headerItems.forEach((item) => {
    const listItemEl = document.createElement("li");
    listItemEl.textContent = `${item.name}`;
    listItemEl.classList.add("header-list-item");
    listItemEl.classList.add(`list-item-${item.name}`);
    listItemEl.addEventListener("click", () => {
      console.log(changeContent);
      console.log(item.func);
      changeContent(item.func);
    });
    headerListEl.appendChild(listItemEl);
  });

  headerEl.appendChild(headerListEl);

  return headerEl;
};

export default header;
