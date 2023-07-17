document.addEventListener('DOMContentLoaded', function() {
    var addToCartButton = document.getElementById('add-to-cart');
  
    addToCartButton.addEventListener('click', function() {
      var productName = document.querySelector('.drdb-bx-txt h3').innerText;
      var productPrice = document.querySelector('.drdb-bx-txt p').innerText;
  
      var item = {
        name: productName,
        price: productPrice,
      };
  
      addToCart(item);
    });
  
    function addToCart(item) {
      var user = JSON.parse(localStorage.getItem('user'));
      var cartItems = [];
  
      if (user) {
        if (localStorage.getItem(user.username)) {
          cartItems = JSON.parse(localStorage.getItem(user.username));
        }
        var existingItemIndex = findItemIndex(cartItems, item.name);
        if (existingItemIndex > -1) {
          // Item already exists in cart, update the quantity
          cartItems[existingItemIndex].quantity += item.quantity;
        } else {
          // Item doesn't exist in cart, add it
          cartItems.push(item);
        }
        localStorage.setItem(user.username, JSON.stringify(cartItems));
        alert('Item added to cart!');
      } else {
        if (localStorage.getItem('guestCart')) {
          cartItems = JSON.parse(localStorage.getItem('guestCart'));
        }
        var existingItemIndex = findItemIndex(cartItems, item.name);
        if (existingItemIndex > -1) {
          // Item already exists in cart, update the quantity
          cartItems[existingItemIndex].quantity += item.quantity;
        } else {
          // Item doesn't exist in cart, add it
          cartItems.push(item);
        }
        localStorage.setItem('guestCart', JSON.stringify(cartItems));
        alert('Item added to cart for guest user!');
      }
  
      updateCartCount();
    }
  
    function findItemIndex(cartItems, itemName) {
      for (var i = 0; i < cartItems.length; i++) {
        if (cartItems[i].name === itemName) {
          return i;
        }
      }
      return -1;
    }
  
    function updateCartCount() {
      var user = JSON.parse(localStorage.getItem('user'));
      var cartItems = [];
  
      if (user && localStorage.getItem(user.username)) {
        cartItems = JSON.parse(localStorage.getItem(user.username));
      } else if (!user && localStorage.getItem('guestCart')) {
        cartItems = JSON.parse(localStorage.getItem('guestCart'));
      }
  
      var cartCountElement = document.getElementById('cart-count');
      cartCountElement.innerText = cartItems.length.toString();
    }
  
    updateCartCount();
  });