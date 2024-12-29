function refreshPage() {
    location.reload();  
  }
  function filterMovies() {
    // Get the selected tag from the dropdown
    const filterValue = document.getElementById("movie-filter").value;

    // Get all movie elements
    const movies = document.querySelectorAll('.movie');

    // Loop through all movie elements
    movies.forEach(movie => {
        const movieTag = movie.getAttribute('tag'); // Get the tag attribute of the movie
        
        // If the filter value is empty, show all movies
        if (filterValue === "" || movieTag === filterValue) {
            movie.style.display = "block"; // Show the movie
        } else {
            movie.style.display = "none"; // Hide the movie
        }
    });
   
}
