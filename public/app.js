// Grab the articles as a json
$.getJSON("/articles", function(data) {
    // For each one
    for (var i = 0; i < data.length; i++) {
      // Display the apropos information on the page
      $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "</p>");
      //+ "<br />" + data[i].link + 
      $("#articles").append(` <a href="${data[i].link}" target="_blank"> ${data[i].link} </a> <br>` )

      $("#articles").append(`<button class="btn btn-outline-dark" id="savedArticle" data-link="${data[i].link}" data-title="${data[i].title}"> Save Article </button> <hr>`)
    }
  });

  $("#scrape").on("click", function(event){
    event.preventDefault();
    $.get("/scrape").then((res) => {
      console.log(res);
      window.location.reload()
    })
  })

  $(document).on("click", "#savedArticle", function (event) {
    event.preventDefault();
    var title = $(this).attr(`data-title`);
    var link = $(this).attr(`data-link`);

    var data = {
      title,
      link
    }
    console.log(data);
    $.post("/api/saved", data).then((res) => {
      console.log(res, "this is the saved article");
    })
  })
    
  
  // Whenever someone clicks a p tag
  $(document).on("click", "p", function() {
    // Empty the notes from the note section
    $("#notes").empty();
    // Save the id from the p tag
    var thisId = $(this).attr("data-id");
  
    // Now make an ajax call for the Article
    $.ajax({
      method: "GET",
      url: "/articles/" + thisId
    })
      // With that done, add the note information to the page
      .then(function(data) {
        console.log(data);
        // The title of the article
        $("#notes").append("<h1 class='noteHeader'>" + data.title + "</h1>");
        // An input to enter a new title
        $("#notes").append("<input id='titleinput' name='title' >");
        // A textarea to add a new note body
        $("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
        // A button to submit a new note, with the id of the article saved to it
        $("#notes").append("<button class='btn btn-dark' data-id='" + data._id + "' id='savenote'>Save Note</button>");
  
        // If there's a note in the article
        if (data.note) {
          // Place the title of the note in the title input
          $("#titleinput").val(data.note.title);
          // Place the body of the note in the body textarea
          $("#bodyinput").val(data.note.body);
        }
      });
  });
  
  // When you click the savenote button
  $(document).on("click", "#savenote", function() {
    // Grab the id associated with the article from the submit button
    var thisId = $(this).attr("data-id");
  
    // Run a POST request to change the note, using what's entered in the inputs
    $.ajax({
      method: "POST",
      url: "/articles/" + thisId,
      data: {
        // Value taken from title input
        title: $("#titleinput").val(),
        // Value taken from note textarea
        body: $("#bodyinput").val()
      }
    })
      // With that done
      .then(function(data) {
        // Log the response
        console.log(data);
        // Empty the notes section
        $("#notes").empty();
      });
  
    // Also, remove the values entered in the input and textarea for note entry
    $("#titleinput").val("");
    $("#bodyinput").val("");
  });