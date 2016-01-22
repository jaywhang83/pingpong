function pingPong(userInputNumber) {
  for (var index = 1; index <= userInputNumber; index++) {
    if(userInputNumber % 3 === 0) {
      return "ping";
    }
  }

}

$(document).ready(function(){
  $("form").submit(function(event){

    event.preventDefault();
  });
  //event.preventDefault();
});
