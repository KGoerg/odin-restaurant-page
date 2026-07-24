import { createHomePage } from "./home.js";
import { createMenuItems } from "./menu.js";

createHomePage();

let mainContainer = document.querySelector("#content");

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");

homeButton.addEventListener("click", () => {
    mainContainer.replaceChildren();
    createHomePage();
});

menuButton.addEventListener("click", () => {
    mainContainer.replaceChildren();
    createMenuItems();
});