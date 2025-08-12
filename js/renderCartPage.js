

document.addEventListener('DOMContentLoaded', function () {
    const basket = JSON.parse(localStorage.getItem('basket') || '[]');

    const cartContainer = document.querySelector('#cart-container');
    let total = 0.00;

    basket.forEach(itemId => {
        const product = products[itemId];
        if (!product) return;
        else{
            total += parseFloat(product.price.toFixed(2));
        } // skip if product not found

        cartContainer.innerHTML += `
        <div class="row">
            <div class="col-lg-3 col-md-12 mb-3 mb-lg-0">
            <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                <img src="img/${itemId}.jpg" class="w-50">
            </div>
            </div>
            <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
            <p><strong>${product.name}</strong></p>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <p class="text-start text-md-center">£${product.price.toFixed(2)}</p>
            </div>
        </div>
        <hr class="my-4">
        `;
    });

    document.getElementById("total-price").innerHTML = "£" + total;
});