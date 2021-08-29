const menu = () => {
  console.log("menu runs");
  const menuEl = document.createElement("section");
  const titleEl = document.createElement("h1");
  const descriptionEl = document.createElement("div");

  menuEl.classList.add("menu-section");
  titleEl.classList.add("menu-title");
  descriptionEl.classList.add("menu-description");
  titleEl.textContent = "Menu"; // can pass into function as title
  descriptionEl.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur efficitur dolor, vitae porttitor ligula dictum quis. Donec eget dolor ut purus tempus bibendum in consectetur libero. Nullam ac nisi faucibus, condimentum purus in, pellentesque ipsum. Nam et libero elementum, commodo dolor in, cursus elit. Cras interdum semper elit in eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi lobortis mi ac euismod sollicitudin. Suspendisse tristique turpis ante, sit amet vehicula purus ullamcorper sit amet. Phasellus a libero eget lorem eleifend placerat in eu ex."; // can also pass into function as description

  menuEl.appendChild(titleEl);
  menuEl.appendChild(descriptionEl);

  return menuEl;
};

export default menu;
