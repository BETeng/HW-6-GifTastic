// var search = 'dog';//user input from form

// api key = hCyFEBdF8HQfMoLF7KsfUPThKdrfY5cW
var itemArray = [];
$('#add-item').on('click', function(event){
  event.preventDefault();
  console.log('click');
  var search = $('#response').val().trim();
  var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=hCyFEBdF8HQfMoLF7KsfUPThKdrfY5cW&q='+search+'&limit=10&offset=0&rating=PG-13&lang=en'
  
  console.log("search "+search)
  $.ajax({
    url: queryURL,
    method: "GET"
  })
  
  .then(function(response){
    console.log(queryURL);
    console.log(response.data);
    console.log('click2')
  })
 

})
//get item from textbox when submit button clicked and put into array
//loop thru array and look 


