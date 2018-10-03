import fetch from 'node-fetch'
class FetchServices {
  fetch (url) {
    return fetch(url)
  }
  getJsonResponse (url) {
    return this.fetch(url)
      .then((response) => response.json())
      .catch((error) => console.log(error))
  }
}

export { FetchServices }
