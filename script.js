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
  $("#input-0").val(),
  $("#input-1").val(),
  $("#input-2").val(),
  $("#input-3").val(),
  $("#input-4").val(),
  $("#input-5").val(),
  $("#input-6").val(),
  $("#input-7").val(),
  $("#input-8").val(),
];
let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));
console.log(storedPlans);

// selecting all .description fields (inputs)
const fields = $(".description");
// looping through each to set value to match storedPlans
fields.each(function (i, field) {
  $(field).val(storedPlans[i]);
});

//Function to store the input of whichever save button was clicked
$("button").on("click", function (event) {
  event.preventDefault();

  let index = $(this).attr("save-id");
  let inputId = "#input-" + index;
  let value = $(inputId).val();
  planTextArr[index] = value;
  console.log(value + index);
  localStorage.setItem("storedPlans", JSON.stringify(planTextArr));
  // console.log(localStorage.setItem("storedPlans", JSON.stringify(planTextArr)));
});

//Update color by time
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
