// Array or JSON object to store products
const products = [
  {
    image: 'assets/images/img1.jpg',
    name: 'Tears Ascend • Roger Gillis',
    link: 'product1.html',
    price: '$1,500.00',
    description: 'Tears AscendAcrylic on Canvas24” x 36”$600Roger Gillis',
  },

  {
      image: 'assets/images/img2.jpg',
      name: 'Adorning a cage • Wynter Jones',
      link: 'product2.html',
      price: '$1,500.00',
      description: 'Adorning a cage Watercolor on clayboard 6” x 18” $800.00 Wynter Jones',
  },

  {
      image: 'assets/images/img3.jpg',
      name: 'Everywhere a Sign • NEKON',
      link: 'product3.html',
      price: '$1,500.00',
      description: 'NEKON Everywhere a Sign Acrylic 12" x 12" $450.00',
  },

  {
      image: 'assets/images/img4.jpg',
      name: 'Duddon Took A Jump • WS Cranmore',
      link: 'product4.html',
      price: '$1,500.00',
      description: 'Duddon Took A JumpAcrylic and charcoal 18x24x0.05600.00',
  },

  {
    image: 'assets/images/img4.jpg',
    name: 'Duddon Took A Jump • WS Cranmore',
    link: 'product4.html',
    price: '$1,500.00',
    description: 'Duddon Took A JumpAcrylic and charcoal 18x24x0.05600.00',
  },

  {
    image: 'assets/images/img4.jpg',
    name: 'Duddon Took A Jump • WS Cranmore',
    link: 'product4.html',
    price: '$1,500.00',
    description: 'Duddon Took A JumpAcrylic and charcoal 18x24x0.05600.00',
  },

  {
    image: 'assets/images/img4.jpg',
    name: 'Duddon Took A Jump • WS Cranmore',
    link: 'product4.html',
    price: '$1,500.00',
    description: 'Duddon Took A JumpAcrylic and charcoal 18x24x0.05600.00',
  },

  {
      image: 'assets/images/img4.jpg',
      name: 'Duddon Took A Jump • WS Cranmore',
      link: 'product4.html',
      price: '$1,500.00',
      description: 'Duddon Took A JumpAcrylic and charcoal 18x24x0.05600.00',
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
  
  // Handle form submissions
  const searchForms = document.getElementsByClassName('searchForm');
  Array.from(searchForms).forEach(searchForm => {
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const searchInput = this.getElementsByClassName('searchInput')[0]; // Use [0] to select the first input element within the form
      const query = searchInput.value;
      const results = searchProducts(query);
      redirectToResults(query, results);
    });
  });
  
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
  
  