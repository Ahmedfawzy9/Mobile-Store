
let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let category = document.getElementById('category');
let create = document.getElementById('create');




// get total 

function getTotal() {
    if (price.value != '') {
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.background = 'blue'
    }
    else {
        total.innerHTML = '';
        total.style.background = 'red'
    }
};

// create product

let datapro;
if (localStorage.product != null) {
    datapro = JSON.parse(localStorage.product);
} else {
    datapro = [];
}

document.getElementById("create").onclick = function () {
    let newobj = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        category: category.value,
    }
    datapro.push(newobj);
    localStorage.setItem("product", JSON.stringify(datapro))
    cleardata();
    showdata();
}

// cleardata
function cleardata() {
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    category.value = '';
}

// showdata
function showdata() {
    let table = '';
    for (let i = 0; i < datapro.length; i++) {
        table += `
        <tr>
        <td>${i + 1}</td>
        <td>${datapro[i].title}</td>
        <td>${datapro[i].price} </td>
        <td>${datapro[i].taxes} </td>
        <td>${datapro[i].ads} </td>
        <td>${datapro[i].discount} </td>
        <td>${datapro[i].total} </td>
        <td>${datapro[i].category} </td>
        <td><button onclick="deletedata(${i})"  id="update">delete</button></td>
       </tr>
        `

    }
    document.getElementById("tbody").innerHTML = table;

}
showdata()

// delete one data

function deletedata(i) {
    datapro.splice(i, 1);
    localStorage.product = JSON.stringify(datapro);
    showdata()

}


