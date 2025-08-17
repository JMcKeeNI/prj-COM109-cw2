document.addEventListener('DOMContentLoaded', function () {
    initializeBasket();
    refreshCart();
});

function refreshCart(){
    document.getElementById("cart").innerHTML = "Cart (" + getBasket() +")"  
}