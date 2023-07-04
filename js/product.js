// Array or JSON object to store products
const products = [
    {
      name: 'Urban Aesop',
      image: 'assets/images/img3.jpg',
    },
    {
      name: 'Available Never',
      image: 'assets/images/img4.jpg',
    },
    {
      name: 'Digital Pop',
      image: 'assets/images/Archive/Digital Pop.jpg',
    },
    {
      name: 'Flesh and Concrete',
      image: 'assets/images/Archive/Flesh and Concrete.jpg',
    },
    // Add more product objects as needed
  ];
  
  // Function to search for products
  function searchProducts(query) {
    query = query.toLowerCase();
    const results = products.filter(product =>
      product.name.toLowerCase().includes(query)
    );
    return results;
  }
  
  // Handle form submission
  const searchForm = document.getElementById('searchForm');
  searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value;
    const results = searchProducts(query);
    redirectToResults(query, results);
  });
  
  // Function to redirect to results.html and pass the query and results as URL parameters
  function redirectToResults(query, results) {
    const url = new URL('result.html', window.location.href);
    url.searchParams.set('query', query);
    url.searchParams.set('results', JSON.stringify(results));
    window.location.href = url.href;
  }