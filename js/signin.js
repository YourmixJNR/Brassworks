//Signin.js
document.getElementById('signin-form').addEventListener('submit', function (e) {
    e.preventDefault();

    //Retrieve form input
    const usernameEmail = document.getElementById('usernameEmail').value;
    const userPassword = document.getElementById('userPassword').value;

    //Retrieve the user object from localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    //Check if the user object exist and the provided username/email and password match
    if (user && (user.username === usernameEmail || user.email === usernameEmail) && user.password === userPassword) {
        //Redirect to the desired page after successful sign-in
        localStorage.setItem('authenticated', 'true');
        window.location.href = 'dashboard.html';
    } else {
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = 'Invalid Username/Email or Password.';
    }
});

//Function to toggle userPassword Visibility
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('userPassword');
    const passwordToggle = document.querySelector('.password-toggle');

    if (passwordInput.type == 'password') {
        passwordInput.type ='text';
        passwordToggle.classList.add('active');
    } else {
        passwordInput.type = 'password';
        passwordToggle.classList.remove('active');
    }
}
  
// Add event listener for forget password link
document.getElementById('forgetPasswordLink').addEventListener('click', function(e) {
    e.preventDefault();
    // Display an alert message
    alert("YourmixJNR_Dev 😎 is still working on this feature. \n\Cheers 🥂");
  });
