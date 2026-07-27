import { createAboutPage } from "./about.js";
import { createHomePage } from "./home.js";
import { createMenuItems } from "./menu.js";
import "./styles.css";

createHomePage();

let mainContainer = document.querySelector("#content");

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

homeButton.addEventListener("click", () => {
    mainContainer.replaceChildren();
    createHomePage();
});

menuButton.addEventListener("click", () => {
    mainContainer.replaceChildren();
    createMenuItems();
});

aboutButton.addEventListener("click", () => {
    mainContainer.replaceChildren();
    createAboutPage();
})