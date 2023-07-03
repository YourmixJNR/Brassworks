// Sample product data
const products = [
    {
      name: 'Product 1',
      image: 'assets/images/img1.jpg',
    },
    {
      name: 'Product 2',
      image: 'assets/images/product2.jpg',
    },
    {
      name: 'Product 3',
      image: 'assets/images/product3.jpg',
    },
  ];
  
  // Get DOM elements
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');
  const resultsContainer = document.getElementById('resultsContainer');
  
  // Event listener for form submission
  searchForm.addEventListener('submit', searchProducts);
  
  // Function to search products and display results
  function searchProducts(event) {
    event.preventDefault(); // Prevent form submission
    const query = searchInput.value.trim(); // Trim whitespace from the input
  
    // Filter products based on the search query
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  
    // Clear previous results
    resultsContainer.innerHTML = '';
  
    // Display search results
    if (filteredProducts.length > 0) {
      filteredProducts.forEach((product) => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
  
        const imageElement = document.createElement('img');
        imageElement.src = product.image;
        imageElement.alt = product.name;
  
        const nameElement = document.createElement('p');
        nameElement.textContent = product.name;
  
        productElement.appendChild(imageElement);
        productElement.appendChild(nameElement);
        resultsContainer.appendChild(productElement);
      });
    } else {
      const noResultsElement = document.createElement('p');
      noResultsElement.textContent = 'No results found.';
      resultsContainer.appendChild(noResultsElement);
    }
  }
  
  // Event listener for Enter key press
  searchInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
      searchProducts(event);
      const query = searchInput.value.trim();
      window.location.href = `result.html?q=${query}`;
    }
  });
  