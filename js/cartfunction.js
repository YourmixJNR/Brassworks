document.addEventListener('DOMContentLoaded', function() {
  var addToCartButtons = document.querySelectorAll('.add-to-cart');
  var cartCountElements = document.querySelectorAll('.cart-count');
  var logoutButton = document.getElementById('logout');

  for (var i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', function() {
      var productSpan = this.parentElement.querySelector('span').innerText;
      var productName = this.parentElement.querySelector('h3').innerText;
      var productPrice = this.parentElement.querySelector('.pri-edi').innerText;

      var item = {
        span: productSpan,
        name: productName,
        price: productPrice
      };

      addToCart(item);
    });
  }

  logoutButton.addEventListener('click', function() {
    logout();
  });

  function addToCart(item) {
    var user = JSON.parse(localStorage.getItem('user'));
    var cartItems = [];

    // if (user && user.username) {
    //   // User is logged in
    //   if (localStorage.getItem(user.username)) {
    //     cartItems = JSON.parse(localStorage.getItem(user.username));
    //   }
    // } else {
    //   // Guest user
    //   if (localStorage.getItem('guestCart')) {
    //     cartItems = JSON.parse(localStorage.getItem('guestCart'));
    //   }
    // }

    var existingItemIndex = findItemIndex(cartItems, item.name);
    if (existingItemIndex > -1) {
      // Item already exists in cart, update the quantity
      cartItems[existingItemIndex].quantity += 1;
    } else {
      // Item doesn't exist in cart, add it
      item.quantity = 1;
      cartItems.push(item);
    }

    if (user && user.username) {
      localStorage.setItem(user.username, JSON.stringify(cartItems));
      // alert('Item added to cart for logged-in user!');
    } else {
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

    if (user && user.username) {
      if (localStorage.getItem(user.username)) {
        cartItems = JSON.parse(localStorage.getItem(user.username));
      }
    } else if (localStorage.getItem('guestCart')) {
      cartItems = JSON.parse(localStorage.getItem('guestCart'));
    }

    for (var i = 0; i < cartCountElements.length; i++) {
      cartCountElements[i].innerText = cartItems.length.toString();
    }
  }

  function logout() {
    // Clear the cart and the current user from localStorage
    var user = JSON.parse(localStorage.getItem('user'));
    if (user && user.username) {
      localStorage.removeItem(user.username);
    } else {
      localStorage.removeItem('guestCart');
    }
    localStorage.removeItem('user');
    alert('Logged out successfully!');
    updateCartCount();
  }

  updateCartCount();
});
