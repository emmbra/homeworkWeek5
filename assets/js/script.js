$(document).ready(function() {

  // sets current date
  var $currentDay = moment().format("LL");
  $("#currentDay").text($currentDay);

  // sets current time
  var $currentTime = moment().format("h:mm a");
  $("#currentTime").text($currentTime);
  // To do: set interval to have the time update dynamically
  // see class content

  // Get saved information from local storage
  
  function getInfo () {
    for(var i = 9; i < 18; i++) {
      var storedInfo = localStorage.getItem(`hour-${i}`);
      $(`#hour-${i}`).children(".user-notes").text(storedInfo);
    }
    
  }

  getInfo();

  // Event listener for save button
  // Saves information to local storage
  // targets user-notes class to capture user input
  // traverses DOM from saveBtn to input
  $(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var time = $(this)
      .parent()
      .attr("id");
    var value = $(this)
      .siblings(".user-notes")
      .val();
    localStorage.setItem(time, value);
  });

  // Function to set the row color based on current time
  // done by adding and removing past/present/future classes
  // based on comparison to current hour
  function rowColor() {
    $(".user-notes").each(function() {
      var currentHour = moment().hour();
      var calendarHour = parseInt($(this).parent().attr("value"));
      if (currentHour === calendarHour) {
        $(this).addClass("present");
      } else if (currentHour > calendarHour) {
        $(this).addClass("past");
      } else if (currentHour < calendarHour) {
        $(this).addClass("future");
      }
    });
  }
  rowColor();
});


