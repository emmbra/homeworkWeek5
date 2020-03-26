$(document).ready(function(){

// sets current date
var $currentDay = moment().format('LL');
$("#currentDay").text($currentDay);

// sets current time
var $currentTime = moment().format('h:mm a');
$("#currentTime").text($currentTime);
// To do: set interval to have the time update dynamically 
// see class content



// Get saved information from local storage
// localStorage.getItem





// Event listener for save button
// Saves information to local storage
// targets user-notes class to capture user input
// traverses DOM from saveBtn to input
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    console.log(this);
    var time = $(this).parent().attr("id");
    var value = $(this).siblings(".user-notes").val();
    localStorage.setItem(time, value);
});



// Function to set the row color based on current time
// done by adding and removing past/present/future classes
// based on comparison to current hour
// function rowColor() {
//     var currentHour = moment().hours()

//     //target every time-block
//     $(".time-block").


//     //if currentHour < calendarHour, add class future
//     if (){
//         $(this).addClass("future")
//     }

//     //if currentHour > calendarHour, add class past
//     else if () {
//         $(this).addClass("past")
//     }

//     //if currentHour === calendarHour, add class present
//     else () {
//         $(this).addClass("present");
//     }
// }






});

// User Story - pseudocode
// 1. user opens webpage
// 2. retrieve date from local storage or blank something ""
// 3. current date is displayed at top of calendar
// 4. user scrolls down and sees
//     A. timeblocks for standard business hours 9AM - 5PM
//         a. 9 blocks
//     B. timeblocks are color coded:
//         a. Past = color1
//         b. Present = color2
//         c. Future = color3
//     C. timeblock on click:
//         a. able to enter text
//             1. create input field
//         b. able to save text
//             1. create save button
//             2. saved in local storage
//             3. upon page refresh, saved events persist

