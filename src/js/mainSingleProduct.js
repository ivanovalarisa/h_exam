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
        // let id = '333';
        // let collection = 'men';

        // displayProduct(collection, id);
        let obj = JSON.parse(localStorage.getItem('dataSelectedObj'));
        displayProduct(obj.collection, obj.id);
        
        notAvailableStyle();
        selectedSize();
        defaultSelectedSize();
        viewPhoto();
    });

});
