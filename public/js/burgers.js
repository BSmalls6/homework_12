/* global moment */

// When user clicks add-btn
$("#bur").on("click", function(event) {
  event.preventDefault();

  // Make a newChirp object
  var newBurger = {
    name: $("#name").val().trim(),
    order: $("#burger-text").val().trim(),
  };

  console.log(newBurger);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newBurger)
    // On success, run the following code
    .then(function() {

      var row = $("<div>");
      row.addClass("burger");

      row.append("<p>" + newBurger.name + "Burger ordered by: </p>");
      row.append("<p>" + newBurger.order + "</p>");

      $("#newBurger-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#burger-text").val("");
});

// When the page loads, grab all of our chirps
$.get("/api/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("burgers");

      row.append("<p>" + data[i].name + " Burger ordered by:</p>");
      row.append("<p>" + data[i].order + "</p>");

      $("#newBurger-area").prepend(row);

    }

  }

});
