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

// Dichiarazione NodeList items
const itemsNode = document.querySelectorAll(".item");
const thumbnailsNode = document.querySelectorAll(".thumbnail");

itemsNode[0].classList.add("active");
thumbnailsNode[0].classList.add("thumb-active");
thumbnailsNode[0].classList.remove("blacked");


// Creazione shadow layer
const shadowLayer = document.createElement("div");
shadowLayer.classList.add("shadow-layer");
itemsElement.append(shadowLayer);

// Aggiunta event listener per scorrimento immagini

nextChevron.addEventListener("click", function () {
    if (currentImage < itemsNode.length) {
        itemsNode[currentImage].classList.remove("active");
        thumbnailsNode[currentImage].classList.remove("thumb-active");
        thumbnailsNode[currentImage].classList.add("blacked");
        currentImage++;
        // Funzione loop
        if (currentImage === itemsNode.length) {
            currentImage = 0;
        }
        itemsNode[currentImage].classList.add("active");
        thumbnailsNode[currentImage].classList.add("thumb-active");
        thumbnailsNode[currentImage].classList.remove("blacked");
    }
});


prevChevron.addEventListener("click", function () {
    if (currentImage >= 0) {
        itemsNode[currentImage].classList.remove("active");
        thumbnailsNode[currentImage].classList.remove("thumb-active");
        thumbnailsNode[currentImage].classList.add("blacked");
        currentImage--;
        // Funzione loop
        if (currentImage === -1) {
            currentImage = itemsNode.length - 1;
        }
        itemsNode[currentImage].classList.add("active");
        thumbnailsNode[currentImage].classList.add("thumb-active");
        thumbnailsNode[currentImage].classList.remove("blacked");
    }
});

// Selezione immagine da thumb

let thumbSelector = document.querySelector(".blacked")

thumbnailImageContainer.addEventListener("click", function () {
    if (thumbnailImageContainer.classList.contains("blacked")) {
        thumbnailImageContainer.classList.remove("blacked");
    }
});



