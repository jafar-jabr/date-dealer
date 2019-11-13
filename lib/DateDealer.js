
exports.getDatesArray = (startDate, numberOfDates, include = true) => {
  const dateFormatted = new Date(startDate);
  const maxDays = numberOfDates;
  const datesArray = [];
  let startValue = 1;
  if (include) {
    startValue = 0;
  }
  for (let i = startValue; i <= maxDays; i += 1) {
    const newDate = new Date(dateFormatted);
    newDate.setDate(newDate.getDate() + i);
    const dd = `0${newDate.getDate()}`.slice(-2);
    const mm = `0${newDate.getMonth() + 1}`.slice(-2);
    const y = newDate.getFullYear();
    const someFormattedDate = `${y}-${mm}-${dd}`;
    datesArray.push(someFormattedDate);
  }
  return datesArray;
};

exports.getDatesBefore = (startDate, numberOfDates, include) => {
  const dateFormatted = new Date(startDate);
  const datesArray = [];
  let startValue = 1;
  if (include) {
    startValue = 0;
  }
  for (let i = numberOfDates; i >= startValue; i -= 1) {
    const newDate = new Date(dateFormatted);
    newDate.setDate(newDate.getDate() - i);
    const dd = `0${newDate.getDate()}`.slice(-2);
    const mm = `0${newDate.getMonth() + 1}`.slice(-2);
    const y = newDate.getFullYear();
    const someFormattedDate = `${y}-${mm}-${dd}`;
    datesArray.push(someFormattedDate);
  }
  return datesArray;
};

exports.getToday = (separator = '/') => {
  const today = new Date();
  return exports.formatTheTime(today,'date', separator);
};

exports.getYesterday = (separator = '/') => {
  const today = new Date();
  today.setDate(today.getDate() - 1);
  return exports.formatTheTime(today,'date', separator);
};

exports.getDatesAfter = (startDate, numberOfDates, include) => {
  const dateFormatted = new Date(startDate);
  const maxDays = numberOfDates;
  const datesArray = [];
  let startValue = 1;
  if (include) {
    startValue = 0;
  }
  for (let i = maxDays; i >= startValue; i -= 1) {
    const newDate = new Date(dateFormatted);
    newDate.setDate(newDate.getDate() + i);
    const dd = `0${newDate.getDate()}`.slice(-2);
    const mm = `0${newDate.getMonth() + 1}`.slice(-2);
    const y = newDate.getFullYear();
    const someFormattedDate = `${y}-${mm}-${dd}`;
    datesArray.push(someFormattedDate);
  }
  return datesArray;
};

exports.addMinutes = (timeString, addMinutes) => {
  if (!timeString.match(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)) {
    return null;
  }
  const timeSplit = timeString.split(':');
  let hours = timeSplit[0].toNumber();
  let minutes = timeSplit[1].toNumber() + addMinutes.toNumber();
  hours += Math.floor(minutes / 60);
  while (hours >= 24) {
    hours -= 24;
  }
  minutes %= 60;
  return `${`0${hours}`.slice(-2)}:${`0${minutes}`.slice(-2)}`;
};

exports.getDatesBetween = (start, end) => {
  const arr = [];
  const dt = start;
  let theDate = null;
  while (dt <= end) {
    theDate = exports.formatTheTime(new Date(dt), 'date');
    arr.push(theDate);
    dt.setDate(dt.getDate() + 1);
  }
  return arr;
};

/**
 * @about return day index [Mon,Tue,...,Sun] -> [0,1,...,6]
 */

exports.getDayIndex = theDate => {
  const dateObject = new Date(theDate);
  const dayIndex = dateObject.getDay();
  if (dayIndex === 0) {
    return 6;
  }
  return dayIndex - 1;
};

exports.formatTheTime = (UnixTimestamp, type, separator = '/') => {
  const now = new Date(UnixTimestamp);
  switch (type) {
    case 'time':
      return `${now.getHours() < 10 ? `0${now.getHours()}` : now.getHours()}:${
        now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()}`;
    case 'date':
      return `${now.getFullYear()}${separator}${
        now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1
      }${separator}${now.getDate() < 10 ? `0${now.getDate()}` : now.getDate()}`;
    default:
      return `${now.getFullYear()}${separator}${
        now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1
      }${separator}${now.getDate() < 10 ? `0${now.getDate()}` : now.getDate()} ${
        now.getHours() < 10 ? `0${now.getHours()}` : now.getHours()
      }:${now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()}:${
        now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds()}`;
  }
};

exports.getTimeStamp = () => {
  const now = new Date();
  return `${now.getFullYear()}/${
    now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1
  }/${now.getDate() < 10 ? `0${now.getDate()}` : now.getDate()} ${
    now.getHours() < 10 ? `0${now.getHours()}` : now.getHours()
  }:${now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()}:${
    now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds()
  }`;
};

exports.isWeekEnd = theDate => {
  const dayIndex = exports.getDayIndex(theDate);
  return dayIndex === 5 || dayIndex === 6;
};


