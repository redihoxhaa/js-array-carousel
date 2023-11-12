"use strict"

// Definizione variabili globali
const imageList = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
const itemsElement = document.querySelector(".items");
const itemsThumbnails = document.querySelector(".thumbnails");
const prevChevron = document.querySelector(".prev");
const nextChevron = document.querySelector(".next");
let itemImageContainer = null;
let imageElement = null;
let thumbnailImageContainer = null;
let thumbnailElement = null;
let currentImage = 0;

// Ciclo per inserimento dinamico immagini
for (let i = 0; i < imageList.length; i++) {
    itemImageContainer = document.createElement("div");
    thumbnailImageContainer = document.createElement("div");
    itemImageContainer.classList.add("item");
    thumbnailImageContainer.classList.add("thumbnail");
    thumbnailImageContainer.classList.add("blacked");
    if (i === 0) {
        itemImageContainer.classList.add("active");
        thumbnailImageContainer.classList.add("thumb-active");
        thumbnailImageContainer.classList.remove("blacked");

    }
    imageElement = document.createElement("img");
    thumbnailElement = document.createElement("img");
    imageElement.src = `./img/${imageList[i]}`;
    thumbnailElement.src = `./img/${imageList[i]}`;
    imageElement.alt = `Immagine${i + 1}`;
    thumbnailElement.alt = `Immagine${i + 1}`;
    itemImageContainer.append(imageElement);
    thumbnailImageContainer.append(thumbnailElement);
    itemsElement.append(itemImageContainer);
    itemsThumbnails.append(thumbnailImageContainer);
};

// Creazione shadow layer
const shadowLayer = document.createElement("div");
shadowLayer.classList.add("shadow-layer");
itemsElement.append(shadowLayer);
itemsThumbnails.append(shadowLayer);

// Dichiarazione NodeList items
const itemsNode = document.querySelectorAll(".item");
const thumbnailsNode = document.querySelectorAll(".thumbnail");

// Aggiunta event listener per scorrimento immagini

nextChevron.addEventListener("click", function () {
    if (currentImage < itemsNode.length - 1) {
        itemsNode[currentImage].classList.remove("active");
        thumbnailsNode[currentImage].classList.remove("thumb-active");
        thumbnailsNode[currentImage].classList.add("blacked");
        currentImage++;
        itemsNode[currentImage].classList.add("active");
        thumbnailsNode[currentImage].classList.add("thumb-active");
        thumbnailsNode[currentImage].classList.remove("blacked");
    }
});


prevChevron.addEventListener("click", function () {
    if (currentImage > 0) {
        itemsNode[currentImage].classList.remove("active");
        thumbnailsNode[currentImage].classList.remove("thumb-active");
        thumbnailsNode[currentImage].classList.add("blacked");
        currentImage--;
        itemsNode[currentImage].classList.add("active");
        thumbnailsNode[currentImage].classList.add("thumb-active");
        thumbnailsNode[currentImage].classList.remove("blacked");
    }
});




