/* global moment */

// When user clicks add-btn
$("#burger-submit").on("click", function(event) {
  event.preventDefault();
console.log("burger submitteed");
  // Make a newChirp object
  var newBurger = {
    name: $("#name").val().trim(),
    orders: $("#burger-text").val().trim(),
  };

  $(".delete").on("click", function(event){
    event.preventDefault();

  })



  console.log(newBurger);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newBurger)
    // On success, run the following code
    .then(function() {

      var row = $("<div>");
      row.addClass("burger");
      row.addClass("delete")
      row.append("<p>" + newBurger.name + "Burger ordered by: </p>");
      row.append("<p>" + newBurger.orders + "</p>");
      row.append("<button>"+"Eat Burger"+"</button>")

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
      row.append("<p>" + data[i].orders + "</p>");

      $("#newBurger-area").prepend(row);

    }

  }

});
