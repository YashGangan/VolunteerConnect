document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('search-form');
    const resultsList = document.getElementById('results-list');
  
    searchForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Get form values
      const keywordInput = document.getElementById('keyword-input').value;
      const locationInput = document.getElementById('location-input').value;
      const categorySelect = document.getElementById('category-select').value;
  
      // Perform search logic and update resultsList
      // You can make an AJAX request to a server or use predefined data to populate the results dynamically
  
      // Example code to populate resultsList
      const results = [
        { title: 'Opportunity 1', organization: 'Organization A' },
        { title: 'Opportunity 2', organization: 'Organization B' },
        { title: 'Opportunity 3', organization: 'Organization C' },
      ];
  
      resultsList.innerHTML = '';
  
      if (results.length === 0) {
        resultsList.innerHTML = '<li>No results found.</li>';
      } else {
        results.forEach(function (result) {
          const li = document.createElement('li');
          li.textContent = result.title + ' - ' + result.organization;
          resultsList.appendChild(li);
        });
      }
    });
  });
  
  