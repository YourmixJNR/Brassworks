//dashboard.js
document.addEventListener('DOMContentLoaded', function () {
    //Retrieve the user object from local storage
    const user = JSON.parse(localStorage.getItem('user'));

    //Retrieve the welcome container
    const welcomeContainer = document.getElementById('welcomeContainer');
    
    //Check if the user object exist
    if (user) {
        //Display the welcome message with the username
        welcomeContainer.textContent = 'Welcome, ' + user.username + '!';
    } else {
        //Redirect to the sign-in page if the user is not authenticated
        window.location.href = 'signin.html';
    }
})