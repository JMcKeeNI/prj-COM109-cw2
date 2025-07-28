//Basket.js

const DEBUG = true;
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
    for (let favorite of favs) {
        log(favorite);
    }
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
}

//create/load Basket on page load
document.addEventListener('DOMContentLoaded', function () {
    initializeBasket();
    const favs = parseBasket();
    document.querySelectorAll(".favorite-btn").forEach(button => {
        const productID = button.dataset.productId;
        if (favs.includes(productID)) {
            button.textContent = "In Cart";
            button.classList.add("active");
        }

        button.addEventListener("click", () => {
            if (button.classList.contains("active")) {
                removeBasketItem(productID);
                button.textContent = "Add To Cart";
                button.classList.remove("active");
            } else {
                addBasketItem(productID);
                button.textContent = "In Cart";
                button.classList.add("active");
            }
        });
    });

});