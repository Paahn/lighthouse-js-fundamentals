// We will be given a date as a string (not a Date object).
// The date will always be formatted as YYYY/MM/DD.
// We will have to parse the given string and produce a human readable date.

const talkingCalendar = function(date) {

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
  }
  
  let humanReadable = date.split("");
  const newKey = `${date[5]}${date[6]}`;
  console.log(monthKeys[newKey]);
  return humanReadable;

}

console.log(talkingCalendar("2020/04/03"));
console.log(talkingCalendar("2020/10/13"));