// Array para almacenar los productos en el carrito
let cartItems = [];

// Función para agregar un producto al carrito
function addToCart(product) {
    cartItems.push(product);
    updateCartUI();
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCartUI();
}

// Función para actualizar la interfaz de usuario del carrito
function updateCartUI() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = ''; // Limpiar la lista de productos

    cartItems.forEach((product, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = product.name + ' - $' + product.price;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.classList.add('remove-item');
        removeButton.onclick = () => removeFromCart(index);
        
        listItem.appendChild(removeButton);
        cartList.appendChild(listItem);
    });
}

// Ejemplo de uso
const product1 = { name: 'Camisa', price: 25 };
const product2 = { name: 'Pantalón', price: 35 };

addToCart(product1);
addToCart(product2);
