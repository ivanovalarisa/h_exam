'use strict';

let tempArr = [];

(function showCollectionList() {
	const container = document.querySelector('.sidebar-categories');
	container.insertAdjacentHTML('beforeend', `<div class="head">Collection</div>`);
	container.insertAdjacentHTML('beforeend', `<form id="formCollection"><ul class="main-collection"></ul></form>`);
	const collectionList = document.querySelector('.main-collection');
	const containerProducts = document.querySelector('.row-products-list');
	
	let totalAmount = 0;    
	
	Object.keys(dataObj).forEach((collectionItem) => {
		let amount = 0;
		let collItems = dataObj[collectionItem];

		Object.keys(collItems).forEach((item) => {
			amount += collItems[item].length;
			totalAmount += collItems[item].length;
		});
		
		collectionList.insertAdjacentHTML('beforeend', `<li class="filter-list collection-item"><input class="pixel-radio" type="radio" id="${collectionItem}" name="collection"><label for="${collectionItem}">${collectionItem}'s<span> (${amount})</span></label></li>`);		
	});

	collectionList.insertAdjacentHTML('afterbegin', `<li class="filter-list collection-item"><input class="pixel-radio" type="radio" id="all" name="collection" checked><label for="all">All<span> (${totalAmount})</span></label></li>`);
	
	showCategoriesList('all', 'Categories');
	showBrands('all');
	setListenerToCollections(container);
	setListenerToSortSelection();
	showPriceFilter();
	setListenerToProductCard(containerProducts);
	setListenerToCategories();
	setListenersTosearchArea();
})();

function showCategoriesList(selectedCollection, title) {
	const container = document.querySelector('.common-filter-categories');
	container.innerHTML = '';
	container.insertAdjacentHTML('beforeend', `<div class="head">${title}</div><form id="formCategories"><ul class="collection-categories"></ul></form>`);
	const collectionCategories = document.querySelector('.collection-categories');
	let amount = 0;

	if (selectedCollection === 'all') {
		Object.keys(dataObj).forEach((collection) => {
			Object.values(dataObj[collection]).forEach(quantity => amount = quantity.length);
			
			Object.keys(dataObj[collection]).forEach(categories => collectionCategories.insertAdjacentHTML('beforeend', `<li class="filter-list"><input class="pixel-radio" type="radio" id="${collection}${categories}" name="categories"><label for="${collection}${categories}" data-collection="${collection}" data-categories="${categories}">${collection} ${categories}<span> (${amount})</span></label></li>`));			
		});			

	} else if (selectedCollection) {
		Object.values(dataObj[selectedCollection]).forEach(quantity => amount = quantity.length);

		Object.keys(dataObj[selectedCollection]).forEach((categories) => {
			collectionCategories.insertAdjacentHTML('beforeend', `
				<li class="filter-list" data-collection="${selectedCollection}" data-categories="${categories}"><input class="pixel-radio" type="radio" id="${categories}" name="categories"><label for="${categories}" data-collection="${selectedCollection}" data-categories="${categories}">${selectedCollection} ${categories}<span> (${amount})</span></label></li>
			`);
		});
	}
}

function showBrands(selectedCollection, selectedCategory) {
	const container = document.querySelector('.common-filter-brands');
	container.innerHTML = '';
	container.insertAdjacentHTML('beforeend', `<div class="head">Brands</div>`);
	container.insertAdjacentHTML('beforeend', `<form id="formBrands"><ul class="brands-filter"></ul></form>`);
	const brandsContainer = document.querySelector('.brands-filter');	
	const tempArrBrands = [];
	
	if (selectedCollection === 'all') {
		Object.keys(dataObj).forEach(keys => Object.values(dataObj[keys]).forEach(categories => categories.forEach(product => tempArrBrands.push(product.brand))));
	} else if (selectedCollection && !selectedCategory) {
		Object.values(dataObj[selectedCollection]).forEach(categories => categories.forEach(product => tempArrBrands.push(product.brand)));
	} else if (selectedCollection && selectedCategory) {
		const tempObj = dataObj[selectedCollection];		
		Object.values(tempObj[selectedCategory]).forEach(product => tempArrBrands.push(product.brand));
	}

	const sortedBrands = [...(new Set(tempArrBrands))];
	sortedBrands.forEach(brandItem => brandsContainer.insertAdjacentHTML('beforeend', `<li class="filter-list"><input class="pixel-radio" type="radio" id="${brandItem}" name="brand"><label for="${brandItem}" data-brand="${brandItem}">${brandItem}</label></li>`));

	setListenerToBrands(brandsContainer, selectedCollection, selectedCategory);
}

