var apiKey = 'api_key=GXE4OxxClSzQ85muxE4f1ySTrXwlWTjM&';
var limit = '5&'

$(document).ready(function() {
  

  
    function getGif(query) {
      console.log(query);
      var param = {'http://api.giphy.com/v1/gifs/search?' + apiKey + 'q=' + query + '&' + limit + 'offset=0&rating=g&lang=en'};
      
      $.get(param) {
        var gifs = JSON.parse(data);
        var firstgif = gifs.data[0].images.fixed_width.url;
        $("#image").html("<img src='" + firstgif + "'>");
      };

      };
    
  
    $("#submitButton").on("click", function() {
      var query = $("#inputQuery").val();
      getGif(query);
    });


    });
