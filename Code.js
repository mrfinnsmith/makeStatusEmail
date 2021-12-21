function makeNewMilesEmail() {
  var days = 4; // Script should run on Mondays. Adds four days to the date.
  var todaysDate = new Date();
  var friday = new Date(todaysDate + days);
  if (friday.getDay() != 5) friday = loopDays(todaysDate); // If that screws up, just increment until you get to Friday
  Logger.log(friday.getDay());
}

function loopDays(date) {
  var dayOfTheWeek = date.getDay();
  while (dayOfTheWeek != 5) {
    date.setDate(date.getDate()++);
    dayOfTheWeek = date.getDay();
  }
  return date;
}