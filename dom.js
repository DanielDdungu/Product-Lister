var form = document.getElementById('addForm');
var productList = document.getElementById('products');
var filterProducts = document.getElementById('filter')

//FORM SUBMIT EVENT
form.addEventListener('submit', addProduct);

//DELETE EVENT
productList.addEventListener('click', removeProducts);


//ADD FILTER EVENT
filterProducts.addEventListener('keyup', filterProduct);

//ADD PRODUCT FUNCTION
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



//CREATE FILTER PRODUCT FUNCTION
function filterProduct(e) {
    //convert to lower case of every thing being typed in
    var text = e.target.value.toLowerCase();

    //grab all the product list items
    var products = productList.getElementsByTagName('li');
    //console.log(products);

    //convert the HTML list into an array
    Array.from(products).forEach(function(products) {
        var productName = products.firstChild.textContent;
        //console.log(productName);

        //COMPARING WHAT IS BEING TYPED IN
        if (productName.toLocaleLowerCase().indexOf(text) !=
            -1) {
            products.style.display = 'block';

        } else {
            products.style.display = 'none';
        }
    });

}