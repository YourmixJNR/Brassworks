// Fetch products data from JSON file
async function fetchProducts() {
  try {
    const response = await fetch('products.json');
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

// Function to search for products
async function searchProducts(query) {
  const products = await fetchProducts();
  query = query.toLowerCase();
  const results = products.filter(product =>
    product.name.toLowerCase().includes(query)
  );
  return results;
}

// Handle form submissions
const searchForms = document.getElementsByClassName('searchForm');
Array.from(searchForms).forEach(searchForm => {
  searchForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    const searchInput = this.getElementsByClassName('searchInput')[0];
    const query = searchInput.value;
    const results = await searchProducts(query);
    redirectToResults(query, results);
  });
});

// Function to redirect to result.html page and pass the query and results as URL parameters
function redirectToResults(query, results) {
  const url = new URL('result.html', window.location.href);
  if (query) {
    url.searchParams.set('query', query);
  }
  if (results) {
    url.searchParams.set('results', JSON.stringify(results));
  }
  window.location.href = url.href;
}
