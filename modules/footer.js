const footer = () => {
  console.log("footer running");
  const bodyEl = document.querySelector("body");

  const footerEl = document.createElement("footer");
  const copyrightEl = document.createElement("p");
  copyrightEl.textContent = "© 2021 Eugene Gian";

  footerEl.appendChild(copyrightEl);
  bodyEl.appendChild(footerEl);
};

export default footer;
