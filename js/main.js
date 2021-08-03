var producName = document.getElementById('productName');
var productCategory = document.getElementById('productCategory');
var productPrice = document.getElementById('productPrice');
var productDescription = document.getElementById('productDescription');


var get = localStorage.getItem("key");

// var parsed = JSON.parse(get);
// console.log(parsed);

if (get == null) {
    var products = [];
} else {
    var products = JSON.parse(get);
}

display();



function addProduct() {
    var product = {
        pName: producName.value,
        pCategory: productCategory.value,
        pPrice: productPrice.value,
        pDesc: productDescription.value
    };

    // JSON : is array of objects
    // JSON.stringify() : is a mehod converts the array into string


    products.push(product);
    // console.log(products);
    var str = JSON.stringify(products);
    localStorage.setItem("key", str);
    display();
    cleanForm();
}

function display() {
    var trs = "";
    for (var i = 0; i < products.length; i++) {
        trs += `
        <tr>
            <td>${i}</td>
            <td>${products[i].pName}</td>
            <td>${products[i].pCategory}</td>
            <td>${products[i].pPrice}</td>
            <td>${products[i].pDesc}</td>

            <td> <button class="btn btn-danger">Delete</button></td>
            <td><button class="btn btn-warning">Update</button></td>
        </tr>
        `
        document.getElementById('demo').innerHTML = trs;
    }
}

function cleanForm() {
    producName.value = "";
    productCategory.value = "";
    productPrice.value = "";
    productDescription.value = "";
}