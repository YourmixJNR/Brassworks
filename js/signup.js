// Signup.js
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    //Retrieve form input
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Retrieve existing user data from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the username or email already exists
    const usernameExists = existingUsers.some((user) => user.username === username);
    const emailExists = existingUsers.some((user) => user.email === email);

    // Perform client-side validation

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordMatchMessage = document.getElementById('passwordMatchMessage');

    if (usernameExists) {
      usernameError.textContent = "Username is already in use. Please choose a different username.";
      emailError.textContent = ""; // Reset email error message
      passwordMatchMessage.textContent ="";
      return;
    }

    if (emailExists) {
      emailError.textContent = "Email is already in use. Please choose a different username.";
      usernameError.textContent = ""; // Reset username error message
      passwordMatchMessage.textContent ="";
      return;
    }

    if (password !== confirmPassword) {
      passwordMatchMessage.textContent = "Password doesn't match";
      emailError.textContent = ""; // Reset email error message
      usernameError.textContent = ""; // Reset username error message
      return;
    }

    if (password.length < 4) {
      passwordMatchMessage.textContent = "Password must be at least 3 character";
      emailError.textContent = ""; // Reset email error message
      usernameError.textContent = ""; // Reset username error message
      return;
    }

    //Perform client side validation

    //Create a user object
    const user = {
        username : username,
        email : email,
        password : password
    };

    // Update the existing users array with the new user
    existingUsers.push(user);

    //Store the user object in localStorage
    localStorage.setItem('users', JSON.stringify(existingUsers));

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

  