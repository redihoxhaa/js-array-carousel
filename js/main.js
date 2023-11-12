"use strict"

// Definizione variabili globali
const imageList = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
const itemsElement = document.querySelector(".items");
const prevChevron = document.querySelector(".prev");
const nextChevron = document.querySelector(".next");
let itemImageContainer = null;
let imageElement = null;
let currentImage = 0;

// Ciclo per inserimento dinamico immagini
for (let i = 0; i < imageList.length; i++) {
    itemImageContainer = document.createElement("div");
    itemImageContainer.classList.add("item");
    if (i === 0) {
        itemImageContainer.classList.add("active");
    }
    imageElement = document.createElement("img");
    imageElement.src = `./img/${imageList[i]}`;
    imageElement.alt = `Immagine${i + 1}`;
    itemImageContainer.append(imageElement);
    itemsElement.append(itemImageContainer);
};

// Creazione shadow layer
const shadowLayer = document.createElement("div");
shadowLayer.classList.add("shadow-layer");
itemsElement.append(shadowLayer);

// Dichiarazione NodeList items
const itemsNode = document.querySelectorAll(".item");

// Aggiunta event listener per scorrimento immagini
nextChevron.addEventListener("click", function () {
    if (currentImage < itemsNode.length - 1) {
        itemsNode[currentImage].classList.remove("active");
        currentImage++;
        itemsNode[currentImage].classList.add("active");
    }
});

prevChevron.addEventListener("click", function () {
    if (currentImage > 0) {
        itemsNode[currentImage].classList.remove("active");
        currentImage--;
        itemsNode[currentImage].classList.add("active");
    }
});



