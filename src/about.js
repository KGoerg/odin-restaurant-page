import shelterCat from "./assets/shelter-cat.jpg";
import shelterDogs from "./assets/shelter-dogs.jpg"

export function createAboutPage() {
    const container = document.querySelector("#content");

    // Header //
    const pageHeader = document.createElement("h1");
    pageHeader.textContent = "About Popcorn & Paws"
    container.appendChild(pageHeader);

    // About text //
    const aboutText1 = document.createElement("p");
    aboutText1.textContent = "At Popcorn & Paws, we use only the freshest, locally-sourced ingredients to create our outstanding popcorn flavors. Founded in 2026 by Katie Grant, Popcorn & Paws creates delectable gourmet popcorn with a heartfelt cause. We partnered with Kam's Animal Shelter to donate half of our proceeds to their operations, where they rescue and care for abandoned furry friends looking for a new, comfortable life."
    
    const aboutText2 = document.createElement("p");
    aboutText2.textContent = "At the time of writing, we are workshopping new flavors to add to our menu, so please check back in soon to see what we've come up with!"

    // Append containers and text //
    container.appendChild(aboutText1);
    // Figure container for cat image and caption //
    const catImageContainer = document.createElement("figure");
    // Figure container for dog image and caption //
    const dogImageContainer = document.createElement("figure");
    container.appendChild(catImageContainer);
    container.appendChild(dogImageContainer);
    container.appendChild(aboutText2);

    // Cat image and image properties //
    const shelterCatImage = document.createElement("img");
    shelterCatImage.src = shelterCat;
    shelterCatImage.alt = "A dark grey cat is meowing behind a crate door, hoping to get a potential adopter's attention."
    shelterCatImage.height = 300; 
    catImageContainer.appendChild(shelterCatImage);

    // Cat image captions //
    const catImageCaption = document.createElement("figcaption");
    catImageCaption.textContent = 'Donny excitedly meows at a potential adopter, "Take me home!!" (Credit to Nothing Ahead on Pexels.com)';
    catImageContainer.appendChild(catImageCaption);

    //Dog image and image properties //
    const shelterDogsImage = document.createElement("img");
    shelterDogsImage.src = shelterDogs;
    shelterDogsImage.alt = "Two young pups look hopefully out of their kennel, dreaming of being adopted."
    shelterDogsImage.height = 400; 
    dogImageContainer.appendChild(shelterDogsImage);

    // Dog image captions //
    const dogImageCaption = document.createElement("figcaption");
    dogImageCaption.textContent = 'Puppy sisters Peanut and Cashew give hopeful looks out their kennel at potential adopters. (Credit to Alin Luna on Pexels.com'
    dogImageContainer.appendChild(dogImageCaption);
}