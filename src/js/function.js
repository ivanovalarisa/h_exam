'use strict';

const getDataFromServer = () => {
    return fetch('../data.json')
        .then((dataObj) => dataObj.json())
        .then((dataObj) => {
            pushObjToLocalStorage(dataObj);
            return dataObj;
        });
};

const pushObjToLocalStorage = (dataObj) => {
    if (localStorage.getItem('dataGoods')) {
        // debugger;
        getDataFromLocalStorage();
    }
    // debugger;
    localStorage.setItem('dataGoods', JSON.stringify(dataObj));
};

const getDataFromLocalStorage = () => JSON.parse(localStorage.getItem('dataGoods'));

const dataObj = getDataFromLocalStorage();


// console.log(Object.values(dataObj[categoryItem]));
// console.log(Object.entries(dataObj[categoryItem]));
// console.log(Object.values(Object.values(dataObj[categoryItem]))[0]);

function displayProduct(collection, id) {

    for (let categoryItem in dataObj) {
        if(categoryItem === collection) {
            for(let [subcategories, categoryValues] of Object.entries(dataObj[categoryItem])) {

                categoryValues.forEach(function(item, i, arg) {
                    if(Object.entries(item)[0][1] === id) {
                        let quantity = arg[i].quantity;

                        document.getElementById('name-odj').insertAdjacentHTML('afterbegin', `
                                <h3>${arg[i].name}</h3>
                                <h2>$${arg[i].price}</h2>
                                <ul class="list" id="list">
                                    <li><a><span>Category</span> :  ${subcategories}</a></li>
                                    <li><a><span>Brand</span> : ${arg[i].brand}</a></li>
                                    <li><a><span>Color</span> : ${arg[i].color}</a></li>
                                    <li><a><span>Availibility</span> : ${determineAvailability(quantity)}</a></li>
                                    <li><a><span>Size</span> : </a></li
                                    <li><div id="size" data-quantity="${arg[i].quantity}"></div></li
                                </ul>
                                <p>${arg[i]['short-description']}</p>`);
                        document.getElementById('profile').insertAdjacentHTML('afterbegin', `
                                <p>${arg[i].description}</p>`);

                        document.getElementById('img').insertAdjacentHTML('afterbegin', `
                                <div class="row justify-content-between">
                                    <div class="col-sm-2" id="all-photo">
                                        <div class="row m-bottom">
                                            <img class="img-fluid img-thumbnail" src="img/product/${collection}/${Object.entries(item)[1][1][0]}" alt="">
                                        </div>
                                        <div class="row m-bottom">
                                            <img class="img-fluid img-thumbnail" src="img/product/${collection}/${Object.entries(item)[1][1][1]}" alt="">
                                        </div>
                                        <div class="row m-bottom">
                                            <img class="img-fluid img-thumbnail" src="img/product/${collection}/${Object.entries(item)[1][1][2]}" alt="">
                                        </div>
                                    </div>

                                    <div class="col-sm-10 container-fluid">
                                        <img class="img-fluid img-thumbnail" id="photo-to-view" src="img/product/${collection}/${Object.entries(item)[1][1][0]}" alt="">
                                    </div>
                                </div>`);

                        Object.entries(item)[4][1].forEach(function(itemSize, ind, arrSize) {
                            document.getElementById('size').insertAdjacentHTML('beforeend', `
                                <div><span>${arrSize[ind]}</span></div>`);
                        });


                        transferDataProductToCart(item, collection);
                    }
                });
            }
        }
    }
}

function selectedSize() {
    let size = document.getElementById('size');
    size.addEventListener('click', function (e) { ///////////

        for(let item of size.childNodes) {
            if(item.tagName === 'DIV') {
                item.classList.remove('selected');
            }
        }
        if(e.target.tagName === 'DIV') {
            e.target.classList.add('selected');
        } else if (e.target.tagName === 'SPAN'){
            e.target.parentNode.classList.add('selected');

        }
    })
}

function localStorageGet() {
    if (localStorage.getItem('dataCart')) {
        JSON.parse(localStorage.getItem('dataCart'))
    }
    let info = localStorage.getItem('dataCart');
    try {
        info = JSON.parse(info);
    } catch (e) {
        return null;
    }
    return info;
}

let quantity = localStorageGet();
showQuantityGoodsInBasket(quantity);

function showQuantityGoodsInBasket(quantityGoods) {
    console.log(quantityGoods);
    document.getElementById('show').innerHTML = quantityGoods.length;
}

function transferDataProductToCart(product, collection, dataCart) {
    if(document.getElementById('size').dataset['quantity'] === "0") {
        notAddToCart();
        return;
    }
    document.getElementById('add-cart').addEventListener('click', function(){

        let dataProductToCart = {}; //объект, который будет записываться в localStorage
        let currentCartItems = localStorageGet(dataCart) || [];

        dataProductToCart.collection = collection;
        for(let it in product) {
            if(it === 'id') {
                dataProductToCart.id = product[it];
            } else if(it === 'name') {
                dataProductToCart.name = product[it];
            } else if(it === 'price') {
                dataProductToCart.price = product[it];
            } else if(it === 'photo') {
                dataProductToCart.photo = product[it][0];
            }
        }
        let quantity = document.getElementsByClassName('qty');
        dataProductToCart.quantity = quantity[0].value;

        let size = document.getElementById('size');
        for(let item of size.childNodes) {
            if(item.className === 'selected') {
                dataProductToCart.size = item.innerText;
            }
        }
        currentCartItems.push(dataProductToCart);

        function localStorageSet(ar) {
            localStorage.setItem('dataCart', JSON.stringify(ar));
        }

        localStorageSet(currentCartItems);

    });
}


function defaultSelectedSize() {
    let size = document.getElementById('size');
    size.children[0].classList.add('selected');
}

function viewPhoto() {
    document.getElementById('all-photo').addEventListener('click', function(e){
        let photoToView = document.getElementById('photo-to-view');
        let dataSrc = e.target.getAttribute('src');
        photoToView.setAttribute('src', dataSrc);
    });
}

function determineAvailability(quantity) {
    if(quantity === "0") {
        return 'Not available';
    } else {
        return 'In stock';
    }
}

function notAvailableStyle() {
    let size = document.getElementById('size');

    if(size.dataset['quantity'] === "0") {
        for(let item of size.children) {
            if(item.tagName === 'DIV') {
                item.classList.add('disabled');
            }
        }
        notAddToCart();
        document.getElementById('qty').setAttribute('disabled', true);
        let arrows = document.getElementsByClassName('items-count');
        for(let it of arrows) {
            it.classList.add('disabled');
        }
    }
}

function notAddToCart() {
    let addCart = document.getElementById('add-cart');
    addCart.classList.add('disabled');
    addCart.addEventListener('click', function (e) {
        e.preventDefault();
    }, false);
}

