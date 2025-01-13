function refreshPage() {
    location.reload();  
  }
  function filterShowsByGenre(selectedGenre) {
    // Get all TV show elements
    const shows = document.querySelectorAll('.shows-container .show');
  
    // Show or hide TV shows based on the selected genre
    shows.forEach(show => {
      const showGenre = show.getAttribute('tag');
      if (showGenre === selectedGenre || !selectedGenre) {
        show.style.display = 'block'; // Show matching shows
      } else {
        show.style.display = 'none'; // Hide non-matching shows
      }
    });
  }
  