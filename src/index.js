import { renderHome, renderMenu } from "./barrelModule.js";
import "./reset.css";
import "./base.css";

const content = document.querySelector("#content");
const buttons = Array.from(document.querySelectorAll("button"));

buttons.forEach(button => {
  button.addEventListener("click", (event) => {
    clearContent();
    toggleCurrentButton(event.target)
  })
})

buttons[0].addEventListener("click", () => {
  renderHome(content);
});
buttons[1].addEventListener("click", () => {
  renderMenu(content);
});

function clearContent() {
  content.innerHTML = "";
}
function toggleCurrentButton(target) {
  buttons.map(button => {
    if (Array.from(button.classList).includes("current-tab")) {
      button.classList.toggle("current-tab");
    }
  })
  target.classList.toggle("current-tab");
}
