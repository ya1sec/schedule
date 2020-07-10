// DEPENDENCIES
var saveBtn = $("#saveBtn");
var currentDay = $("#currentDay");
var textArea = $("#textarea");
var container = $("#container");

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

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// TODO: SAVE TO LOCAL STORAGE WHEN SAVE BUTTON IS CLICKED

// timeblockContainer.addEventListener("click", function (event) {
//   var element = event.target;
//   // If that element is a button...
//   if (element.matches("button") === true) {
//     // Get its data-index value and remove the todo element from the list
//     var index = element.parentElement.getAttribute("data-index");
//     todos.splice(index, 1);
//     // Store updated todos in localStorage, re-render the list
//     storeTodos();
//     renderTodos();
//   }
// });

//append textArea to respective hour container
function notify() {
  alert("clicked");
}
$("button").on("click", notify);
