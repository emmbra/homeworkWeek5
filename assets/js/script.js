$(document).ready(function(){

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


// declare global variables

var $currentDay = moment().format('LL');
$("#currentDay").text($currentDay);

var $currentTime = moment().format('h:mm a');
$("#currentTime").text($currentTime);
// set interval to have the time update -- see class content

var $currentHour = moment().format('h');

// Get information from local storage

// Save information to local storage
$(".save-btn").on("click", function(event) {
    event.preventDefault();
    console.log(this);
    var time = $(this).parent.attr("id");
    var value = $(this).siblings(".user-notes").val();
    
}

// Function to set the row color based on current time

function rowColor () {
    if(parseInt($(.hour)) > parseInt(moment().format('h'))){
        row.addClass("future");
    } else if(parseInt($(.hour)) < parseInt(moment().format('h'))){
        row.addClass("past");
    } else {
        row.addClass("present");
    }
}
rowColor();

// create listener for save button
// target note-field div to capture user input
// traverse DOM from button to input, use this as starting point

// .closest() - pass in selector - finds closest parent

});