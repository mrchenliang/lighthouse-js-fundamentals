let talkingCalendar = function(date) {
  let temp = date.split("/");
  let year = Number(temp[0]);
  let month = temp[1];
  let day = temp[2];
  switch (day) {
    case "01":
      day = "1st";
      break;
    case "02":
      day = "2nd";
      break;
    case "03":
      day = "3rd";
      break;
    case "21":
      day = "21st";
      break;
    case "22":
      day = "22nd";
      break;
    case "23":
      day = "23rd";
      break;
    case "31":
      day = "31st";
      break;
    default:
      day = day + "th";
      break;
  }
  switch (month) {
    case "01":
      month = "January";
      break;
    case "02":
      month = "February";
      break;
    case "03":
      month = "March";
      break;
    case "04":
      month = "April";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "June";
      break;
    case "07":
      month = "July";
      break;
    case "08":
      month = "August";
      break;
    case "09":
      month = "September";
      break;
    case "10":
      month = "October";
      break;
    case "11":
      month = `November`;
      break;
    case "12":
      month = "December";
      break;
  }
  return `${month} ${day}, ${year}`;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
