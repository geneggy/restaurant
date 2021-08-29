const menu = (items) => {
  // need to pass in array of items [{name: 'name', price: '$1.00', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur efficitur dolor, vitae porttitor ligula dictum quis. Donec eget dolor'}]

  console.log("menu runs");
  const menuEl = document.createElement("section");
  const titleEl = document.createElement("h1");
  const menuListEl = document.createElement("li");

  menuEl.classList.add("menu-section");
  titleEl.classList.add("menu-title");
  menuListEl.classList.add("menu-list");
  titleEl.textContent = "Menu";

  items.forEach((item) => {
    const itemEl = document.createElement("li");
    const itemNameEl = document.createElement("h3");
    const itemDescEl = document.createElement("p");

    itemEl.classList.add("menu-item");
    itemNameEl.classList.add("menu-item-name");
    itemDescEl.classList.add("menu-item-description");
    itemNameEl.textContent = item.name;
    itemDescEl.textContent = item.description;
    itemEl.appendChild(itemNameEl);
    itemEl.appendChild(itemDescEl);
    menuListEl.appendChild(itemEl);
  });

  menuEl.appendChild(titleEl);
  menuEl.appendChild(menuListEl);

  return menuEl;
};

export default menu;
