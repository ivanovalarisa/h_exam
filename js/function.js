'use strict';

fetch('data.json')
.then((dataObj) => {
    return dataObj.json();
})
.then((dataObj) => {
    pushObjToLocalStorage(dataObj);
})

const pushObjToLocalStorage = (dataObj) => {

    if (localStorage.getItem('dataGoods')) {
        getDataFromLocalStorage();
    }
    
    localStorage.setItem('dataGoods', JSON.stringify(dataObj));
}

const getDataFromLocalStorage = () => {
    const dataGoods = JSON.parse(localStorage.getItem('dataGoods'));
    return dataGoods;
}

const dataObj = getDataFromLocalStorage();
console.log(`dataObj is `, dataObj);