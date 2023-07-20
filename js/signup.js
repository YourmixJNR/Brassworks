// Signup.js
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();

    //Retrieve form input
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const passwordMatchMessage = document.getElementById('passwordMatchMessage');
    passwordMatchMessage.textContent ="";

    if (password !== confirmPassword) {
      passwordMatchMessage.textContent = "Password doesn't match";
      return
    }

    if (password.length < 6) {
      passwordMatchMessage.textContent = "Password must be at least 6 char";
    }

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
function togglePasswordVisibility(inputId) {
  const passwordInput = document.getElementById(inputId);
  const passwordToggle = passwordInput.nextElementSibling;

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    passwordToggle.classList.add('active');
  } else {
    passwordInput.type = 'password';
    passwordToggle.classList.remove('active');
  }
}

  