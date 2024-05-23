document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Product 1', price: 200.00 },
        { id: 2, name: 'Product 2', price: 300.00 }
    ];

    const cart = [];

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productElement = button.closest('.product');
            const productId = parseInt(productElement.dataset.id);
            const product = products.find(p => p.id === productId);

            cart.push(product);
            updateCart();
        });
    });

    function updateCart() {
        const cartItems = document.getElementById('cart-items');
        cartItems.innerHTML = '';

        let total = 0;
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(cartItem);

            total += item.price;
        });

        document.getElementById('total').textContent = total.toFixed(2);
    }
});