function showPriceFilter() {
	const container = document.querySelector('.common-filter-price');

	container.insertAdjacentHTML('beforeend', `
		<div class="head">Price</div>
		<div class="price-range-area">
			<div class="value-wrapper d-flex flex-column">
				<form id="formPriceFilter">
					<label for="minPrice" class="price">Min($): 
						<input class="input-price" type="text" name="minPrice" id="minPrice" placeholder="min value">
					</label>
					<label for="maxPrice" class="price">Max($):
						<input class="input-price" type="text" name="maxPrice" id="maxPrice" placeholder="max value">
					</label>
				</form>
			</div>
		</div>
	`);

	setListenerToPriceFilter();
}

function productCardHtml(collection, category, product, container) {
	container.insertAdjacentHTML('beforeend', `
		<div class="col-md-6 col-lg-4 product-card" data-collection="${ collection }" data-category="${ category }" data-id="${ product.id }">
			<div class="card text-center card-product">
				<div class="card-product__img">
					<img class="card-img" src="img/product/${ collection }/${ product.photo[0] }" alt="">
					<ul class="card-product__imgOverlay">
						<li><button class="open-product" data-collection="${ collection }" data-category="${ category }" data-id="${ product.id }" data-btn="open-product"><i class="ti-search" data-collection="${ collection }" data-category="${ category }" data-id="${ product.id }" data-btn="open-product"></i></button></li>
						<li><button class="buy-product" data-collection="${ collection }" data-category="${ category }" data-id="${ product.id }" data-btn="buy-product"><i class="ti-shopping-cart" data-collection="${ collection }" data-category="${ category }" data-id="${ product.id }" data-btn="buy-product"></i></button></li>							
					</ul>
				</div>
				<div class="card-body">
					<p>${ category }</p>
					<h4 class="card-product__title"><a href="single-product.html" class="open-product" data-collection="${ collection }" data-category="${ category }" data-id="${ product.id }" data-btn="open-product">${ product.name }</a></h4>
					<p class="card-product__price">$${ product.price }</p>
				</div>
			</div>
		</div>`
	);
}

function showProducts(selectedCollection, selectedCategory, min = 0, max = 999999) {
	const container = document.querySelector('.row-products-list');
	const productCollection = dataObj[selectedCollection];
	let tempProductArr = [];
	container.innerHTML = '';

	if (selectedCollection === 'all' || !selectedCollection) {
		for (let collection in dataObj) {
			let allProducts = dataObj[collection];
			for (let category in allProducts) {	
				allProducts[category].forEach(product => {
					if (+product.price >= +min && +product.price <= +max) {
						productCardHtml(collection, category, product, container);
						product.collection = collection;
						product.category = category;
						tempProductArr.push(product);
					}
				});
			}
		}

	} else if (selectedCollection && selectedCategory) {
		Object.values(productCollection[selectedCategory]).forEach(product => {
			if (+product.price >= +min && +product.price <= +max) {
				productCardHtml(selectedCollection, selectedCategory, product, container);
				product.collection = selectedCollection;
				product.category = selectedCategory;
				tempProductArr.push(product);
			}
		});

	} else if (selectedCollection && !selectedCategory) {
		for (let category in productCollection) {
			productCollection[category].forEach(product => {
				if (+product.price >= +min && +product.price <= +max) {
					productCardHtml(selectedCollection, category, product, container);
					product.collection = selectedCollection;
					product.category = category;
					tempProductArr.push(product);
				}
			});
		}
	}
	
	tempArr = [...tempProductArr];
	// getTempArrProducts(tempProductArr);
}

function setListenerToCollections(container) {	
    container.addEventListener('click', (event) => {
		const selectedCollection = event.target.getAttribute('id');
        event.stopPropagation();
		
        if (!selectedCollection) {
			return;
		}

		showProducts(selectedCollection);
		showCategoriesList(selectedCollection, 'Categories');
		showBrands(selectedCollection);	
	});
	
	showProducts();
}

function setListenerToCategories() {
	const container = document.querySelector('.common-filter-categories');
	container.addEventListener('click', (event) => {
		const selectedCategory = event.target.getAttribute('data-categories');
		const selectedCollection = event.target.getAttribute('data-collection');
		
		if (!selectedCollection && !selectedCategory) {
			return;
		}

		showProducts(selectedCollection, selectedCategory);
		showBrands(selectedCollection, selectedCategory);
	});
}

