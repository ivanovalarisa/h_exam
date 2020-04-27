'use strict';

function showTrendingProduct(product) {    
    const container = document.getElementById('trendProducts');
    container.insertAdjacentHTML('beforeend', `
        <div class="col-md-6 col-lg-4 col-xl-3 product-card" data-collection="${ product.collection }" data-id="${ product.id }">
        <div class="card text-center card-product">
            <div class="card-product__img">
                <img class="card-img" src="img/product/${product.collection}/${product.photo[0]}" alt="">    
                <ul class="card-product__imgOverlay">
                    <li><button class="open-product" data-collection="${ product.collection }" data-id="${ product.id }" data-btn="open-product"><i class="ti-search" data-collection="${ product.collection }" data-id="${ product.id }" data-btn="open-product"></i></button></li>
                    <li><button class="buy-product" data-collection="${ product.collection }" data-id="${ product.id }" data-btn="buy-product"><i class="ti-shopping-cart" data-collection="${ product.collection }" data-id="${ product.id }" data-btn="buy-product"></i></button></li>
                </ul>
            </div>
             <div class="card-body">
                <p>${product.collection}</p>
                <h4 class="card-product__title"><a href="single-product.html" class="open-product" data-collection="${ product.collection }" data-id="${ product.id }" data-btn="open-product">${product.name}</a></h4>
                <p class="card-product__price">$${product.price}</p>
            </div>
        </div>
        </div>
    `);

}

function getTrendingProduct() {
    setListenerToProductCard();
    let arr = [];

    Object.keys(dataObj).forEach(key => {
        let collection = dataObj[key];
        Object.values(collection).forEach(category => {
            category.forEach(product => {
                product.collection = key;
                arr.push(product);
            });
        });
    });
    
    for (let i = 0; i < 8; i++) {
        let index = parseInt(getRandom(0, arr.length));
        showTrendingProduct(arr[index]);              
    }
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

getTrendingProduct();


function setListenerToProductCard() {
    const container = document.getElementById('trendProducts');
	const openProduct = document.querySelectorAll('.open-product');
	// const buyProduct = document.querySelectorAll('.buy-product');

	container.addEventListener('click', (event) => {
		const productId = event.target.getAttribute('data-id');
		const productCollection = event.target.getAttribute('data-collection');
		let btn = event.target.getAttribute('data-btn');		
		
		if (event.target.tagName === 'I') {
			btn = event.target.parentNode.getAttribute('data-btn');	
			event.stopPropagation();					
		}		

		if (btn === 'open-product') {

			setDataInLocalStorageTrend(productCollection, productId);
			openProduct.forEach(btn => location.href="/single-product.html");			
			
		} else if (btn === 'buy-product') {
			const collection = dataObj[productCollection];
			let item = {};

			Object.values(collection).forEach(categories => {
				categories.forEach(product => {
					if (productId === product.id) {
						item.collection = productCollection,
						item.id = productId;
						item.name = product.name;
						item.photo = product.photo[0];
						item.price = product.price;
						item.quantity = "1";
						item.size = product.size[0];		
					}
				});		
			});

			setBuyProductInLS(item);		}		
	});
}

function setDataInLocalStorage(collection, id) {
	console.log(collection);
	console.log(id);
	
	let data = {
		collection: collection, 
		id: id
	};

	console.log(data);
	
	localStorage.setItem('dataSelectedObj', JSON.stringify(data));
}

function setDataInLocalStorageTrend(collection, id) {
	console.log(collection);
	console.log(id);
	
	let data = {
		collection: collection, 
		id: id
	};

	console.log(data);
	
	localStorage.setItem('dataSelectedObj', JSON.stringify(data));
}

function setBuyProductInLS(item) {
	let dataCardGoods = [];

	if (localStorage.getItem('dataCart')) {

		dataCardGoods = getDataFromLSShoppingCart();		
	}

	dataCardGoods.push(item);
	let quantity = dataCardGoods.length;
	showQuantityGoodsInBasket(quantity);
	localStorage.setItem('dataCart', JSON.stringify(dataCardGoods));
}

function getDataFromLSShoppingCart() {
	let dataCardGoods = JSON.parse(localStorage.getItem('dataCart'));
	return dataCardGoods;
}

function showQuantityGoodsInBasket(quantityGoods) {
	document.getElementById('show').innerHTML = quantityGoods;
}