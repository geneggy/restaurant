const home = () => {
  console.log("home runs");
  const contentEl = document.getElementById("content");
  const homeEl = document.createElement("section");
  const titleEl = document.createElement("h1");
  const descriptionEl = document.createElement("div");

  homeEl.classList.add("home-section");
  titleEl.classList.add("home-title");
  descriptionEl.classList.add("home-description");
  titleEl.textContent = "Yuujin"; // can pass into function as title
  descriptionEl.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur efficitur dolor, vitae porttitor ligula dictum quis. Donec eget dolor ut purus tempus bibendum in consectetur libero. Nullam ac nisi faucibus, condimentum purus in, pellentesque ipsum. Nam et libero elementum, commodo dolor in, cursus elit. Cras interdum semper elit in eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi lobortis mi ac euismod sollicitudin. Suspendisse tristique turpis ante, sit amet vehicula purus ullamcorper sit amet. Phasellus a libero eget lorem eleifend placerat in eu ex."; // can also pass into function as description

  homeEl.appendChild(titleEl);
  homeEl.appendChild(descriptionEl);
  contentEl.appendChild(homeEl);
};

export default home;
