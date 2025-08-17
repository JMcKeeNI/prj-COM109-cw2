// shop.js

$(document).ready(function () {
    initializeBasket();
    const favs = parseBasket();

    $(".addcart-btn").each(function () {
        const $button = $(this);
        const productID = $button.data("product-id");

        // Set price as default text
        if (products[productID]) {
            $button.text(`£${products[productID].price.toFixed(2)}`);
        } else {
            $button.text("ERR NO PRICE");
        }

        if (favs.includes(productID)) {
            $button.text("In Cart").addClass("active");
        }

        // Click event
        $button.on("click", function () {
            if ($button.hasClass("active")) {
                removeBasketItem(productID);
                $button.removeClass("active").text("Add to Cart");
            } else {
                addBasketItem(productID);
                $button.addClass("active").text("In Cart");
            }
        });

        // Mouse enter
        $button.on("mouseenter", function () {
            if ($button.hasClass("active")) {
                $button.text("In Cart");
            } else {
                $button.text("Add to Cart");
            }
        });

        // Mouse leave
        $button.on("mouseleave", function () {
            if ($button.hasClass("active")) {
                $button.text("In Cart");
            } else if (products[productID]) {
                $button.text(`£${products[productID].price.toFixed(2)}`);
            } else {
                $button.text("Price N/A");
            }
        });
    });
});
