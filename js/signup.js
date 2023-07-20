// Signup.js
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();

    //Retrieve form input
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Retrieve existing user data from localStorage
    // const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the username or email already exists
    const usernameExists = existingUsers.some((user) => user.username === username);
    const emailExists = existingUsers.some((user) => user.email === email);

    // Perform client-side validation

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');

    if (usernameExists) {
      usernameError.textContent = "Username is already in use. Please choose a different username.";
      emailError.textContent = ""; // Reset email error message
      return;
    }

    if (emailExists) {
      emailError.textContent = "Email is already in use. Please choose a different username.";
      usernameError.textContent = ""; // Reset username error message
      return;
    }

    const passwordMatchMessage = document.getElementById('passwordMatchMessage');
    passwordMatchMessage.textContent ="";

    if (password !== confirmPassword) {
      passwordMatchMessage.textContent = "Password doesn't match";
      return;
    }

    if (password.length < 3) {
      passwordMatchMessage.textContent = "Password must be at least 3 character";
      return;
    }

    //Perform client side validation

    // Retrieve existing user data from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Create a user object
    const user = {
      username: username,
      email: email,
      password: password,
    };

    // Add the new user to the existingUsers array
    existingUsers.push(user);

    // Save the updated existingUsers array back to localStorage
    localStorage.setItem('users', JSON.stringify(existingUsers));

    // Redirect to the login page
    window.location.href = 'sign-in.html';
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

  