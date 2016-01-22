function pingPong(userInputNumber) {
  var numberBank = [];
  for (var index = 1; index <= userInputNumber; index++) {
    if (index % 15 === 0) {
      //console.log("pingpong");
      numberBank.push("pingpong");
    }
    else if(index % 3 === 0) {
      //console.log("ping");
      numberBank.push("ping");
    }
    else if (index% 5 === 0) {
      //console.log("pong");
      numberBank.push("pong");
    }
    else {
      //console.log(index);
      numberBank.push(index);
    }
  };
  return numberBank;
};

$(document).ready(function(){
  $("form").submit(function(event){
    var userInputNumber = parseInt($("#number").val());

    if (!userInputNumber) {
      alert("Not a valid input. Please input number only");
    }
    else {
      var numberHolder = pingPong(userInputNumber);
      numberHolder.forEach(function(index){
        $("#result").append("<li>" + index + "</li>");
      });
    }
    event.preventDefault();
  });

  $("#clear").click(function(event) {
    $("#result").empty();
  });
  event.preventDefault();
});
