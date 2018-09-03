(function() {
  function displaySearchResults(results, store) {
    let searchResults = document.getElementById('search-results');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    if (results.length) { // Are there any results?
      let appendString = '';

      for (let i = 0; i < results.length; i++) {  // Iterate over the results
        let item = store[results[i].ref];
        appendString += '<li class="cell card large-4 medium-6 small-12">';
        appendString +='<a class="display-block padding-1 height-100" href="' + item.url + '">';
        if (item.image) {
          appendString +='<img src="/' + item.image  +'">';
        }
        appendString +='<h5 class="font-bold black">' + item.title + '</h5>';
        if (item.date) {
          const event = new Date( item.date );
          appendString +='<h5 class="subheader h6 font-bold">' + event.toLocaleDateString('fr-FR', options) + '</h5>';
        }
        appendString += '<p class="black">' + item.content.substring(0, 150) + '...</p></li></a>';
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<li>No results found</li>';
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
        this.field('date');
        this.field('content');
        for (let key in window.store) { // Add the data to lunr
          this.add({
            'id': key,
            'title': window.store[key].title,
            'author': window.store[key].author,
            'category': window.store[key].category,
            'date': window.store[key].date,
            'content': window.store[key].content
          });
        }
        });
      let results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); // We'll write this in the next section
  }
})();
