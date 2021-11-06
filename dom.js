var form = document.getElementById('addForm');
var productList = document.getElementById('products');

//Form submit event
form.addEventListener('submit', addProduct);

//DELETE EVENT
productList.addEventListener('click', removeProducts);

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

    //CREATE THE DELETE BUTTON
    var deleteBtn = document.createElement('button');

    //ADD CLASSES TO DELETE BUTTON
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //APPEND TEXT NODE
    deleteBtn.appendChild(document.createTextNode('X'));

    //APPEND BUTTON TO LIST
    li.appendChild(deleteBtn);

    //APPEND li TO LIST
    productList.appendChild(li);

}



//CREATE DELETE PRODUCTS FUNCTION
function removeProducts(e) {
    if (e.target.classList.contains('delete')) {

        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            productList.removeChild(li);
        }
    }

}