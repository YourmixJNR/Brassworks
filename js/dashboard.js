//dashboard.js
document.addEventListener('DOMContentLoaded', function () {
    //Retrieve the user object from local storage
    const authenticated = localStorage.getItem('authenticated');

    if (authenticated !== 'true') {
        //Redirect to the sign-in page if the user is not authenticated
        window.location.href = 'sign-in.html';
    } else {
        // The user is authenticated, proceed with displaying the dashboard

        // If the user is not authenticated, redirect to the sign-in page
        if (authenticated !== 'true') {
            window.location.href = 'sign-in.html';
        } else {
            // Retrieve the user object from localStorage
            const user = JSON.parse(localStorage.getItem('user'));

            // Retrieve the welcome container
            const welcomeContainer = document.getElementById('welcomeContainer');
            welcomeContainer.textContent = 'Welcome, ' + user.username + '!';
        }

        // Retrieve the logout button element
        const logoutButton = document.getElementById('logout-btn');

        // Add an event listener to the logout button
        logoutButton.addEventListener('click', function() {
        // Remove the authentication status if needed
        localStorage.setItem('authenticated', 'false');

        // Redirect to the index.html page
        window.location.href = 'index.html';
        });
    }
});