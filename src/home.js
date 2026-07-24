import restaurantImage from "./assets/popcorn-cat.jpg";

export function createHomePage() {
    const homeContainer = document.querySelector("#content");
    const heading = document.createElement("h1");
    heading.textContent = "Popcorn & Paws";
    homeContainer.appendChild(heading);

    // Figure container for image and caption //
    const imageContainer = document.createElement("figure");
    homeContainer.appendChild(imageContainer);

    // Image and image properties //
    const image = document.createElement("img");
    image.src = restaurantImage;
    image.alt = "A curious calico cat investigates a spread of honey and popcorn on a sunny outdoor ledge."
    image.height = 300; 
    imageContainer.appendChild(image);

    // Image caption //
    const imageCaption = document.createElement("figcaption");
    imageCaption.textContent = "Credit to Roman Odintsov on Pexels.com";
    imageContainer.appendChild(imageCaption);

    // P1 & P2 //
    const welcome = document.createElement("p");
    welcome.textContent = "Welcome to Popcorn & Paws, your local gourmet popcorn shop! Experience an imaginative array of salty and sweet flavors all under one roof."
    homeContainer.appendChild(welcome);

    const proceeds = document.createElement("p");
    proceeds.textContent = "All proceeds are donated to our dedicated partner, Kam's Animal Shelter, to help animals in need find their forever homes."
    homeContainer.appendChild(proceeds);
}