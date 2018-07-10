(function() {
  function displaySearchResults(results, store) {
    let searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
      let appendString = '';

      for (let i = 0; i < results.length; i++) {  // Iterate over the results
        let item = store[results[i].ref];
        appendString += '<li><a href="' + item.url + '"><h3>' + item.title + '</h3></a>';
        appendString += '<p>' + item.content.substring(0, 150) + '...</p></li>';
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<li>No results found</li>';
    }
  }

  function getQueryVariable(letiable) {
    let query = window.location.search.substring(1);
    let lets = query.split('&');

    for (let i = 0; i < lets.length; i++) {
      let pair = lets[i].split('=');

      if (pair[0] === letiable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  let searchTerm = getQueryVariable('query');

  if (searchTerm) {
    document.getElementById('search-box').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.


      let idx = lunr(function () {
        this.field('id');
        this.field('title', { boost: 10 });
        this.field('author');
        this.field('category');
        this.field('content');
        for (let key in window.store) { // Add the data to lunr
          this.add({
            'id': key,
            'title': window.store[key].title,
            'author': window.store[key].author,
            'category': window.store[key].category,
            'content': window.store[key].content
          });
        }
        });
      let results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); // We'll write this in the next section
  }
})();
