// Retrieve the query and results from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get('query');
const results = JSON.parse(urlParams.get('results'));
const itemsPerPage = 5; // Number of items to display per page
displayResults(query, results, 1, itemsPerPage); // Display the first page by default

// Function to display search results with pagination
function displayResults(query, results, currentPage, itemsPerPage) {
  const searchHeading = document.getElementById('searchHeading');
  searchHeading.textContent = `Your search for "${query}" revealed the following:`;

  const searchResults = document.getElementById('searchResults');
  const paginationContainer = document.getElementById('pagination');

  // Clear previous results and pagination
  searchResults.innerHTML = '';
  paginationContainer.innerHTML = '';

  if (results.length === 0) {
    searchResults.textContent = 'No results found.';
  } else {
    // Calculate pagination values
    const totalItems = results.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Display results for the current page
    const currentPageResults = results.slice(startIndex, endIndex);
    currentPageResults.forEach(product => {
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

    // Display pagination links
    for (let page = 1; page <= totalPages; page++) {
      const link = document.createElement('a');
      link.href = `#page${page}`;
      link.textContent = page;
      link.addEventListener('click', function() {
        displayResults(query, results, page, itemsPerPage);
      });
      paginationContainer.appendChild(link);
    }
  }
}