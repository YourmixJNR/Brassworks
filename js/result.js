// Retrieve the query and results from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get('query');
const results = JSON.parse(urlParams.get('results'));

// Display search query if available
const searchHeading = document.getElementById('searchHeading');
if (query) {
  searchHeading.textContent = `Your search for "${query}" revealed the following:`;
} else {
  searchHeading.textContent = `Your search for "${query}" revealed the following:`;
}

// Define the number of products to display per page
const productsPerPage = 10;

// Calculate the number of pages based on the results and products per page
const totalPages = Math.ceil(results.length / productsPerPage);

// Function to display search results for a specific page
function displayResults(page) {
  const searchResults = document.getElementById('searchResults');
  searchResults.innerHTML = '';

  if (results.length === 0) {
    searchResults.textContent = 'No results found.';
  } else {
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const pageResults = results.slice(startIndex, endIndex);

    pageResults.forEach(product => {
      // Create the product element and its contents
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');

      const productImage = document.createElement('div');
      productImage.classList.add('product-image');
      const image = document.createElement('img');
      image.src = product.image;
      image.alt = product.name;
      productImage.appendChild(image);
      productDiv.appendChild(productImage);

      const productDetails = document.createElement('div');
      productDetails.classList.add('product-details');

      const productName = document.createElement('div');
      productName.classList.add('product-name');
      const nameLink = document.createElement('a');
      nameLink.href = product.link;
      nameLink.textContent = product.name;
      productName.appendChild(nameLink);
      productDetails.appendChild(productName);

      const productPrice = document.createElement('div');
      productPrice.classList.add('product-price');
      productPrice.textContent = product.price;
      productDetails.appendChild(productPrice);

      const productDescription = document.createElement('div');
      productDescription.classList.add('product-description');
      productDescription.textContent = product.description;
      productDetails.appendChild(productDescription);

      productDiv.appendChild(productDetails);

      searchResults.appendChild(productDiv);
    });
  }
}

// Function to create the pagination links
function createPagination() {
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  if (totalPages > 1) {
    for (let page = 1; page <= totalPages; page++) {
      const pageLink = document.createElement('a');
      pageLink.href = '#';
      pageLink.textContent = page;

      pageLink.addEventListener('click', function () {
        displayResults(page);
      });

      pagination.appendChild(pageLink);
    }
  }
}

// Display the search results for the first page
displayResults(1);

// Create the pagination links
createPagination();
