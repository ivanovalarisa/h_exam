'use strict';

fetch('data.json')
.then((dataObj) => dataObj.json())
.then((dataObj) => pushObjToLocalStorage(dataObj));

const pushObjToLocalStorage = (dataObj) => {

    if (localStorage.getItem('dataGoods')) {
        getDataFromLocalStorage();
    }
    
    localStorage.setItem('dataGoods', JSON.stringify(dataObj));
}

const getDataFromLocalStorage = () => JSON.parse(localStorage.getItem('dataGoods'));

const dataObj = getDataFromLocalStorage();