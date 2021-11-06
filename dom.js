var form = document.getElementById('addForm');
var productList = document.getElementById('products');

//Form submit event
form.addEventListener('submit', addProduct);

//Add Product
function addProduct(e) {
    e.preventDefault();

    //GET INPUT VALUE

    var newProduct = document.getElementById('product').value;

    //CREATE NEW PRODUCT ELEMENT
    var li = document.createElement('li');

    //ADD CLASS TO THE PRODUCT ELEMENT
    li.className = 'list-group-item';
    console.log('li');

    //ADD TEXT NODE WITH INPUT VALUE
    li.appendChild(document.createTextNode(newProduct));
    productList.appendChild(li);


}