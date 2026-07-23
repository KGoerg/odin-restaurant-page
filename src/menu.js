import classicButterImg from "./assets/classic-butter.jpg";
import cheddarImg from "./assets/cheddar.jpg";
import caramelImg from "./assets/caramel.jpg";
import pawberryShortcakeImg from "./assets/pawberry-shortcake.jpg";

const menuContainer = document.querySelector("#content");

class menuItem {

    // Creates menu item objects //
    constructor(name, image, caption, description, smallPrice, mediumPrice, largePrice) {
        this.name = name;
        this.image = image;
        this.caption = caption;
        this.description = description;
        this.sizeSmall = `Small: $${smallPrice}`;
        this.sizeMedium = `Medium: $${mediumPrice}`;
        this.sizeLarge = `Large: $${largePrice}`;
    }

    // Creates the 
    createDivContainer() {
        this.menuItemContainer = document.createElement("div");
        this.menuItemContainer.classList.add("menu-item");
        this.menuImageContainer = document.createElement("figure");
        this.menuImageContainer.classList.add("image-container");
        this.menuItemPrices = document.createElement("div");
        this.menuItemPrices.classList.add("menu-prices");
    }

    createContainerItems() {
        this.menuItemHeader = document.createElement("h1");
        this.menuItemHeader.textContent = this.name;
        this.menuItemImg = document.createElement("img");
        this.menuItemImg.src = this.image;
        this.menuItemImg.style.width = "250px";
        this.menuImageCaption = document.createElement("figcaption");
        this.menuImageCaption.textContent = this.caption;
        this.menuItemDescription = document.createElement("p");
        this.menuItemDescription.textContent = this.description;
        this.sizeSmallPrice = document.createElement("p");
        this.sizeSmallPrice.textContent = this.sizeSmall;
        this.sizeMediumPrice = document.createElement("p");
        this.sizeMediumPrice.textContent = this.sizeMedium;
        this.sizeLargePrice = document.createElement("p");
        this.sizeLargePrice.textContent = this.sizeLarge;
    }

    appendDivs() {
        menuContainer.appendChild(this.menuItemContainer);
        this.menuItemContainer.appendChild(this.menuItemHeader);
        this.menuItemContainer.appendChild(this.menuImageContainer);
        this.menuImageContainer.appendChild(this.menuItemImg);
        this.menuImageContainer.appendChild(this.menuImageCaption);
        this.menuItemContainer.appendChild(this.menuItemDescription);
        this.menuItemContainer.appendChild(this.menuItemPrices);
        this.menuItemPrices.appendChild(this.sizeSmallPrice);
        this.menuItemPrices.appendChild(this.sizeMediumPrice);
        this.menuItemPrices.appendChild(this.sizeLargePrice);
    }
}

//Creates menu items from class & class methods //
const classicButter = new menuItem("Classic Butter", classicButterImg, "Credit to Shameel Mukkath on Pexels.com", "A fan favorite! Enjoy a timeless flavor loved by all.", 6.99, 10.99, 15.99);
classicButter.createDivContainer();
classicButter.createContainerItems();
classicButter.appendDivs();

const cheddar = new menuItem("Cheddar", cheddarImg, "Credit to Terrance Barksdale on Pexels.com", "Every bite is a blast of cheesy goodness. Grab a bag today!", 6.99, 10.99, 15.99);
cheddar.createDivContainer();
cheddar.createContainerItems();
cheddar.appendDivs();

const caramel = new menuItem("Caramel Corn", caramelImg, "Credit to Mikhail Nilov on Pexels.com", "Look no further for a sweet and crunchy snack crafted with love!", 7.99, 11.99, 16.99);
caramel.createDivContainer();
caramel.createContainerItems();
caramel.appendDivs();

const pawberryShortcake = new menuItem("Pawberry Shortcake", pawberryShortcakeImg, "Credit to Mustafa Akin from Pexels.com", "Enjoy a fruity explosion with every bite of our Pawberry Shortcake! Strawberry and cream-coated popcorn pieces collide in this tasty, sweet treat!", 7.99, 11.99, 16.99);
pawberryShortcake.createDivContainer();
pawberryShortcake.createContainerItems();
pawberryShortcake.appendDivs();