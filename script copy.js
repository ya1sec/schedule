$(document).ready(function () {
  // Get time
  const now = moment().format("MMMM Do YYYY");
  let nowHour24 = moment().format("H");

  // Set current date subheadting
  let dateHeading = $("#currentDate");
  dateHeading.text(now);

  // Get stored todos from localStorage
  // Parsing the JSON string to an object
  let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));

  // If plans were retrieved from localStorage, update the plan array to display the saved values
  if (storedPlans !== null) {
    planTextArr = storedPlans;
  } else {
    // Nine blank input boxes are shown
    planTextArr = new Array(9);
  }

  var plannerDiv = $("#plannerContainer");
  plannerDiv.empty();

  // DEPENDENCIES
  var saveBtn = $("#saveBtn");
  var currentDay = $("#currentDay");
  var textArea = $("#textarea");

  // Timeblock containers
  var hr9 = $("#hour9");
  var hr10 = $("#hour10");
  var hr11 = $("#hour11");
  var hr12 = $("#hour12");
  var hr1 = $("#hour1");
  var hr2 = $("#hour2");
  var hr3 = $("#hour3");
  var hr4 = $("#hour4");
  var hr4 = $("#hour5");

  var inputs = [];

  // WHEN I view the timeblocks for that day
  // THEN each timeblock is color coded to indicate whether it is in the past, present, or future
  // WHEN I click into a timeblock
  // THEN I can enter an event
  // WHEN I click the save button for that timeblock
  // THEN the text for that event is saved in local storage
  // WHEN I refresh the page
  // THEN the saved events persist

  // TODO: SAVE TO LOCAL STORAGE WHEN SAVE BUTTON IS CLICKED

  //append textArea to respective hour container
  function notify() {
    alert("clicked");
  }
  $("button").on("click", notify);
});