function setListenerToBrands(brandsContainer, selectedCollection, selectedCategory) {
	
	brandsContainer.addEventListener('click', event => {
		const container = document.querySelector('.row-products-list');
		const selectedBrand = event.target.getAttribute('id');
		const collectionObj = dataObj[selectedCollection];
		const tempProductArr = [];
		
		if (selectedBrand) {
			container.innerHTML = '';
		}

		if (selectedBrand && selectedCollection !== 'all' && selectedCategory) {
			collectionObj[selectedCategory].filter((product) => {
				if (product.brand === selectedBrand) {
					productCardHtml(selectedCollection, selectedCategory, product, container);
					product.collection = selectedCollection;
					product.category = selectedCategory;
					tempProductArr.push(product);				
				}
			});
			
		} else if (selectedBrand && selectedCollection !== 'all' && !selectedCategory) {
			for (let category in collectionObj) {
				collectionObj[category].filter(product => {
					if (product.brand === selectedBrand) {				
						productCardHtml(selectedCollection, category, product, container);
						product.collection = selectedCollection;
						product.category = category;
						tempProductArr.push(product);						
					}
				});	
			}
			
		} else if (selectedBrand && selectedCollection === 'all') {
			Object.keys(dataObj).forEach(collection => {
				let collectionObj = dataObj[collection];
	
				for (let category in collectionObj) {
					collectionObj[category].filter(product => {
						if (product.brand === selectedBrand) {
							productCardHtml(collection, category, product, container);
							product.collection = collection;
							product.category = category;
							tempProductArr.push(product);						
						}
					});				
				}
			});		
		}
		// getTempArrProducts(tempProductArr);
		tempArr = [...tempProductArr]		
	});
}

