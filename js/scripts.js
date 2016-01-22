function pingPong(userInputNumber) {
  for (var index = 1; index <= userInputNumber; index++) {
    if (userInputNumber % 15 === 0) {
      return "pingpong";
    }
    else if(userInputNumber % 3 === 0) {
      return "ping";
    }
    else if (userInputNumber % 5 === 0) {
      return "pong";
    }
  }

}

$(document).ready(function(){
  $("form").submit(function(event){

    event.preventDefault();
  });
  //event.preventDefault();
});
