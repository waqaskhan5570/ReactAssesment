function createDateAndTimeFromISO(dateTimeInISO, _date, _time, _seconds) {
  try {
    let [date, time] = dateTimeInISO.split("T");
    let dateObject = new Date(date);

    // eslint-disable-next-line no-unused-vars
    let [hour, minutes, seconds] = time.split(":");
    seconds = seconds.split(".");
    let result = "";
    if (_date) {
      date = dateObject.toDateString();
      date = date.toString();
      let [weekDay, month, day, year] = date.split(" ");
      result += day + " " + month + " " + year;
    }
    if (_time) {
      result += " " + hour + ":" + minutes;
    }

    if (_seconds) {
      result += " " + seconds;
    }
    return result;
  } catch (e) {
    console.log("createDateAndTimeFromISO", e);
    return dateTimeInISO;
  }
}

export { createDateAndTimeFromISO };