function setListenerToProductCard(container) {
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

			setDataInLocalStorage(productCollection, productId);
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

function setListenerToPriceFilter() {
	const formPrice = document.forms.formPriceFilter;
	
	formPrice.addEventListener('click', (event) => {
		setTimeout(() => {
			const minValuePrice = formPrice.elements.minPrice.value;
			const maxValuePrice = formPrice.elements.maxPrice.value;			

			priceFilter(minValuePrice, maxValuePrice);
			
		}, 3000);
	});	
}

function setListenerToSortSelection(tempArr) {
	const selectionSort = document.querySelector('.product-sorting');
	const selectionQuantity = document.querySelector('.product-show-quantity');
	const productContainer = document.querySelector('.row-products-list');

	// selectionSort.addEventListener('click', () => sortProducts(selectionSort.value, productContainer));
	// selectionQuantity.addEventListener('click', () => showQuantityProductsOnThePage(selectionQuantity.value, productContainer));
	selectionSort.addEventListener('click', () => sortProducts(selectionSort.value, productContainer, tempArr));
	selectionQuantity.addEventListener('click', () => showQuantityProductsOnThePage(selectionQuantity.value, productContainer, tempArr));
}

function priceFilter(min, max) {
	const formCollection = document.forms.formCollection;
	const formCategories = document.forms.formCategories;
	const formBrands = document.forms.formBrands;
	let formArr = [formCollection, formCategories, formBrands];
	let selectedCollection;
	let selectedCategory;

	if (priceFilterValidation(min, max)) {
		formArr.forEach(item => {
			for (let input of item.elements) {
				if (input.checked) {
	
					if (input.name === 'collection') {
						selectedCollection = input.id;
					}
					
					if (input.name === 'categories') {
						selectedCategory = input.id;
					}
	
					showProducts(selectedCollection, selectedCategory, min, max);
				}
			}
		});
	}

}

function priceFilterValidation(min, max) {
	const minInput = document.getElementById('minPrice');
	const maxInput = document.getElementById('maxPrice');

	if (isNaN(+min) || !min) {
		minInput.classList.add('error');
		maxInput.classList.remove('error');
		return false;
	} else if (isNaN(+max) || !max) {
		minInput.classList.remove('error');
		maxInput.classList.add('error');
		return false;
	}
	
	minInput.classList.remove('error');
	maxInput.classList.remove('error');

	return true;
}

function sortProducts(sortOption, productContainer) {
	let arrayOfProductsObj = [];

	if (Array.isArray(tempArr[0])) { 
		tempArr.forEach(item => item.forEach(value => arrayOfProductsObj.push(value)));
	} else {
		arrayOfProductsObj = tempArr;
	}

	productContainer.innerHTML = '';

	switch (sortOption) {
		case 'default':			
			arrayOfProductsObj.sort(arraySortingByID);
			break;
			
		case 'popularity': 
			arrayOfProductsObj.sort(randomSorting);
			break;

		case 'newest-arrivals': 
			arrayOfProductsObj.sort(randomSorting);			
			break;
			
		case 'price-low-to-high': 
			arrayOfProductsObj.sort(arraySorting);	
			break;
			
		case 'price-high-to-low': 
			arrayOfProductsObj.sort(arraySorting).reverse();
			break;
	}

	arrayOfProductsObj.forEach(item => productCardHtml(item.collection, item.category, item, productContainer));
	tempArr = arrayOfProductsObj;
}

function arraySorting(productA, productB) {
	if (+productA.price > +productB.price) {
		return 1;
	} else if (+productA.price === +productB.price) {
		return 0;
	} else if (+productA.price < +productB.price) {
		return -1;
	}
}

function arraySortingByID(productA, productB) {
	if (+productA.id > +productB.id) {
		return 1;
	} else if (+productA.id === +productB.id) {
		return 0;
	} else if (+productA.id < +productB.id) {
		return -1;
	}
}

function randomSorting() {
	return Math.random() - 0.5;
}

function showQuantityProductsOnThePage(sortOption, productContainer) {
	productContainer.innerHTML = '';

	const productsArr = [...tempArr];
	let newArr = [];
	let arrParts = Math.ceil(productsArr.length / +sortOption);	
	
	
	if (sortOption === 'show all') {
		tempArr.forEach(item => productCardHtml(item.collection, item.category, item, productContainer));
		showPagesPaginationButtons('all');
		return;
	} 

	for (let i = 0, j = 0; i < arrParts; i++) {
		let arr = productsArr.slice(j, +sortOption + j);				
		j += +sortOption;
		newArr.push(arr);
	}

	tempArr = newArr;
	showPagesPaginationButtons(arrParts, tempArr, productContainer);

	tempArr[0].forEach(item => productCardHtml(item.collection, item.category, item, productContainer));
}

function showPagesPaginationButtons(length, newArr, productContainer) {
	const numbersContainer = document.querySelector('.product-pages');
	numbersContainer.innerHTML = '';
	
	if (length === 'all' || length === 1) return;

	const list = document.createElement('ul');
	list.classList.add('number-pages-list');
	numbersContainer.appendChild(list);

	list.insertAdjacentHTML('beforeend', '<li class="pages-item" data-page-number="prev"><< Prev<li>');

	for (let i = 1; i < length + 1; i++) {
		if (i === 1) {
			list.insertAdjacentHTML('beforeend', `<li class="pages-item pages-item-number active" data-page-number="${i}">${i}<li>`);
		} else {
			list.insertAdjacentHTML('beforeend', `<li class="pages-item pages-item-number" data-page-number="${i}">${i}<li>`);
		}
	}

	list.insertAdjacentHTML('beforeend', '<li class="pages-item" data-page-number="next">Next >><li>');

	setListenerToPageButtons(list, newArr, productContainer);
}

function setListenerToPageButtons(list, array, container) {
	let index = 0;
	const btnList = document.querySelectorAll('.pages-item-number');

	list.addEventListener('click', (event) => {
		const btn = event.target.getAttribute('data-page-number');
		
			
		
		if (!btn) {
			return;
		} else if (btn === 'next') {
			++index;

			if (index === array.length) {
				index = array.length - 1;
			}

		} else if (btn === 'prev') {
			--index;

			if (index < 0) {
				index = 0;
			}
			
		} else {
			index = +btn -1;
		}
		
		if (index === array.length) {
			index = array.length - 1;
		} else if (index < 0) {
			index = 0;
		}
		
		btnList.forEach(item => {
			if (item.classList.contains('active') && +btn !== index) {
				item.classList.remove('active');
			}
		});
		
		btnList[index].classList.add('active');		

		container.innerHTML = '';
		array[index].forEach(product => productCardHtml(product.collection, product.category, product, container));
	});
}

function setListenersTosearchArea() {
	const dataSearch = document.getElementById('searchProduct');
	const btnSearch = document.getElementById('productBtnSearch');
	
	dataSearch.oninput = () => {
		searchProduct(dataSearch.value.toLowerCase().trim());
	}
	
	btnSearch.addEventListener('click', () => searchProduct(dataSearch.value));
}

function searchProduct(string) {
	const productList = document.querySelectorAll('.product-card');

	if (string !== '') {
		productList.forEach(product => {
			if (product.innerText.toLowerCase().search(string) === -1) {
				product.classList.add('hide');
			} else {
				product.classList.remove('hide');
			}
		});
	} else {
		productList.forEach(product => product.classList.remove('hide'));
	}
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