'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("SWAGSWAGSWAG");
    $("#testjs").text("Please wait...");
    $(".jumbotron p").toggleClass("active");


	});



	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
  $("a.thumbnail").click(projectClick);

}

function projectClick(e) {
    console.log("This Works");
    // prevent the page from reloading 
    e.preventDefault();
    // In an event handler, $(this) refers to 
    // the object that triggered the event 


    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    var black = false;
    if (description.length == 0) {
      $(containingProject).append("");
      $(this).css("background-color", "#000000");
      black = true;
    }
    else {
        if(black == true){
          $(this).css("background-color", "#FFFFFF");
          black = false;
        }
        else{ $(this).css("background-color", "#000000");
        black = true;}
        $(description).fadeToggle();
    }
}