// Retrieve the query and results from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get('query');
const results = JSON.parse(urlParams.get('results'));
displayResults(query, results);

// Function to display search results
function displayResults(query, results) {
  const searchResults = document.getElementById('searchResults');

  if (results.length === 0) {
    searchResults.textContent = 'No results found.';
  } else {
    results.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product'; // Add CSS class for the product container

      const imgDiv = document.createElement('div');
      imgDiv.className = 'product-image'; // Add CSS class for the image container

      const img = document.createElement('img');
      img.src = product.image;
      img.alt = '';

      imgDiv.appendChild(img); // Append the image to the image container

      const detailsDiv = document.createElement('div');
      detailsDiv.className = 'product-details'; // Add CSS class for the details container

      const name = document.createElement('p');
      name.className = 'product-name'; // Add CSS class for the product name

      const nameLink = document.createElement('a'); // Create the link element for the product name
      nameLink.href = product.link; // Use the product-specific link
      nameLink.textContent = product.name;

      name.appendChild(nameLink); // Wrap the product name with the link
      detailsDiv.appendChild(name);
      detailsDiv.innerHTML += `<p class="product-price">${product.price}</p>`; // Add product price
      detailsDiv.innerHTML += `<p class="product-description">${product.description}</p>`; // Add product description
      div.appendChild(imgDiv);
      div.appendChild(detailsDiv);
      searchResults.appendChild(div);
    });
  }
}