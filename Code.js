/*
What this does: Along with a trigger, it creates a draft email to send your work status to someone on the upcoming Friday.

Note: This script requires a trigger to run. Set the trigger to run on Mondays. If it doesn't run for some reason, you can run it manually. It will increment until it finds the next Friday.

Issues:
-If you run it on a weekend, it will increment to the next Friday. That might be fine, or not what you want.

Opportunities:
-It doesn't send the email automatically. It might be good to do that. You'd just have to make sure that it's always up to date.

*/
function makeNewMilesEmail() {
  var days = 4; // Script should run on Mondays. Adds four days to the date.
  var todaysDate = new Date();
  var friday = new Date(todaysDate + days);
  if (friday.getDay() != 5) friday = loopDays(todaysDate); // If that screws up, just increment until you get to Friday

  var subject = 'Finn Updates ' + friday.toISOString().slice(0, 10);
  
  var body = 
  '<b>Done</b>:<br>\
  <ul><li></li></ul>\
  <b>Upcoming</b>:<br>\
  <ul><li></li></ul>\
  <b>Questions</b>:<br>\
  <ul><li></li></ul>';
GmailApp.createDraft('',subject,body, {htmlBody:body})
}

function loopDays(date) {
  var dayOfTheWeek = date.getDay();
  while (dayOfTheWeek != 5) {
    date.setDate(date.getDate() + 1);
    dayOfTheWeek = date.getDay();
  }
  return date;
}