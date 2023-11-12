"use strict"

// Definizione variabili
const imageList = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
const itemsElement = document.querySelector(".items");

// Ciclo per inserimento dinamico immagini
for (let i = 0; i < imageList.length; i++) {
    let itemImageContainer = document.createElement("div");
    itemImageContainer.classList.add("item");
    if (i === 0) {
        itemImageContainer.classList.add("active");
    }
    let imageElement = document.createElement("img");
    imageElement.src = `./img/${imageList[i]}`;
    imageElement.alt = `Immagine${i + 1}`;
    itemImageContainer.append(imageElement);
    itemsElement.append(itemImageContainer);
};

