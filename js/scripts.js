function pingPong(userInputNumber) {
  for (var index = 1; index <= userInputNumber; index++) {
    if (userInputNumber % 15 === 0) {
      console.log("pingpong");
      return "pingpong";
    }
    else if(index % 3 === 0) {
      console.log("ping");
      return "ping";
    }
    else if (index% 5 === 0) {
      console.log("pong");
      return "pong";
    }
    else {
      console.log(index);
      return index;
    }
  }

}

$(document).ready(function(){
  $("form").submit(function(event){

    event.preventDefault();
  });
  //event.preventDefault();
});
