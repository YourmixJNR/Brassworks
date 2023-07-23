document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the authenticated username or email from local storage
    const authenticatedData = localStorage.getItem('authenticated');
  
    if (!authenticatedData) {
      // Redirect to the sign-in page if the user is not authenticated
      window.location.href = 'sign-in.html';
    } else {
      // The user is authenticated, proceed with displaying the dashboard
  
      // Retrieve the users array from local storage
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  
      // Find the user with the provided username/email in the users array
      const user = existingUsers.find(
        (user) => user.username === authenticatedData || user.email === authenticatedData
      );
  
      // Change only the first letter of the username to capital and the rest to lowercase
      const formattedUsername = user.username.charAt(0).toUpperCase() + user.username.slice(1).toLowerCase();

      // Display the formatted username in the welcome message
      const welcomeContainer = document.getElementById('welcomeContainer');
      welcomeContainer.textContent = 'Welcome, ' + formattedUsername + '!';
  
      // Retrieve the logout button element
      const logoutButton = document.getElementById('logout-btn');
  
      // Add an event listener to the logout button
      logoutButton.addEventListener('click', function () {
        // Remove the authentication status if needed
        localStorage.removeItem('authenticated');
  
        // Redirect to the index.html page
        window.location.href = 'index.html';
      });
    }
  });  