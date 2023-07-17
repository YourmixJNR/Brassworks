document.addEventListener('DOMContentLoaded', function() {
    var addToCartButtons = document.querySelectorAll('.add-to-cart');
    var cartCountElements = document.querySelectorAll('.cart-count');
  
    for (var i = 0; i < addToCartButtons.length; i++) {
      addToCartButtons[i].addEventListener('click', function() {
        var productName = this.parentElement.querySelector('h2').innerText;
        var productPrice = this.parentElement.querySelector('p').innerText;
  
        var item = {
          name: productName,
          price: productPrice
        };
  
        addToCart(item);
      });
    }
  
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
          cartItems[existingItemIndex].quantity += 1;
        } else {
          // Item doesn't exist in cart, add it
          item.quantity = 1;
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
          cartItems[existingItemIndex].quantity += 1;
        } else {
          // Item doesn't exist in cart, add it
          item.quantity = 1;
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
  
      for (var i = 0; i < cartCountElements.length; i++) {
        cartCountElements[i].innerText = cartItems.length.toString();
      }
    }
  
    updateCartCount();
  });
  