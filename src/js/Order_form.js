getStringObjAndPars();

function getStringObjAndPars() {
    let itemsJson = localStorage.getItem('dataCart');
    let itemsObj  =JSON.parse(itemsJson);
    showOrderTab(itemsObj);
}

function showOrderTab(itemsObj) {
    let orderTabWrapper = document.getElementById('orderTab');
    let orderBox = document.createElement('div');
    orderBox.setAttribute('class', 'order_box');
    orderBox.insertAdjacentHTML('afterbegin', `
                          <h2>Your Order</h2>
                          <ul class="list">
                              ${orderItemsList(itemsObj)}
                          </ul>
                          <ul class="list \`list_2\`">
                          ${orderHeard(itemsObj)}
                          </ul>
                          <div id="checkLine" class="last">Check if all fields are entered correctly</div>
                          <div class="text-center">
                              <a id="btnConfirm" class="button button-paypal" href="#">Confirm</a>
                          </div>
                            `);
    orderTabWrapper.appendChild(orderBox);

    function orderItemsList(items) {
        let html = ` <table class="table table-sm">
                          <thead>
                            <tr>
                              <th scope="col">Name</th>
                              <th scope="col">Collection</th>
                              <th scope="col">Size</th>
                              <th scope="col">Price</th>
                              <th scope="col">Count</th>
                            </tr>
                          </thead>
                          <tbody>`

        items.forEach(item => {
            html += `<tr>
                          <td>${item.name}</td>
                          <td>${item.collection}</td>
                          <td>${item.size}</td>
                          <td>${item.price}</td>
                          <td>${item.quantity}</td>
                        </tr>`;
        })
        html += ` </tbody></table>`;
        return html;
    }


    showOrderFormInput(itemsObj);
}

function orderHeard(items) {
    let price = 0;
    let ship = 0;
    let totalPrice = 0;

    items.forEach(item => {
        let priceAsNumber = Number.parseInt(item.price);
        let quantityAsNumber = Number.parseInt(item.quantity);

        totalPrice = totalPrice + ( quantityAsNumber * priceAsNumber );
        price = price + priceAsNumber;
    })

    return `<li><a href="#">Subtotal <span>$${totalPrice.toFixed(2)}</span></a></li>
                <li><a href="#">Shipping <span>$${ship.toFixed(2)}</span></a></li>
                <li><a href="#">Total <span>$${(totalPrice + ship).toFixed(2)}</span></a></li>`;
}

function showOrderFormInput(itemsObj) {

    const cityMatches = {
        '2': 'Kiev',
        '3': 'Kharkov',
        '4': 'Odessa',
        '5': 'Lugansk',
        '6': 'Donetsk',
        '7': 'Krivoy Rog',
        '8': 'Nikolaev'
    };

    document.getElementById('btnConfirm').addEventListener('click', function () {
        let isFormCorrect = true;
        let orderForm = document.forms.orderForm;

        let firstName = orderForm.elements.firstName.value;
        let divWithValidateTextFirst = document.getElementById('errorTextFirstName');
        if (!validateFormOrder(firstName.match(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-']+[a-zA-Zа-яА-Я']?$/u) === null,
            divWithValidateTextFirst)) {
            isFormCorrect = false;
        }

        let lastName = orderForm.elements.lastName.value;
        let divWithValidateTextLast = document.getElementById('errorTextLastName');
        if (!validateFormOrder(lastName.match(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-']+[a-zA-Zа-яА-Я']?$/u) === null,
            divWithValidateTextLast)) {
            isFormCorrect = false;
        }

        let phoneNumber = orderForm.elements.number.value;
        let divWithValidateTextNumber = document.getElementById('errorTextPhoneNumber');
        if (!validateFormOrder(phoneNumber.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/) === null,
            divWithValidateTextNumber)) {
            isFormCorrect = false;
        }


        let email = orderForm.elements.email.value;
        let divWithValidateTextEmail = document.getElementById('errorTextEmail');
        if (!validateFormOrder(email.match(/^\w{1,20}[@]?[a-z]{1,6}[.]?[a-z]{1,5}$/) === null,
            divWithValidateTextEmail)) {
            isFormCorrect = false;
        }

        let city = orderForm.elements.citySelect.value;
        console.log(city);
        let divWithValidateTextCity = document.getElementById('errorTextCity');
        if (!validateFormOrder(city === '1', divWithValidateTextCity)) {
            isFormCorrect = false;
        }
        const correctNameCity = cityMatches[city];
        console.log(correctNameCity);

        let postOffice = orderForm.elements.newPostOffice.value;
        let divWithValidateTextNewPostOffice = document.getElementById('errorTextPostOffice');
        if (!validateFormOrder(postOffice.match(/[№]?[0-9]{1,4}/g) === null, divWithValidateTextNewPostOffice)) {
            isFormCorrect = false;
        }

        let comment = orderForm.elements.message.value;

        showOrderResult(firstName,lastName,phoneNumber,email,correctNameCity,postOffice,itemsObj,isFormCorrect);

    });

    function validateFormOrder(condition, divWithValidateText) {
        if (condition) {
            divWithValidateText.classList.remove('errorTextInvisible');
        } else {
            divWithValidateText.classList.add('errorTextInvisible');
        }

        return !condition;
    }

}

function showOrderResult(firstName,lastName,phoneNumber,email,correctNameCity,postOffice,itemsObj,isFormCorrect) {
    if (isFormCorrect) {
        let orderResult = document.getElementById("orderResult");
        let orderNumber = document.getElementById("orderNumber");
        let resultModel = $('#resultModal').on('hidden.bs.modal',function() {
            localStorage.removeItem('dataCart');
            document.location.href="/";
        } )

        orderNumber.innerText = "12345";

        let html = `<h5>Сustomer information: </h5>
                        <div class="col-"> <span class="captionOrderResult">First name: </span> ${firstName}</div>
                        <div class="col-"> <span class="captionOrderResult">Last name: </span>${lastName}</div>
                        <div class="col-"> <span class="captionOrderResult">Phone: </span>${phoneNumber}</div>
                        <div class="col-"> <span class="captionOrderResult">mail: </span>${email}</div>
                        <div class="col-"> <span class="captionOrderResult">City: </span>${correctNameCity}</div>
                        <div class="col-"> <span class="captionOrderResult">Post number: </span>${postOffice}</div>
                        <div class="col-"> </div>
                        <div class="col-"> <table class="table table-sm">
                          <thead>
                            <tr>
                              <th scope="col">Name</th>
                              <th scope="col">Collection</th>
                              <th scope="col">Size</th>
                              <th scope="col">Price</th>
                              <th scope="col">Count</th>
                            </tr>
                          </thead>
                          <tbody>
                          <h5 class="headlineOrderResult">Product information: </h5>`;

        itemsObj.forEach(item => {
            html += `
                        <tr>
                          <th scope="row">${item.name}</th>
                          <td>${item.collection}</td>
                          <td>${item.size}</td>
                          <td>${item.price}</td>
                          <td>${item.quantity}</td>
                        </tr>`;

        })

        html += `</tbody></table></div>
                    <ul class="list \`list_2\`">
                         ${orderHeard(itemsObj)}
                    </ul>
                    <div class="col-">Our manager will phone you as soon as possible. Best regards</div>`;
        orderResult.innerHTML = html;
        resultModel.modal('show');
    }
}