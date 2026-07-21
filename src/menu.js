const menuContainer = document.querySelector("#content");

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


const menuItems = [];

class menuItem {
    constructor(name, image, caption, description) {
        this.name = name;
        this.image = image;
        this.caption = caption;
        this.description = description;
        this.smallSize = "$6.99";
        this.mediumSize = "$10.99";
        this.largeSize = "$15.99";
    }
}

const classicButter = new menuItem("Classic Butter", classicButterImg, "Credit to Shameel Mukkath on Pexels.com", "A fan favorite! Enjoy a timeless flavor loved by all.");

const cheddar = new menuItem("Cheddar", cheddarImg, "Credit to Terrance Barksdale on Pexels.com", "Every bite is a blast of cheesy goodness. Grab a bag today!");

const caramel = new menuItem("Caramel Corn", caramelImg, "Credit to Mikhail Nilov on Pexels.com", "Look no further for a sweet and crunchy snack crafted with love!");

console.log(cheddar.smallSize);

menuItems.push(classicButter, cheddar, );
console.log(menuItems);