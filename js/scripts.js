//user interface

$("form#inputForm").submit(event) {
  var numbers = parseInt($("input").var());
  $(".output").empty();

//end of user interface

//Business logic

  for(var index = 1; index <= number; index += 1) {
    if (index % 15 === 0) {
      $(".output").append("<li>" + "Ping-Pong" + "</li>");
    }else if (index % 3 === 0){
      $(."output").append("<li>" + "Ping" + "</li>");
    }else if (index % 5 === 0) {
      $(".output").append("<li>" + "Pong" + "</li>");
    }else {
      $(".output").append("<li>" + index + "</li>");
    }
  }
  event.preventDefault();
};

//end of business logic
