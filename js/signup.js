// Signup.js
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();

    //Retrieve form input
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    //Perform client side validation

    //Create a user object
    const user = {
        username : username,
        email : email,
        password : password
    };

    //Store the user object in localStorage
    localStorage.setItem('user', JSON.stringify(user));

    //Redirect to the login page
    window.location.href = 'sign-in.html'
});

// Function to toggle password visibility
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.querySelector('.password-toggle');
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      passwordToggle.classList.add('active');
    } else {
      passwordInput.type = 'password';
      passwordToggle.classList.remove('active');
    }
  }
  
  