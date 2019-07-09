var OMDB_API_URL = 'https://www.omdbapi.com/?apikey=ef09b0cc';

function getOMDBResults(title) {

  if (title.length == 0) {$("#result").html("Please enter text into the search field");} 
  
  else {
    
    $.get(OMDB_API_URL + "&t=" + title, function(searchResult) {

     
      var source = $('#movie-template').html();
     
      var template = Handlebars.compile(source);
     
      var movie = {
        title: searchResult.Title,
        releaseDate: searchResult.Released,
        actors: searchResult.Actors,
        poster: searchResult.Poster
      };
    
      var html = template(movie);

      
        $('#result').html(html);
    });
  }
};


$("#searchBtn").on('click', function(e) {
  e.preventDefault();
  getOMDBResults($("#searchField").val());
});