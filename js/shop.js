//shop.js

document.addEventListener('DOMContentLoaded', function () {
    initializeBasket();
    const favs = parseBasket();

    document.querySelectorAll(".addcart-btn").forEach(button => {
        const productID = button.dataset.productId;

        // Set price as default text
        if (products[productID]) {
            button.textContent = `£${products[productID].price.toFixed(2)}`;
        } else {
            button.textContent = "ERR NO PRICE";
        }

        if (favs.includes(productID)) {
            button.textContent = "In Cart";
            button.classList.add("active");
        }

        button.addEventListener("click", () => {
            if (button.classList.contains("active")) {
                removeBasketItem(productID);
                button.classList.remove("active");
                button.textContent = "Add to Cart";
            } else {
                addBasketItem(productID);
                button.classList.add("active");
                button.textContent = "In Cart";
            }
        });

        button.addEventListener("mouseenter", () => {
            if (button.classList.contains("active")) {
                button.textContent = "In Cart";
            } else {
                button.textContent = "Add to Cart";
            }
        });

        button.addEventListener("mouseleave", () => {
            if (button.classList.contains("active")) {
                button.textContent = "In Cart";
            } else if (products[productID]) {
                button.textContent = `£${products[productID].price.toFixed(2)}`;
            } else {
                button.textContent = "Price N/A";
            }
        });
    });
});
