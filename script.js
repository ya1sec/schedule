// Get time
const now = moment().format("MMMM Do YYYY");
const currentTime = moment().format("HH:MM");
const currentDay = moment().format("dddd");
let nowHour24 = moment().format("H");

// Set current date subheadting
$("#currentDate").text(now);
$("#currentDay").text(currentDay);

// Array of input elements
var planTextArr = [
  $("#input-0"),
  $("#input-1"),
  $("#input-2"),
  $("#input-3"),
  $("#input-4"),
  $("#input-5"),
  $("#input-6"),
  $("#input-7"),
  $("#input-8"),
];
let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));
console.log(storedPlans);

if (storedPlans !== null) {
  planTextArr = storedPlans;
} else {
  planTextArr = new Array(9);
}

//Function to store the input of whichever save button was clicked
$("button").on("click", function (event) {
  event.preventDefault();

  let index = $(this).attr("save-id");
  let inputId = "#input-" + index;
  let value = $(inputId).val();
  planTextArr[index] = value;
  console.log(value + index);
  localStorage.setItem("storedPlans", JSON.stringify(planTextArr));
  console.log(localStorage.setItem("storedPlans", JSON.stringify(planTextArr)));
});

// Update color by time
for (let hour = 9; hour <= 17; hour++) {
  if (hour > 12) {
    displayHour = hour - 12;
    ampm = "pm";
  } else {
    displayHour = hour;
    ampm = "am";
  }
  if (hour < nowHour24) {
    $(".description").addClass("past");
  } else if (hour > nowHour24) {
    $(".description").addClass("future");
  } else {
    $(".description").addClass("present");
  }
}

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
