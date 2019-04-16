var search = 'cat';//user input from form
var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=hCyFEBdF8HQfMoLF7KsfUPThKdrfY5cW&q'+ search + '=&limit=10&offset=0&rating=G&lang=en';
// api key = hCyFEBdF8HQfMoLF7KsfUPThKdrfY5cW
var itemArray = [];

$('#test').click(function(){

  $.ajax({
    url: queryURL,
    method: "GET"
  })
  
  .then(function(response){
    console.log(queryURL)
  })

})



