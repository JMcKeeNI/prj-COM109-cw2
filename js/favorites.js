//favorites.js

const DEBUG = true;
function log(msg) {
    if (DEBUG) console.log(msg);
}

//attempt to retrieve favorites list, reset if format breaks
function parseFavorites(){
    try {
        return JSON.parse(localStorage.getItem('favorites')) || [];
    } catch (e) {
        console.warn("Failed to parse favorites, clearing favorites...");
        localStorage.setItem('favorites', JSON.stringify([]));
        return [];
    }
}

function initializeFavorites(){
    const savedFavorites = localStorage.getItem('favorites');
    //create favorites array if not already present in localStorage
    if (!savedFavorites) {
        localStorage.setItem('favorites', JSON.stringify([]));
        log("Favorites list initialized");
    } else{
        log("Favorites list loaded");
    }
}

function getFavorites(){
    let favs = parseFavorites();
    for (let favorite of favs) {
        log(favorite);
    }
}

function addFavorite(productID){
    let favs = parseFavorites();
    if (!favs.includes(productID)) {
        favs.push(productID);
        localStorage.setItem('favorites', JSON.stringify(favs));
        log("Added " + productID + " to favorites.");
    } else{
        log(productID + " already in favorites!")
    }
}

function removeFavorite(productID) {
    let favs = parseFavorites();
    if (favs.includes(productID)) {
        favs = favs.filter(item => item !== productID);
        localStorage.setItem('favorites', JSON.stringify(favs));
        log("Removed " + productID + " from favorites.")
    } else {
        log(productID + " is not in favorites!")
    }
}

//create/load favorites on page load
document.addEventListener('DOMContentLoaded', function () {
    initializeFavorites();
    const favs = parseFavorites();
    document.querySelectorAll(".favorite-btn").forEach(button => {
        const productID = button.dataset.productId;
        if (favs.includes(productID)) {
            button.textContent = "Favorited";
            button.classList.add("active");
        }

        button.addEventListener("click", () => {
            if (button.classList.contains("active")) {
                removeFavorite(productID);
                button.textContent = "Add to favorites";
                button.classList.remove("active");
            } else {
                addFavorite(productID);
                button.textContent = "Favorited";
                button.classList.add("active");
            }
        });
    });

});