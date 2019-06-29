

var myFunction = function () {
    var myImages = ["Titanic", "Frozen", "Transformers", "Stripes"]
    console.log(myImages);
    myImages.forEach(function (element, i) {
        $("#buttons").append("<button data-movie="+ myImages[i] + ">" + myImages[i] + "</button>");
    
    });


 
   $("button").on("click", function() {
    console.log(this);
    $("#gifs-appear-here").empty();

    var movie = $(this).attr("data-movie");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
    
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {  
            var results = response.data;
            console.log(results);

          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);


            //<img src="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif" data-still="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif" data-animate="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200.gif" data-state="still" class="gif">;

  
            var movieImage = $("<img>");
            console.log(results[i]);
            //movieImage.attr("state", "still");
            movieImage.attr("src", results[i].images.original_still.url);
            movieImage.attr("data-still", results[i].images.original_still.url);
            movieImage.attr("data-animate", results[i].images.original.url);
            movieImage.attr("data-state", "still");

            //===========
            movieImage.on("click", function() {
                // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
                console.log(this);
                var state = $(this).attr("data-state");
                // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                // Then, set the image's data-state to animate
                // Else set src to the data-still value
    
                if (state === "still") {
                var whatIsTheUrl = $(this).attr("data-animate");
                  $(this).attr("src", $(this).attr("data-animate"));
                  $(this).attr("data-state", "animate");
                } else {
                  $(this).attr("src", $(this).attr("data-still"));
                  $(this).attr("data-state", "still");
                }
              });

            //===========

            gifDiv.prepend(p);
            gifDiv.prepend(movieImage);

            $("#gifs-appear-here").prepend(gifDiv);
          }
        });
    });

}
// });

// }



