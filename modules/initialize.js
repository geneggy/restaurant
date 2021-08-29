import Header from "./header.js";
import Home from "./home.js";
import Footer from "./footer.js";
import Menu from "./menu.js";
import Contact from "./contact.js";

const menuItems = [
  {
    name: "Lorem Ipsum Roll",
    price: "$10.99",
    description:
      "Lobster tempura and avocado rolled and topped with seared filet mignon, creamy wasabi sauce, green onions and red bell peppers; served with lobster tempura over fried zucchini and ginger teriyaki sauce",
  },
  {
    name: "Chodan Roll",
    price: "$10.99",
    description:
      "Lobster tempura and avocado rolled and topped with seared filet mignon, creamy wasabi sauce, green onions and red bell peppers; served with lobster tempura over fried zucchini and ginger teriyaki sauce",
  },
  {
    name: "Lorem Ipsum Roll",
    price: "$10.99",
    description:
      "Lobster tempura and avocado rolled and topped with seared filet mignon, creamy wasabi sauce, green onions and red bell peppers; served with lobster tempura over fried zucchini and ginger teriyaki sauce",
  },
  {
    name: "Lorem Ipsum Roll",
    price: "$10.99",
    description:
      "Lobster tempura and avocado rolled and topped with seared filet mignon, creamy wasabi sauce, green onions and red bell peppers; served with lobster tempura over fried zucchini and ginger teriyaki sauce",
  },
  {
    name: "Lorem Ipsum Roll",
    price: "$10.99",
    description:
      "Lobster tempura and avocado rolled and topped with seared filet mignon, creamy wasabi sauce, green onions and red bell peppers; served with lobster tempura over fried zucchini and ginger teriyaki sauce",
  },
  {
    name: "Lorem Ipsum Roll",
    price: "$10.99",
    description:
      "Lobster tempura and avocado rolled and topped with seared filet mignon, creamy wasabi sauce, green onions and red bell peppers; served with lobster tempura over fried zucchini and ginger teriyaki sauce",
  },
];

const pages = [
  { name: "Home", func: Home() },
  {
    name: "Menu",
    func: Menu(menuItems),
  },
  { name: "Contact", func: Contact() },
];

const bodyEl = document.querySelector("body");
const contentEl = document.getElementById("content");

const initialize = () => {
  bodyEl.insertBefore(Header(pages), bodyEl.firstChild);
  contentEl.appendChild(Home());
  bodyEl.appendChild(Footer());
};

//pass item into this function to fire off
const changeContent = (content) => {
  contentEl.textContent = "";
  contentEl.appendChild(content);
};

export { initialize, changeContent };
