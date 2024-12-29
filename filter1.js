function refreshPage() {
    location.reload();  
  }
  function filterShows() {
    // Get the selected tag from the dropdown
    const filterValue = document.getElementById("show-filter").value;

    // Get all movie elements
    const shows = document.querySelectorAll('.show');

    // Loop through all movie elements
    shows.forEach(show => {
        const showTag = show.getAttribute('tag'); // Get the tag attribute of the movie
        
        // If the filter value is empty, show all movies
        if (filterValue === "" || showTag === filterValue) {
            show.style.display = "block"; // Show the movie
        } else {
            show.style.display = "none"; // Hide the movie
        }
    });
}