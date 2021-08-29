const footer = () => {
  const bodyEl = document.querySelector("body");

  const footerEl = document.createElement("footer");
  const copyrightEl = document.createElement("p");
  copyrightEl.textContent = "© 2021 Eugene Gian";

  footerEl.appendChild(copyrightEl);
  return footerEl;
};

export default footer;
