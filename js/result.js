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
      div.className = 'img-txt';

      const link = document.createElement('a');
      link.href = 'divergent.html';

      const img = document.createElement('img');
      img.src = product.image;
      img.alt = '';

      const p = document.createElement('p');
      p.className = 'fir-pt';
      p.textContent = product.name;

      link.appendChild(img);
      link.appendChild(document.createElement('br'));
      link.appendChild(p);
      link.appendChild(document.createElement('br'));
      div.appendChild(link);
      searchResults.appendChild(div);
    });
  }
}