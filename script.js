$(document).ready(function(){
  $("#play-button").click(function(){

        if($("#character-box").css("height") == "300px"){
          $("#character-box").css("height", "");
          $("#play-text").css("display", "block");
          $("#play-button").text("Play");
          $("#character").addClass("d-none");

        } else {
          $("#character-box").css("height", "300px");
          $("#play-text").css("display", "none");
          $("#play-button").text("Stop");
          $("#character").removeClass("d-none");

        }
  })
});
