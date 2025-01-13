function refreshPage() {
    location.reload();  
  }
  function filterMoviesByGenre(selectedGenre) {
    // Get all movie elements
    const movies = document.querySelectorAll('.movies-container .movie');
  
    // Show or hide movies based on the selected genre
    movies.forEach(movie => {
      const movieGenre = movie.getAttribute('tag');
      movie.style.display = movieGenre === selectedGenre ? 'block' : 'none';
    });
  }
  
