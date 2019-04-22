// var search = 'dog';//user input from form

// api key = hCyFEBdF8HQfMoLF7KsfUPThKdrfY5cW
var topics = ['dog','cat','tree','hello'];

$('#add-item').on('click', function(event){
  event.preventDefault();
  console.log('click');
  var search = $('#response').val().trim();
  if(search == ''){
    return 
  }else{
  topics.push(search); 
  console.log(topics);
  renderButtons(topics);
  $('#response').val("");
  }
}); 

function renderButtons(topics){
  $('#arrayDiv').empty();
  for(var i = 0; i<topics.length; i++){
    var topicBtn = $('<button>');
    topicBtn.attr('arrayItem',topics[i]);
    topicBtn.addClass('topicClass');
    topicBtn.text(topics[i]);
    console.log(topics[i]);
    $('#arrayDiv').append(topicBtn); 
  }
};

function renderGif(){
  var gifSearch = $(this).attr('arrayItem')
  console.log('gifsearch: '+gifSearch);
  $('#gifContainer').empty();
  
  var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=hCyFEBdF8HQfMoLF7KsfUPThKdrfY5cW&q='+gifSearch+'&limit=10&offset=0&rating=PG-13&lang=en'

  $.ajax({
    url: queryURL,
    method: "GET"
  })
  
  .then(function(response){
    var results = response.data;
    console.log(results.length)
    // console.log(queryURL);
    console.log('response',response);
    console.log('data',results);
    for (var i=0; i<results.length; i++){
      var gifDiv = $('<div>');
      var rating = results[i].rating;
      var p = $('<p>').text('Rating: '+rating);
      console.log(rating);
      var image = $('<img>');
      image.attr('src', results[i].images.fixed_height_still.url);
      image.attr('still', results[i].images.fixed_height_still.url);
      image.attr('animate', results[i].images.fixed_height.url);
      // var stillGif = results[i].images.fixed_height_still.url
      // var moveGif = results[i].images.fixed_height.url
      image.attr('data-state', 'still')
      image.addClass('picture');
      gifDiv.append(p);
      gifDiv.append(image);
      $('#gifContainer').append(gifDiv);
    }
  })  
}
function changeStatus(){
  var state = $(this).attr('data-state');
  if (state === 'still'){
    $(this).attr('src',$(this).attr('animate'));
    $(this).attr('data-state','animate');
 
  }else{
    $(this).attr('src', $(this).attr('still'));
    $(this).attr('data-state','still');
  }
}
renderButtons(topics);
$(document).on('click', '.topicClass', renderGif)
$(document).on('click', '.picture', changeStatus)






