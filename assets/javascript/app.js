

var myFunction = function () {
    var myImages = ["Titanic", "Frozen", "Transformers", "Stripes"]
    console.log(myImages);
    myImages.forEach(function (element, i) {
        $("#buttons").append("<button data-movie="+ myImages[i] + ">" + myImages[i] + "</button>");
    
    });


 
   $("button").on("click", function() {
    console.log(this);
    var movie = $(this).attr("data-movie");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
    
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {  
          debugger;
            var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");

            //var rating = results[i].rating;

            //var p = $("<p>").text("Rating: " + rating);

            var movieImage = $("<img>");
            movieImage.attr("src", results[i].images.fixed_height.url);

            //gifDiv.prepend(p);
            gifDiv.prepend(movieImage);

            $("#gifs-appear-here").prepend(gifDiv);
          }
        });
    });

}
// });

// }



