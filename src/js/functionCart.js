'use strict';

addDataProductToCart();




function addDataProductToCart() {
    const getDataFromLocalStorage = () => JSON.parse(localStorage.getItem('dataCart'));

    if (localStorage.getItem('dataCart')) {
        getDataFromLocalStorage();
    }
    const dataCart = getDataFromLocalStorage();
    // console.log(dataCart);

    for(let it in dataCart) {
        document.getElementById('tbody').insertAdjacentHTML('beforeend', `
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
                                  <div class="product_count">
                                      <button class="reduced items-count" type="button"><i class="ti-angle-left"></i></button>
                                      <input type="text" name="qty" size="2" maxlength="12" value="${dataCart[it].quantity}" title="Quantity:" class="input-text qty">
                                      <button class="increase items-count" type="button"><i class="ti-angle-right"></i></button>
                                  </div>
                              </td>
                              <td>
                                  <h5 class="product-amount">$${calculationAmount(dataCart[it].price, dataCart[it].quantity)}</h5>
                              </td>
                              <td>
                                <button type="button" class="close" aria-label="Close">
                                    <span aria-hidden="true" title="Remove goods from the basket">&times;</span>
                                </button>
                               </td>
                           </tr>`);
    }
}

function calculationAmount(price, quantity) {
    return price * quantity;
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
    displayAllProductAmount(sum);
}

function displayAllProductAmount(sum) {
    document.getElementById('subtotal').insertAdjacentHTML('afterbegin', `
                            <h5>$${sum}</h5>`);
}

calculationAllProductAmount();


function catchChangesInBasket() {
    let tbody = document.getElementById('tbody');

    tbody.addEventListener('click', function (e) {
        const getDataFromLocalStorage = () => JSON.parse(localStorage.getItem('dataCart'));
        const currentCartItems = getDataFromLocalStorage();

        // if(e.target.tagName === 'SPAN' || e.target.tagName ==='BUTTON') {

        // нажатие на Х  +  удаление из localStorage
        if(e.target.tagName === 'SPAN') { //нажатие на Х  +  удаление из localStorage
            let tr = e.target.parentNode.parentNode.parentNode;
            tr.dataset.delete = 'delete';
            // console.log(tr);
            // for(let item in tbody.children) {
            //     console.log(tr.dataset.delete);
            //     console.log(tbody.children[item].dataset);
            //
            //     if (tr.dataset.delete === tbody.children[item].dataset.delete) {
            //
            //         console.log(item);
            //     }
            // }
            for(let it in currentCartItems) {
                if(tr.dataset.id === currentCartItems[it].id) {
                    if(tr.dataset.delete === 'delete') {
                        let arr = currentCartItems.splice([it], 1);
                        console.log(arr);
                    }
                }
            }
            console.log(currentCartItems);
            addDataProductToCart();

            // console.log(currentCartItems);
        } else if(e.target.tagName === 'SPAN' || 'BUTTON') { //нажатие на arrows  (после всех изменений при нажатии на Continue Shopping или Proceed to checkout будет меняться в localStorage

        } else if(e.target.tagName === 'SPAN' || 'BUTTON') { //нажатие на input    !!! change | keyup

        } else if(e.target.tagName === 'SPAN' || 'BUTTON') { //нажатие на input    !!! change | keyup

        }

    })
}

catchChangesInBasket();