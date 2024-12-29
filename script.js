// Refresh function to reload the page when logo is clicked
function refreshPage() {
  location.reload();  
}

// Define the search data (can be extended with more films/shows)
const searchData = {
  "avatar": "avatar.html",
  "the matrix": "the matrix.html",  // Changed filename to match the URL structure
  "interstellar": "interstellar.html",
  "paprika": "paprika.html",
  "bolice": "bolice.html",
  "el andalib": "el andalib el dokki.html",
  "el eiyal herbet": "el eiyal herbet.html",
  "free guy" : "free guy.html",
  "harka " : "harka.html",
  "howls":"howls moving castle.html",
  "jujutsu kaisen":"jujutsu kaisen.html",
  "mr bean":"mr bean.html",
  "nouba":"nouba.html",
  "noura":"noura.html",
  "oustoura":"ostoura.html",
  "parasyte":"parasyte.html",
  "the dictator":"the dictator.html",
  "un ete": "un ete a la goulette.html",
  "your name":"your name.html",
  



};

// Search function to handle the search logic
function search() {
  // Get the value from the search bar
  const query = document.getElementById("search-bar").value.trim().toLowerCase();

  // Check if the search query is empty
  if (query === "") {
      document.getElementById("errorMessage").textContent = "Veuillez entrer un terme de recherche.";
      return;
  }

  // Check if the query matches any film/show in the search data
  const resultPath = searchData[query];

  if (resultPath) {
      // If a result is found, redirect to the corresponding page
      window.location.href = resultPath;
  } else {
      // If no result is found, show an error message
      document.getElementById("errorMessage").textContent = "Aucun résultat trouvé pour votre recherche.";
  }
}
