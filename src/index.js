import { renderHome, renderMenu } from "./barrelModule.js";
import "./reset.css";
import "./base.css";

const content = document.querySelector("#content");
const buttons = Array.from(document.querySelectorAll("button"));
buttons[0].addEventListener("click", () => {
  clearContent();
  renderHome(content);
});
buttons[1].addEventListener("click", () => {
  clearContent();
  renderMenu(content);
});

function clearContent() {
  content.innerHTML = "";
}
