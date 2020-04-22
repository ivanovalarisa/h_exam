'use strict';

document.addEventListener('DOMContentLoaded', function () {




    // function addedProduct() {
    //     notAddToCart();
    //     document.getElementById('add-cart').innerHTML = 'added';
    // }
    //
    //
    //
    // addedProduct();


    getDataFromServer().then(() => {
        let id = '333';
        let collection = 'men';

        displayProduct(collection, id);

        notAvailableStyle();
        selectedSize();
        defaultSelectedSize();
        viewPhoto();
    });




});
