'use strict';

addDataProductToCart();

function addDataProductToCart() {

    let tbody = document.getElementById('tbody');
    if(tbody.length !== 0) {
        for (let i = tbody.childNodes.length - 1; i > 0; i--) {
            tbody.removeChild(tbody.childNodes[i]);
        }
    }

    const getDataFromLocalStorage = () => JSON.parse(localStorage.getItem('dataCart'));

    if (localStorage.getItem('dataCart')) {
        getDataFromLocalStorage();
    }
    const dataCart = getDataFromLocalStorage();

    let quant = dataCart.length;
    showQuantityGoodsInBasket(quant);

    for(let it in dataCart) {
        tbody.insertAdjacentHTML('beforeend', `
                            <tr data-id="${dataCart[it].id}">
                              <td>
                                  <div class="media">
                                      <div class="d-flex">
                                          <img src="img/product/${dataCart[it].collection}/${dataCart[it].photo}" alt="">
                                      </div>
                                      <div class="media-body">
                                          <p>${dataCart[it].name + ' ' + '(' + dataCart[it].size + ')'}</p>
                                      </div>
                                  </div>
                              </td>
                              <td>
                                  <h5>$${dataCart[it].price}</h5>
                              </td>
                              <td>
                                  <div class="product_count" data-price="${dataCart[it].price}" data-id="${dataCart[it].id}">
                                      <button class="reduced items-count" type="button"><i class="ti-angle-left"></i></button>
                                      <input type="text" name="qty" size="2" maxlength="12" value="${dataCart[it].quantity}" title="Quantity:" class="input-text qty">
                                      <button class="increase items-count" type="button"><i class="ti-angle-right"></i></button>
                                  </div>
                              </td>
                              <td>
                                  <h5 class="product-amount" id="product-amount">$${calculationAmount(dataCart[it].quantity, dataCart[it].price)}</h5>
                              </td>
                              <td>
                                <button type="button" class="close" aria-label="Close">
                                    <span aria-hidden="true" title="Remove goods from the basket">&times;</span>
                                </button>
                               </td>
                           </tr>`);
    }
}

function calculationAmount(quantity, price) {

    let resultCalcAmount = Number(price * quantity);
    let result = resultCalcAmount.toFixed(2);

    return result;
}

function calculationAllProductAmount() {
    let productAmount = document.getElementsByClassName('product-amount');
    let sum = 0;

    for(let item in productAmount) {
        if(productAmount[item].innerHTML !== undefined) {
            let arr = productAmount[item].innerHTML.split('');
            arr.splice(0, 1);
            let number = arr.join('');
            sum += Number(number);

        }
    }
    let resSum = sum.toFixed(2);
    displayAllProductAmount(resSum);
}

function displayAllProductAmount(sum) {
    document.getElementById('subtotal').insertAdjacentHTML('afterbegin', `
                            <h5>$${sum}</h5>`);
}

calculationAllProductAmount();

function localStorageSet(ob) {
    localStorage.setItem('dataCart', JSON.stringify(ob));
}

function catchChangesInBasket() {
    let tbody = document.getElementById('tbody');

    tbody.addEventListener('click', function (e) {
        const getDataFromLocalStorage = () => JSON.parse(localStorage.getItem('dataCart'));
        const currentCartItems = getDataFromLocalStorage();
        let tr = e.target.parentNode.parentNode.parentNode;

        if(e.target.tagName === 'SPAN') {
            for(let it in currentCartItems) {
                if(tr.dataset.id === currentCartItems[it].id) {
                        currentCartItems.splice([it], 1);
                        localStorageSet(currentCartItems);
                }
            }
            addDataProductToCart();
        }
        else if(e.target.tagName === 'SPAN' || 'BUTTON') { //нажатие на arrows  (после всех изменений при нажатии на Continue Shopping или Proceed to checkout будет меняться в localStorage
            let arrows = document.getElementsByClassName('items-count');
            if(arrows) {
                for(let arItem in arrows) {
                    let dataId = tr.parentNode.dataset.id;
                    let arrowId = arrows[arItem].parentNode.dataset.id;

                    if(dataId === arrowId) {
                        let qnt = arrows[arItem].parentNode.children[1].value;
                        let price = arrows[arItem].parentNode.attributes[1].value;
                        let value = calculationAmount(qnt, price);

                        displayCalc(value);
                    }
                }
            }
        }
        let quantity = currentCartItems.length;
        showQuantityGoodsInBasket(quantity);
    })

}

function displayCalc(value) {
    document.getElementById('product-amount').innerHTML = '$' + value;
}

catchChangesInBasket();

function showQuantityGoodsInBasket(quantityGoods) {
    document.getElementById('show').innerHTML = quantityGoods;
}