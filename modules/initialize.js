import Header from "./header.js";
import Home from "./home.js";
import Footer from "./footer.js";
import Menu from "./menu.js";
import Contact from "./contact.js";

const headerItems = [
  { name: "Home", func: Home },
  { name: "Menu", func: Menu },
  { name: "Contact", func: Contact },
];

const bodyEl = document.querySelector("body");
const contentEl = document.getElementById("content");

const initialize = () => {
  bodyEl.insertBefore(Header(headerItems), bodyEl.firstChild);
  contentEl.appendChild(Home());
  bodyEl.appendChild(Footer());
};

//pass item into this function to fire off
const changeContent = (contentFunc) => {
  contentEl.textContent = "";
  contentEl.appendChild(contentFunc());
};

export { initialize, changeContent };
