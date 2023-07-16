document.addEventListener('DOMContentLoaded', function() {
    var addToCartButton = document.getElementById('add-to-cart');
  
    addToCartButton.addEventListener('click', function() {
      var productName = document.querySelector('.product h2').innerText;
      var productPrice = document.querySelector('.product p').innerText;
      var quantity = document.getElementById('quantity').value;
  
      var item = {
        name: productName,
        price: productPrice,
        quantity: quantity
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
        cartItems.push(item);
        localStorage.setItem(user.username, JSON.stringify(cartItems));
        alert('Item added to cart!');
      } else {
        if (localStorage.getItem('guestCart')) {
          cartItems = JSON.parse(localStorage.getItem('guestCart'));
        }
        cartItems.push(item);
        localStorage.setItem('guestCart', JSON.stringify(cartItems));
        alert('Item added to cart for guest user!');
      }
  
      updateCartCount();
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
  