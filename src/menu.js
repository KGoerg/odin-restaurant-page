// const menuContainer = document.querySelector("#content");

// First Menu Item //
// Creates div //
// const firstMenuItemContainer = document.createElement("div");
// menuContainer.appendChild(firstMenuItemContainer);

// // Header //
// const classicButterHeader = document.createElement("h1");
// classicButterHeader.textContent = "Classic Butter";
// firstMenuItemContainer.appendChild(classicButterHeader);

// // Figure container for Classic Butter image //
// const classicButterImageContainer = document.createElement("figure");
// firstMenuItemContainer.appendChild(classicButterImageContainer);

// // Classic Butter image and image properties //
// import classicButterImg from "./assets/classic-butter.jpg";
// const image1 = document.createElement("img");
// image1.src = classicButterImg;
// image1.alt = "A small bucket of deliciously buttery popcorn."
// image1.width = 200; 
// classicButterImageContainer.appendChild(image1);

// // Classic Butter image caption //
// const classicButterCaption = document.createElement("figcaption");
// classicButterCaption.textContent = "Credit to Shameel Mukkath on Pexels.com";
// classicButterImageContainer.appendChild(classicButterCaption);

// // Classic Butter description //
// const classicButterDesc = document.createElement("p");
// classicButterDesc.textContent = "A fan favorite! Enjoy a timeless flavor loved by all."
// firstMenuItemContainer.appendChild(classicButterDesc);

import classicButterImg from "./assets/classic-butter.jpg";
import cheddarImg from "./assets/cheddar.jpg";
import caramelImg from "./assets/caramel.jpg";
import pawberryShortcakeImg from "./assets/pawberry-shortcake.jpg";

const menuItems = [];

const menuContainer = document.querySelector("#content");

class menuItem {
    constructor(name, image, caption, description) {
        this.name = name;
        this.image = image;
        this.caption = caption;
        this.description = description;
        this.sizeSmall = "$6.99";
        this.sizeMedium = "$10.99";
        this.sizeLarge = "$15.99";
    }

    createDiv() {
        this.menuItemContainer = document.createElement("div");
        this.menuItemContainer.classList.add("menu-item");
        return this.menuItemContainer;
    }

    // createDivItems() {
    //     this.menuItemHeader = document.createElement("h1");
    //     this.menuItemHeader.textContent = this.name;
    // }

    appendDivs() {
        menuContainer.appendChild(this.menuItemContainer);
        // this.menuItemContainer.appendChild(this.menuItemHeader);
    }
}

const classicButter = new menuItem("Classic Butter", classicButterImg, "Credit to Shameel Mukkath on Pexels.com", "A fan favorite! Enjoy a timeless flavor loved by all.");

// const cheddar = new menuItem("Cheddar", cheddarImg, "Credit to Terrance Barksdale on Pexels.com", "Every bite is a blast of cheesy goodness. Grab a bag today!");

// const caramel = new menuItem("Caramel Corn", caramelImg, "Credit to Mikhail Nilov on Pexels.com", "Look no further for a sweet and crunchy snack crafted with love!");

// const pawberryShortcake = new menuItem("Pawberry Shortcake", pawberryShortcakeImg, "Credit to Mustafa Akin from Pexels.com", "Enjoy a fruity explosion with every bite of our Pawberry Shortcake! Strawberry and cream-coated popcorn pieces collide in this tasty, sweet treat!");

// menuItems.push(classicButter, cheddar, caramel, pawberryShortcake);
// console.log(menuItems);

console.log(classicButter);
classicButter.createDiv();
classicButter.appendDivs();

