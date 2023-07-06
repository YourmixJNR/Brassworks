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
      const link = document.createElement('a');
      link.href = product.link; // Use the product-specific link

      const div = document.createElement('div');
      div.className = 'product'; // Add CSS class for the product container

      const imgDiv = document.createElement('div');
      imgDiv.className = 'product-image'; // Add CSS class for the image container

      const img = document.createElement('img');
      img.src = product.image;
      img.alt = '';

      const detailsDiv = document.createElement('div');
      detailsDiv.className = 'product-details'; // Add CSS class for the details container

      const name = document.createElement('p');
      name.className = 'product-name'; // Add CSS class for the product name

      const nameLink = document.createElement('a'); // Create the link element for the product name
      nameLink.href = product.link; // Use the product-specific link
      nameLink.textContent = product.name;

      const price = document.createElement('p');
      price.className = 'product-price'; // Add CSS class for the product price
      price.textContent = product.price;

      const description = document.createElement('p');
      description.className = 'product-description'; // Add CSS class for the product description
      description.textContent = product.description;

      imgDiv.appendChild(img);
      name.appendChild(nameLink); // Wrap the product name with the link
      detailsDiv.appendChild(name);
      detailsDiv.appendChild(price);
      detailsDiv.appendChild(description);
      div.appendChild(detailsDiv);
      div.appendChild(imgDiv);
      link.appendChild(div); // Wrap the product container with the link
      searchResults.appendChild(link);
    });
  }
}