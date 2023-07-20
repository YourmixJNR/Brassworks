document.addEventListener('DOMContentLoaded', function() {
    var cartItemsContainer = document.getElementById('cart-items-container');
  
    var user = JSON.parse(localStorage.getItem('user'));
    var cartItems = [];
  
    if (user && localStorage.getItem(user.username)) {
      cartItems = JSON.parse(localStorage.getItem(user.username));
    } else if (!user && localStorage.getItem('guestCart')) {
      cartItems = JSON.parse(localStorage.getItem('guestCart'));
    }
  
    if (cartItems.length > 0) {
      for (var i = 0; i < cartItems.length; i++) {
        var item = cartItems[i];
        var cartItemElement = document.createElement('div');
        cartItemElement.innerText = item.name + ' - ' + item.price + ' - Quantity: ' + item.quantity;
        cartItemsContainer.appendChild(cartItemElement);
      }
    } else {
      cartItemsContainer.innerText = 'Your cart is empty.';
    }
});
  