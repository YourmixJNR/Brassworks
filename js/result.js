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

      const link = document.createElement('a');
      link.href = product.link; // Use the product-specific link

      const img = document.createElement('img');
      img.src = product.image;
      img.alt = '';

      const name = document.createElement('p');
      name.className = 'product-name'; // Add CSS class for the product name
      name.textContent = product.name;

      const price = document.createElement('p');
      price.className = 'product-price'; // Add CSS class for the product price
      price.textContent = product.price;

      const description = document.createElement('p');
      description.className = 'product-description'; // Add CSS class for the product description
      description.textContent = product.description;

      link.appendChild(img);
      link.appendChild(document.createElement('br'));
      link.appendChild(name);
      link.appendChild(document.createElement('br'));
      link.appendChild(price);
      link.appendChild(document.createElement('br'));
      link.appendChild(description);
      div.appendChild(link);
      searchResults.appendChild(div);
    });
  }
}