"use strict";function _createForOfIteratorHelper(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=_unsupportedIterableToArray(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,n,o=!0,c=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return o=t.done,t},e:function(t){c=!0,n=t},f:function(){try{o||null==a.return||a.return()}finally{if(c)throw n}}}}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}var tempArr=[];function showCategoriesList(e,t){var r=document.querySelector(".common-filter-categories");r.innerHTML="",r.insertAdjacentHTML("beforeend",'<div class="head">'.concat(t,'</div><form id="formCategories"><ul class="collection-categories"></ul></form>'));var a=document.querySelector(".collection-categories"),n=0;"all"===e?Object.keys(dataObj).forEach(function(e){Object.values(dataObj[e]).forEach(function(t){return n=t.length}),Object.keys(dataObj[e]).forEach(function(t){return a.insertAdjacentHTML("beforeend",'<li class="filter-list"><input class="pixel-radio" type="radio" id="'.concat(e).concat(t,'" name="categories"><label for="').concat(e).concat(t,'" data-collection="').concat(e,'" data-categories="').concat(t,'">').concat(e," ").concat(t,"<span> (").concat(n,")</span></label></li>"))})}):e&&(Object.values(dataObj[e]).forEach(function(t){return n=t.length}),Object.keys(dataObj[e]).forEach(function(t){a.insertAdjacentHTML("beforeend",'\n\t\t\t\t<li class="filter-list" data-collection="'.concat(e,'" data-categories="').concat(t,'"><input class="pixel-radio" type="radio" id="').concat(t,'" name="categories"><label for="').concat(t,'" data-collection="').concat(e,'" data-categories="').concat(t,'">').concat(e," ").concat(t,"<span> (").concat(n,")</span></label></li>\n\t\t\t"))}))}function showBrands(t,e){var r=document.querySelector(".common-filter-brands");r.innerHTML="",r.insertAdjacentHTML("beforeend",'<div class="head">Brands</div>'),r.insertAdjacentHTML("beforeend",'<form id="formBrands"><ul class="brands-filter"></ul></form>');var a=document.querySelector(".brands-filter"),n=[];if("all"===t)Object.keys(dataObj).forEach(function(t){return Object.values(dataObj[t]).forEach(function(t){return t.forEach(function(t){return n.push(t.brand)})})});else if(t&&!e)Object.values(dataObj[t]).forEach(function(t){return t.forEach(function(t){return n.push(t.brand)})});else if(t&&e){var o=dataObj[t];Object.values(o[e]).forEach(function(t){return n.push(t.brand)})}_toConsumableArray(new Set(n)).forEach(function(t){return a.insertAdjacentHTML("beforeend",'<li class="filter-list"><input class="pixel-radio" type="radio" id="'.concat(t,'" name="brand"><label for="').concat(t,'" data-brand="').concat(t,'">').concat(t,"</label></li>"))}),setListenerToBrands(a,t,e)}function showPriceFilter(){document.querySelector(".common-filter-price").insertAdjacentHTML("beforeend",'\n\t\t<div class="head">Price</div>\n\t\t<div class="price-range-area">\n\t\t\t<div class="value-wrapper d-flex flex-column">\n\t\t\t\t<form id="formPriceFilter">\n\t\t\t\t\t<label for="minPrice" class="price">Min($): \n\t\t\t\t\t\t<input class="input-price" type="text" name="minPrice" id="minPrice" placeholder="min value">\n\t\t\t\t\t</label>\n\t\t\t\t\t<label for="maxPrice" class="price">Max($):\n\t\t\t\t\t\t<input class="input-price" type="text" name="maxPrice" id="maxPrice" placeholder="max value">\n\t\t\t\t\t</label>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t'),setListenerToPriceFilter()}function productCardHtml(t,e,r,a){a.insertAdjacentHTML("beforeend",'\n\t\t<div class="col-md-6 col-lg-4 product-card" data-collection="'.concat(t,'" data-category="').concat(e,'" data-id="').concat(r.id,'">\n\t\t\t<div class="card text-center card-product">\n\t\t\t\t<div class="card-product__img">\n\t\t\t\t\t<img class="card-img" src="img/product/').concat(t,"/").concat(r.photo[0],'" alt="">\n\t\t\t\t\t<ul class="card-product__imgOverlay">\n\t\t\t\t\t\t<li><button class="open-product" data-collection="').concat(t,'" data-category="').concat(e,'" data-id="').concat(r.id,'" data-btn="open-product"><i class="ti-search" data-collection="').concat(t,'" data-category="').concat(e,'" data-id="').concat(r.id,'" data-btn="open-product"></i></button></li>\n\t\t\t\t\t\t<li><button class="buy-product" data-collection="').concat(t,'" data-category="').concat(e,'" data-id="').concat(r.id,'" data-btn="buy-product"><i class="ti-shopping-cart" data-collection="').concat(t,'" data-category="').concat(e,'" data-id="').concat(r.id,'" data-btn="buy-product"></i></button></li>\t\t\t\t\t\t\t\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class="card-body">\n\t\t\t\t\t<p>').concat(e,'</p>\n\t\t\t\t\t<h4 class="card-product__title"><a href="single-product.html" class="open-product" data-collection="').concat(t,'" data-category="').concat(e,'" data-id="').concat(r.id,'" data-btn="open-product">').concat(r.name,'</a></h4>\n\t\t\t\t\t<p class="card-product__price">$').concat(r.price,"</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>"))}function showProducts(r,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:999999,c=document.querySelector(".row-products-list"),t=dataObj[r],i=[];if(c.innerHTML="","all"!==r&&r){if(r&&e)Object.values(t[e]).forEach(function(t){+t.price>=+n&&+t.price<=+o&&(productCardHtml(r,e,t,c),t.collection=r,t.category=e,i.push(t))});else if(r&&!e){var a=function(e){t[e].forEach(function(t){+t.price>=+n&&+t.price<=+o&&(productCardHtml(r,e,t,c),t.collection=r,t.category=e,i.push(t))})};for(var l in t)a(l)}}else{var s=function(r){function t(e){a[e].forEach(function(t){+t.price>=+n&&+t.price<=+o&&(productCardHtml(r,e,t,c),t.collection=r,t.category=e,i.push(t))})}var a=dataObj[r];for(var e in a)t(e)};for(var d in dataObj)s(d)}tempArr=[].concat(i)}function setListenerToCollections(t){t.addEventListener("click",function(t){var e=t.target.getAttribute("id");t.stopPropagation(),e&&(showProducts(e),showCategoriesList(e,"Categories"),showBrands(e))}),showProducts()}function setListenerToCategories(){document.querySelector(".common-filter-categories").addEventListener("click",function(t){var e=t.target.getAttribute("data-categories"),r=t.target.getAttribute("data-collection");(r||e)&&(showProducts(r,e),showBrands(r,e))})}function setListenerToBrands(t,i,l){t.addEventListener("click",function(t){var n=document.querySelector(".row-products-list"),o=t.target.getAttribute("id"),r=dataObj[i],c=[];if(o&&(n.innerHTML=""),o&&"all"!==i&&l)r[l].filter(function(t){t.brand===o&&(productCardHtml(i,l,t,n),t.collection=i,t.category=l,c.push(t))});else if(o&&"all"!==i&&!l){var e=function(e){r[e].filter(function(t){t.brand===o&&(productCardHtml(i,e,t,n),t.collection=i,t.category=e,c.push(t))})};for(var a in r)e(a)}else o&&"all"===i&&Object.keys(dataObj).forEach(function(r){function t(e){a[e].filter(function(t){t.brand===o&&(productCardHtml(r,e,t,n),t.collection=r,t.category=e,c.push(t))})}var a=dataObj[r];for(var e in a)t(e)});tempArr=[].concat(c)})}function setListenerToProductCard(t){var c=document.querySelectorAll(".open-product");t.addEventListener("click",function(t){var e=t.target.getAttribute("data-id"),r=t.target.getAttribute("data-collection"),a=t.target.getAttribute("data-btn");if("I"===t.target.tagName&&(a=t.target.parentNode.getAttribute("data-btn"),t.stopPropagation()),"open-product"===a)setDataInLocalStorage(r,e),c.forEach(function(t){return location.href="/single-product.html"});else if("buy-product"===a){var n=dataObj[r],o={};Object.values(n).forEach(function(t){t.forEach(function(t){e===t.id&&(o.collection=r,o.id=e,o.name=t.name,o.photo=t.photo[0],o.price=t.price,o.quantity="1",o.size=t.size[0])})}),setBuyProductInLS(o)}})}function setListenerToPriceFilter(){var e=document.forms.formPriceFilter;e.addEventListener("click",function(t){setTimeout(function(){priceFilter(e.elements.minPrice.value,e.elements.maxPrice.value)},3e3)})}function setListenerToSortSelection(t){var e=document.querySelector(".product-sorting"),r=document.querySelector(".product-show-quantity"),a=document.querySelector(".row-products-list");e.addEventListener("click",function(){return sortProducts(e.value,a,t)}),r.addEventListener("click",function(){return showQuantityProductsOnThePage(r.value,a,t)})}function priceFilter(n,o){var c,i,t=[document.forms.formCollection,document.forms.formCategories,document.forms.formBrands];priceFilterValidation(n,o)&&t.forEach(function(t){var e,r=_createForOfIteratorHelper(t.elements);try{for(r.s();!(e=r.n()).done;){var a=e.value;a.checked&&("collection"===a.name&&(c=a.id),"categories"===a.name&&(i=a.id),showProducts(c,i,n,o))}}catch(t){r.e(t)}finally{r.f()}})}function priceFilterValidation(t,e){var r=document.getElementById("minPrice"),a=document.getElementById("maxPrice");return isNaN(+t)||!t?(r.classList.add("error"),a.classList.remove("error"),!1):isNaN(+e)||!e?(r.classList.remove("error"),a.classList.add("error"),!1):(r.classList.remove("error"),a.classList.remove("error"),!0)}function sortProducts(t,e){var r=[];switch(Array.isArray(tempArr[0])?tempArr.forEach(function(t){return t.forEach(function(t){return r.push(t)})}):r=tempArr,e.innerHTML="",t){case"default":r.sort(arraySortingByID);break;case"popularity":case"newest-arrivals":r.sort(randomSorting);break;case"price-low-to-high":r.sort(arraySorting);break;case"price-high-to-low":r.sort(arraySorting).reverse()}r.forEach(function(t){return productCardHtml(t.collection,t.category,t,e)}),tempArr=r}function arraySorting(t,e){return+t.price>+e.price?1:+t.price==+e.price?0:+t.price<+e.price?-1:void 0}function arraySortingByID(t,e){return+t.id>+e.id?1:+t.id==+e.id?0:+t.id<+e.id?-1:void 0}function randomSorting(){return Math.random()-.5}function showQuantityProductsOnThePage(t,e){e.innerHTML="";var r=_toConsumableArray(tempArr),a=[],n=Math.ceil(r.length/t);if("show all"===t)return tempArr.forEach(function(t){return productCardHtml(t.collection,t.category,t,e)}),void showPagesPaginationButtons("all");for(var o=0,c=0;o<n;o++){var i=r.slice(c,+t+c);c+=+t,a.push(i)}showPagesPaginationButtons(n,tempArr=a,e),tempArr[0].forEach(function(t){return productCardHtml(t.collection,t.category,t,e)})}function showPagesPaginationButtons(t,e,r){var a=document.querySelector(".product-pages");if(a.innerHTML="","all"!==t&&1!==t){var n=document.createElement("ul");n.classList.add("number-pages-list"),a.appendChild(n),n.insertAdjacentHTML("beforeend",'<li class="pages-item" data-page-number="prev"><< Prev<li>');for(var o=1;o<t+1;o++)1===o?n.insertAdjacentHTML("beforeend",'<li class="pages-item pages-item-number active" data-page-number="'.concat(o,'">').concat(o,"<li>")):n.insertAdjacentHTML("beforeend",'<li class="pages-item pages-item-number" data-page-number="'.concat(o,'">').concat(o,"<li>"));n.insertAdjacentHTML("beforeend",'<li class="pages-item" data-page-number="next">Next >><li>'),setListenerToPageButtons(n,e,r)}}function setListenerToPageButtons(t,r,a){var n=0,o=document.querySelectorAll(".pages-item-number");t.addEventListener("click",function(t){var e=t.target.getAttribute("data-page-number");e&&("next"===e?++n===r.length&&(n=r.length-1):"prev"===e?--n<0&&(n=0):n=e-1,n===r.length?n=r.length-1:n<0&&(n=0),o.forEach(function(t){t.classList.contains("active")&&+e!==n&&t.classList.remove("active")}),o[n].classList.add("active"),a.innerHTML="",r[n].forEach(function(t){return productCardHtml(t.collection,t.category,t,a)}))})}function setListenersTosearchArea(){var t=document.getElementById("searchProduct"),e=document.getElementById("productBtnSearch");t.oninput=function(){searchProduct(t.value.toLowerCase().trim())},e.addEventListener("click",function(){return searchProduct(t.value)})}function searchProduct(e){var t=document.querySelectorAll(".product-card");""!==e?t.forEach(function(t){-1===t.innerText.toLowerCase().search(e)?t.classList.add("hide"):t.classList.remove("hide")}):t.forEach(function(t){return t.classList.remove("hide")})}function setDataInLocalStorage(t,e){console.log(t),console.log(e);var r={collection:t,id:e};console.log(r),localStorage.setItem("dataSelectedObj",JSON.stringify(r))}function setBuyProductInLS(t){var e=[];localStorage.getItem("dataCart")&&(e=getDataFromLSShoppingCart()),e.push(t),localStorage.setItem("dataCart",JSON.stringify(e))}function getDataFromLSShoppingCart(){return JSON.parse(localStorage.getItem("dataCart"))}!function(){var t=document.querySelector(".sidebar-categories");t.insertAdjacentHTML("beforeend",'<div class="head">Collection</div>'),t.insertAdjacentHTML("beforeend",'<form id="formCollection"><ul class="main-collection"></ul></form>');var a=document.querySelector(".main-collection"),e=document.querySelector(".row-products-list"),n=0;Object.keys(dataObj).forEach(function(t){var e=0,r=dataObj[t];Object.keys(r).forEach(function(t){e+=r[t].length,n+=r[t].length}),a.insertAdjacentHTML("beforeend",'<li class="filter-list collection-item"><input class="pixel-radio" type="radio" id="'.concat(t,'" name="collection"><label for="').concat(t,'">').concat(t,"'s<span> (").concat(e,")</span></label></li>"))}),a.insertAdjacentHTML("afterbegin",'<li class="filter-list collection-item"><input class="pixel-radio" type="radio" id="all" name="collection" checked><label for="all">All<span> ('.concat(n,")</span></label></li>")),showCategoriesList("all","Categories"),showBrands("all"),setListenerToCollections(t),setListenerToSortSelection(),showPriceFilter(),setListenerToProductCard(e),setListenerToCategories(),setListenersTosearchArea()}();