// code that deals with getting the data


const getEntries = () => {
  return fetch("http://localhost:3000/entries") // Fetch from the API
    .then(response => response.json() // Parse as JSON
  )
};