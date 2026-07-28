import restaurantImage from "./assets/popcorn-cat.jpg";

export function createHomePage() {
    const homeContainer = document.querySelector("#content");
    const heading = document.createElement("h1");
    heading.textContent = "Popcorn & Paws";
    homeContainer.appendChild(heading);

        // P1 & P2 //
    const tagline = document.createElement("h2");
    tagline.textContent = "You'll want to get your paws on our array of salty and sweet popcorns!"
    homeContainer.appendChild(tagline);

    // Figure container for image and caption //
    const imageContainer = document.createElement("figure");
    homeContainer.appendChild(imageContainer);

    // Image and image properties //
    const image = document.createElement("img");
    image.src = restaurantImage;
    image.alt = "A curious calico cat investigates a spread of honey and popcorn on a sunny outdoor ledge."
    imageContainer.appendChild(image);

    // Image caption //
    const imageCaption = document.createElement("figcaption");
    imageCaption.textContent = "Credit to Roman Odintsov on Pexels.com";
    imageContainer.appendChild(imageCaption);

    // Footer//
    const footer = document.querySelector("#footer");
    footer.textContent = "Copyright © Kam's Animal Shelter 2025";
}