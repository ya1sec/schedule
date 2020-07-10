$(document).ready(function () {
  // Get time
  const now = moment().format("MMMM Do YYYY");
  let nowHour24 = moment().format("H");

  // Set current date subheadting
  let dateHeading = $("#currentDate");
  dateHeading.text(now);

  // Get stored todos from localStorage
  // Parsing the JSON string to an object
  var storedPlans = [];

  // if (storedPlans !== null) {
  //   planTextArr = storedPlans;
  // }

  function renderPlans() {}

  function init() {
    // Write code here to check if there are todos in localStorage
    // If so, parse the value from localStorage and assign it to the todos variable
    storedplans = JSON.parse(localStorage.getItem("storedPlans")) || [];
    // Render todos to the DOM
    renderPlans();
  }

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

  var inputs = [$("#input-9")];

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
  function savePlan() {
    let index = $(this).attr("save-id");
    let value = planTextArr[index].val();
    console.log(value);
    localStorage.setItem("storedPlans", JSON.stringify(planTextArr));
  }
  $("button").on("click", savePlan);
});
