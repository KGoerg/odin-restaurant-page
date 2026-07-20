const menuContainer = document.querySelector("#content");

// First Menu Item //
// Creates div //
const firstMenuItemContainer = document.createElement("div");
menuContainer.appendChild(firstMenuItemContainer);

// Header //
const classicButterHeader = document.createElement("h1");
classicButterHeader.textContent = "Classic Butter";
firstMenuItemContainer.appendChild(classicButterHeader);

// Figure container for Classic Butter image //
const classicButterImageContainer = document.createElement("figure");
firstMenuItemContainer.appendChild(classicButterImageContainer);

// Classic Butter image and image properties //
import classicButterImg from "./assets/classic-butter.jpg";
const image1 = document.createElement("img");
image1.src = classicButterImg;
image1.alt = "A small bucket of deliciously buttery popcorn."
image1.width = 200; 
classicButterImageContainer.appendChild(image1);

// Classic Butter image caption //
const classicButterCaption = document.createElement("figcaption");
classicButterCaption.textContent = "Credit to Shameel Mukkath on Pexels.com";
classicButterImageContainer.appendChild(classicButterCaption);

// Classic Butter description //
const classicButterDesc = document.createElement("p");
classicButterDesc.textContent = "A fan favorite! Enjoy a timeless flavor loved by all."
firstMenuItemContainer.appendChild(classicButterDesc);

