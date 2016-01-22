function pingPong(userInputNumber) {
  var numberBank = [];
  for (var index = 1; index <= userInputNumber; index++) {
    if (index % 15 === 0) {
      console.log("pingpong");
      numberBank.push("pingpong");
    }
    else if(index % 3 === 0) {
      console.log("ping");
      numberBank.push("ping");
    }
    else if (index% 5 === 0) {
      console.log("pong");
      numberBank.push("pong");
    }
    else {
      console.log(index);
      numberBank.push(index);
    }
  }
  return numberBank;
}

$(document).ready(function(){
  $("form").submit(function(event){
    var userInputNumber = parseInt($("#number").val());
    var numberHolder = pingPong(userInputNumber)
    $("#result").empty();
    console.log(numberHolder);
    numberHolder.forEach(function(index){
      $("#result").append("<li>" + index + "</li>");
    });
    event.preventDefault();
  });
});
