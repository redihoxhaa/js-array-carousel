# CAROUSEL

#### CONSEGNA DELL'ESERCIZIO

```
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

MILESTONE 1
Rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.

MILESTONE 2
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

BONUS 3:
Al click sulla thumbnail, viene visualizzata l'immagine selezionata;
```
---
#### SVOLGIMENTO

In questo esercizio abbiamo di base una struttura html statica, che verrà sostituita con un codice JS che la creerà in maniera dinamica (per fare questo useremo metodi come createElement, append, o innerHTML). Diamo una classe **active** che sarà definite nel CSS. alla prima immagine in modo da poterla visualizzare correttamente, classe che poi verrà spostata sempre tramite JS all'elemento che vorremo visualizzare in quel momento. Posizioniamo le frecce per lo scorrimento delle immagini con _position absolute_ nel container immagini, che a sua volta sarà _position relative_. A queste frecce andremo ad aggiungere un eventListener che al click andrà a spostare la classe **active** menzionata sopra. Andiamo ad implementare come bonus uno scorrimento infinito del carosello e aggiungiamo dei thumbnails con opacità scura che avranno inoltre la funzione di display dell'immagine una volta cliccati, e highlight degli stessi.