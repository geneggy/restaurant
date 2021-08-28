const header = (listItems) => {
  const bodyEl = document.querySelector("body");
  const headerEl = document.createElement("header");
  const headerListEl = document.createElement("ul");
  headerEl.classList.add("header");
  headerListEl.classList.add("header-list");

  listItems.forEach((item) => {
    const listItemEl = document.createElement("li");
    listItemEl.textContent = item;
    listItemEl.classList.add("header-list-item");
    listItemEl.classList.add(`list-item-${item}`);
    listItemEl.addEventListener("click", () => {
      console.log(`${item} clicked`);
    });
    headerListEl.appendChild(listItemEl);
  });

  headerEl.appendChild(headerListEl);
  bodyEl.insertBefore(headerEl, bodyEl.firstChild);
};

export default header;
