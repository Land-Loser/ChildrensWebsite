$(document).ready(function(){

// Fade in images to be displayed in the Intro section
  $("#showImg").click(function(){
        $("#figure2").fadeIn("slow");
        $("#figure3").fadeIn("2000");
    });

// Message and styles displayed in page when mouse enter or leave

  $("#game").mouseenter(function(){
    $("#mouseh2").html("You Entered the Game, Let's Roll!");
  });

  $("#game").mouseleave(function(){
    $("#mouseh2").html("Thakns For Playing!");
  });

// Get the values from the form that the user selected

  $("#gameForm").submit(function(event){

    event.preventDefault();

    var userScore = 0;

    if($('.country').val() == "3") {
      userScore++;
    }

    if($('.age').val() == "3") {
      userScore++;
    }

    if($('.profession').val() == "3") {
      userScore++;
    }

    if($('.poet').val() == "1") {
      userScore++;
    }

    if($('.book').val() == "1") {
      userScore++;
    }

    $("#scoreP").html(userScore);

// if statements to determine user's answer and calculate user's score

    if(userScore == 0){
      $("#commentP").html("Sorry, seems like you know little about the author");
    }

    if(userScore == 1){
      $("#commentP").html("Emmm, getting one right is better than none!");
    }

    if(userScore == 2){
      $("#commentP").html("You get two out of five, keeps on!");
    }

    if(userScore == 3){
      $("#commentP").html("Three! Already more than half!");
    }

    if(userScore == 4){
      $("#commentP").html("You are nearly there! Just get one more right!");
    }

    if(userScore == 5){
      $("#commentP").html("All correct! High five!");
    }

  });

  $("submitButton").click(function(){

  $("#gameForm").submit();

  });

});
