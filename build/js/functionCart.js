"use strict";function addDataProductToCart(){function t(){return JSON.parse(localStorage.getItem("dataCart"))}localStorage.getItem("dataCart")&&t();var n=t();for(var a in n)document.getElementById("tbody").insertAdjacentHTML("beforeend",'\n                            <tr data-id="'.concat(n[a].id,'">\n                              <td>\n                                  <div class="media">\n                                      <div class="d-flex">\n                                          <img src="img/product/').concat(n[a].collection,"/").concat(n[a].photo,'" alt="">\n                                      </div>\n                                      <div class="media-body">\n                                          <p>').concat(n[a].name+" ("+n[a].size+")","</p>\n                                      </div>\n                                  </div>\n                              </td>\n                              <td>\n                                  <h5>$").concat(n[a].price,'</h5>\n                              </td>\n                              <td>\n                                  <div class="product_count">\n                                      <button class="reduced items-count" type="button"><i class="ti-angle-left"></i></button>\n                                      <input type="text" name="qty" size="2" maxlength="12" value="').concat(n[a].quantity,'" title="Quantity:" class="input-text qty">\n                                      <button class="increase items-count" type="button"><i class="ti-angle-right"></i></button>\n                                  </div>\n                              </td>\n                              <td>\n                                  <h5 class="product-amount">$').concat(calculationAmount(n[a].price,n[a].quantity),'</h5>\n                              </td>\n                              <td>\n                                <button type="button" class="close" aria-label="Close">\n                                    <span aria-hidden="true" title="Remove goods from the basket">&times;</span>\n                                </button>\n                               </td>\n                           </tr>'))}function calculationAmount(t,n){return t*n}function calculationAllProductAmount(){var t=document.getElementsByClassName("product-amount"),n=0;for(var a in t)if(void 0!==t[a].innerHTML){var e=t[a].innerHTML.split("");e.splice(0,1);var o=e.join("");n+=Number(o)}displayAllProductAmount(n)}function displayAllProductAmount(t){document.getElementById("subtotal").insertAdjacentHTML("afterbegin","\n                            <h5>$".concat(t,"</h5>"))}function catchChangesInBasket(){document.getElementById("tbody").addEventListener("click",function(t){var n=JSON.parse(localStorage.getItem("dataCart"));if("SPAN"===t.target.tagName){var a=t.target.parentNode.parentNode.parentNode;for(var e in a.dataset.delete="delete",n)if(a.dataset.id===n[e].id&&"delete"===a.dataset.delete){var o=n.splice([e],1);console.log(o)}console.log(n),addDataProductToCart()}else t.target.tagName,1})}addDataProductToCart(),calculationAllProductAmount(),catchChangesInBasket();