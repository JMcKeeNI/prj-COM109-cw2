//basket.js

const DEBUG = false;
function log(msg) {
    if (DEBUG) console.log(msg);
}

//attempt to retrieve Basket list, reset if format breaks
function parseBasket(){
    try {
        return JSON.parse(localStorage.getItem('basket')) || [];
    } catch (e) {
        console.warn("Failed to parse Basket, clearing Basket...");
        localStorage.setItem('basket', JSON.stringify([]));
        return [];
    }
}

function initializeBasket(){
    const savedBasket = localStorage.getItem('basket');
    //create Basket array if not already present in localStorage
    if (!savedBasket) {
        localStorage.setItem('basket', JSON.stringify([]));
        log("Basket list initialized");
    } else{
        log("Basket list loaded");
    }
}

function getBasket(){
    let favs = parseBasket();
    let count = 0;
    for (let favorite of favs) {
        log(favorite);
        count += 1;
    }
    return count;
}

function addBasketItem(productID){
    let favs = parseBasket();
    if (!favs.includes(productID)) {
        favs.push(productID);
        localStorage.setItem('basket', JSON.stringify(favs));
        log("Added " + productID + " to Basket.");
    } else{
        log(productID + " already in Basket!")
    }
    refreshCart();
}

function removeBasketItem(productID) {
    let favs = parseBasket();
    if (favs.includes(productID)) {
        favs = favs.filter(item => item !== productID);
        localStorage.setItem('basket', JSON.stringify(favs));
        log("Removed " + productID + " from Basket.")
    } else {
        log(productID + " is not in Basket!")
    }
    refreshCart();
}