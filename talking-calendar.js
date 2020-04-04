// We will be given a date as a string (not a Date object).
// The date will always be formatted as YYYY/MM/DD.
// We will have to parse the given string and produce a human readable date.

const talkingCalendar = function(date) {
  let humanReadable = "";
  let dayEnding = "";
  let day = "";
  
  const monthKeys = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June", 
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December"
  };
  
  let stringThis = date.split("");
  // build the month in human form
  const newKey = `${date[5]}${date[6]}`;
  const month = monthKeys[newKey];
  // build the day in human form
  if (stringThis[9] == 1) {
   dayEnding = "st";
  } else if (stringThis[9] == 2) {
   dayEnding = "nd";
  } else if (stringThis[9] == 3) {
   dayEnding = "rd";
  } else {
   dayEnding = "th";
  }
  if ( date[8] == 0) {
    day = `${date[9]}${dayEnding}`;
  } else {
    day = `${date[8]}${date[9]}${dayEnding}`;
  }
  
  const year = `${date[0]}${date[1]}${date[2]}${date[3]}`;
  humanReadable = `${month} ${day}, ${year}`
  return humanReadable;

}

console.log(talkingCalendar("2020/04/03"));
console.log(talkingCalendar("2020/10/09"));
console.log(talkingCalendar("2020/11/21"));