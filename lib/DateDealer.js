/* eslint-disable no-param-reassign */
const formatter = require('./Formatter');
const parser = require('./DateParser');
const dateObject = require('./DateObject');

/**
 * @param {string| Date} startDate
 * @param {number} numberOfDates
 * @param {boolean} include to include the start date or not
 * @returns {string []}
 */
exports.getDatesArray = (startDate, numberOfDates, include = true) => {
  const dateFormatted = parser.parseToDate(startDate);
  const maxDays = numberOfDates;
  const datesArray = [];
  let startValue = 1;
  if (include) {
    startValue = 0;
  }
  for (let i = startValue; i <= maxDays; i += 1) {
    const newDate = new Date(dateFormatted.getTime());
    newDate.setDate(newDate.getDate() + i);
    datesArray.push(exports.doFormat(newDate, 'yyyy-mm-dd'));
  }
  return datesArray;
};

/**
 * @param {string| Date} startDate
 * @param {number} numberOfDates
 * @param {boolean} include to include the start date or not
 * @returns {string []}
 */
exports.getDatesBefore = (startDate, numberOfDates, include = true) => {
  const dateFormatted = parser.parseToDate(startDate);
  const datesArray = [];
  let startValue = 1;
  if (include) {
    startValue = 0;
  }
  for (let i = numberOfDates; i >= startValue; i -= 1) {
    const newDate = new Date(dateFormatted.getTime());
    newDate.setDate(newDate.getDate() - i);
    datesArray.push(exports.doFormat(newDate, 'yyyy-mm-dd'));
  }
  return datesArray;
};

/**
 * @param {string| Date} startDate
 * @param {number} numberOfDates
 * @param {boolean} include to include the start date or not
 * @returns {string []}
 */
exports.getDatesAfter = (startDate, numberOfDates, include = true) => {
  const dateFormatted = parser.parseToDate(startDate);
  const maxDays = numberOfDates;
  const datesArray = [];
  let startValue = 1;
  if (include) {
    startValue = 0;
  }
  for (let i = maxDays; i >= startValue; i -= 1) {
    const newDate = new Date(dateFormatted.getTime());
    newDate.setDate(newDate.getDate() + i);
    datesArray.push(exports.doFormat(newDate, 'yyyy-mm-dd'));
  }
  return datesArray;
};

/**
 * @param {Date | String } start
 * @param {Date | String } end
 * @returns {string []}
 */
exports.getDatesBetween = (start, end) => {
  if (!(start instanceof Date)) {
    start = parser.parseToDate(start);
  }
  if (!(end instanceof Date)) {
    end = parser.parseToDate(end);
  }
  const arr = [];
  const dt = start;
  let theDate = null;
  while (dt <= end) {
    theDate = exports.doFormat(dt, 'yyyy-mm-dd');
    arr.push(theDate);
    dt.setDate(dt.getDate() + 1);
  }
  return arr;
};

/**
 * @param {string} timeString string representation of time in 24 format e.g: 13:30
 * @param {number} minutesToAdd
 * @returns {string}
 */
exports.addMinutes = (timeString, minutesToAdd) => {
  if (!timeString.match(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)) {
    throw TypeError('timeString has to be in this format Hours:MinUtes');
  }
  const timeSplit = timeString.split(':');
  let hours = parseFloat(timeSplit[0]);
  let minutes = parseFloat(timeSplit[1]) + minutesToAdd;
  hours += Math.floor(minutes / 60);
  while (hours >= 24) {
    hours -= 24;
  }
  minutes %= 60;
  return `${`0${hours}`.slice(-2)}:${`0${minutes}`.slice(-2)}`;
};

/**
 * @about return day index [Mon,Tue,...,Sun] -> [0,1,...,6]
 * @param {string | Date } theDate
 * @return {number}
 */
exports.getDayIndex = (theDate) => {
  if (!(theDate instanceof Date)) {
    theDate = parser.parseToDate(theDate);
  }
  const dayIndex = theDate.getDay();
  if (dayIndex === 0) {
    return 6;
  }
  return dayIndex - 1;
};

/**
 * @about return timestamp 'the stored time value in milliseconds since midnight, January 1, 1970 UTC' for given date object or string
 * @param {string | Date } date
 * @return {number}
 */
exports.timeStampOf = (date) => {
  const dateObject = parser.parseToDate(date);
  return dateObject.valueOf()
};

/**
 * @about return date as a string value in ISO format for given date object or string
 * @param {string | Date } date
 * @return {string}
 */
exports.ISOStringOf = (date) => {
  return parser.parseToDate(date).toISOString();
};

/**
 * @about return whether the given date is weekend or not (saturday and sunday)
 * @param {string | Date } date
 * @return {boolean}
 */
exports.isWeekEnd = (date) => {
  const dayIndex = exports.getDayIndex(date);
  return dayIndex === 5 || dayIndex === 6;
};

/**
 * @about return the time now in the given format
 * @param {string } format
 * @return {string}
 */
exports.atThisMoment = (format = 'yyyy-mm-dd HH:MM:ss') => {
  const today = new Date();
  return formatter.dateFormat(today, format);
};

/**
 * @about return the day before yesterday in the given format
 * @param {string } format
 * @return {string}
 */
exports.beforeYesterday = (format = 'yyyy-mm-dd') => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 2);
  return formatter.dateFormat(yesterday, format);
};

/**
 * @about return yesterday in the given format
 * @param {string } format
 * @return {string}
 */
exports.yesterday = (format = 'yyyy-mm-dd') => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return formatter.dateFormat(yesterday, format);
};

/**
 * @about return tomorrow in the given format
 * @param {string } format
 * @return {string}
 */
exports.tomorrow = (format = 'yyyy-mm-dd') => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() + 1);
  return formatter.dateFormat(yesterday, format);
};

/**
 * @about return after tomorrow in the given format
 * @param {string } format
 * @return {string}
 */
exports.afterTomorrow = (format = 'yyyy-mm-dd') => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() + 2);
  return formatter.dateFormat(yesterday, format);
};

/**
 * @about return Monday of this week in the given format
 * @param {string } format
 * @return {string}
 */
exports.mondayThisWeek = (format = 'yyyy-mm-dd') => {
  const targetIndex = 0;
  const dateObject = new Date();
  const currentIndex = exports.getDayIndex(dateObject);
  const mondayDate = dateObject.setDate((dateObject.getDate() - (currentIndex - targetIndex)));
  return formatter.dateFormat(new Date(mondayDate), format);
};

/**
 * @about return Tuesday of this week in the given format
 * @param {string } format
 * @return {string}
 */
exports.tuesdayThisWeek = (format = 'yyyy-mm-dd') => {
  const targetIndex = 1;
  const dateObject = new Date();
  const currentIndex = exports.getDayIndex(dateObject);
  const mondayDate = dateObject.setDate(dateObject.getDate() - (currentIndex - targetIndex));
  return formatter.dateFormat(new Date(mondayDate), format);
};
/**
 * @about return Wednesday of this week in the given format
 * @param {string } format
 * @return {string}
 */
exports.wednesdayThisWeek = (format = 'yyyy-mm-dd') => {
  const targetIndex = 2;
  const dateObject = new Date();
  const currentIndex = exports.getDayIndex(dateObject);
  const mondayDate = dateObject.setDate(dateObject.getDate() - (currentIndex - targetIndex));
  return formatter.dateFormat(new Date(mondayDate), format);
};
/**
 * @about return Thursday of this week in the given format
 * @param {string } format
 * @return {string}
 */
exports.thursdayThisWeek = (format = 'yyyy-mm-dd') => {
  const targetIndex = 3;
  const dateObject = new Date();
  const currentIndex = exports.getDayIndex(dateObject);
  const mondayDate = dateObject.setDate(dateObject.getDate() - (currentIndex - targetIndex));
  return formatter.dateFormat(new Date(mondayDate), format);
};

/**
 * @about return Friday of this week in the given format
 * @param {string } format
 * @return {string}
 */
exports.fridayThisWeek = (format = 'yyyy-mm-dd') => {
  const targetIndex = 4;
  const dateObject = new Date();
  const currentIndex = exports.getDayIndex(dateObject);
  const mondayDate = dateObject.setDate(dateObject.getDate() - (currentIndex - targetIndex));
  return formatter.dateFormat(new Date(mondayDate), format);
};

/**
 * @about return Saturday of this week in the given format
 * @param {string } format
 * @return {string}
 */
exports.saturdayThisWeek = (format = 'yyyy-mm-dd') => {
  const targetIndex = 5;
  const dateObject = new Date();
  const currentIndex = exports.getDayIndex(dateObject);
  const mondayDate = dateObject.setDate(dateObject.getDate() - (currentIndex - targetIndex));
  return formatter.dateFormat(new Date(mondayDate), format);
};

/**
 * @about return Sunday of this week in the given format
 * @param {string } format
 * @return {string}
 */
exports.sundayThisWeek = (format = 'yyyy-mm-dd') => {
  const targetIndex = 6;
  const dateObject = new Date();
  const currentIndex = exports.getDayIndex(dateObject);
  const mondayDate = dateObject.setDate(dateObject.getDate() - (currentIndex - targetIndex));
  return formatter.dateFormat(new Date(mondayDate), format);
};

/**
 * @about return the given date or string representative of it in the given format
 * @param {string|Date } date
 * @param {string } format
 * @return {string}
 */
exports.doFormat = (date, format) => {
  if (!(date instanceof Date)) {
    date = parser.parseToDate(date);
  }
  return formatter.dateFormat(date, format);
};

/**
 * @about return date object of the given date string
 * @param {string } dateStr
 * @return {Date}
 */
exports.dateOf = (dateStr) => {
  return parser.parseToDate(dateStr);
};

/**
* @about return date object of the given date string, this date object will have the following properties:
 .plusYears(x)
 .plusMonths(x)
 .plusDays(x)
 .plusHours(x)
 .plusMinutes(x)
 .plusSeconds(x)
 .minusYears(x)
 .minusMonths(x)
 .minusDays(x)
 .minusHours(x)
 .minusMinutes(x)
 .minusSeconds(x)
 * @param {string|Date } date
 * @return {{dateObject?: function(*): *}}
 */
exports.dateObjectOf = (date) => {
  return dateObject.dateObject(date);
};

/**
 * @about return the age now for the given birthdate
 * @param {string | Date } birthDate
 * @returns {{months: number, days: number, years: number}}
 */
exports.calculateAge = (birthDate) => {
  if (!(birthDate instanceof Date)) {
    birthDate = parser.parseToDate(birthDate);
  }
  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth()+1;
  const birthDay = birthDate.getDate();
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();
  let ageYears = currentYear - birthYear;
  if (currentMonth < birthMonth) {
    ageYears--;
  }
  if ((birthMonth === currentMonth) && (currentDay < birthDay)) {
    ageYears--;
  }
  let ageMonths = 0;

  if (currentMonth > birthMonth && birthDay > currentDay)
    ageMonths = currentMonth - birthMonth - 1;
  else if (currentMonth > birthMonth)
    ageMonths = currentMonth - birthMonth
  if (currentMonth < birthMonth && birthDay < currentDay)
    ageMonths = 12 - (birthMonth - currentMonth);
  else if (currentMonth < birthMonth)
    ageMonths = 12 - (birthMonth - currentMonth + 1);
  if (currentMonth === birthMonth && birthDay > currentDay)
    ageMonths = 11;
  let ageDays = 0;
  if (currentDay > birthDay)
    ageDays = currentDay - birthDay;
  if (currentDay < birthDay) {
    const auxDate = new Date(currentYear, currentMonth - 1, 0);
    ageDays = auxDate.getDate() - (birthDay - currentDay);
  }
  return {years: ageYears, months: ageMonths, days: ageDays}
}

/**
 * @about return the time between two given times
 * @param {string | Date } startTime
 * @param {string | Date } endTime
 * @returns {{days: number, hours: number, minutes: number, seconds: number}}
 */
exports.timeBetween = (startTime, endTime) => {
  if (!(startTime instanceof Date)) {
    startTime = parser.parseToDate(startTime);
  }
  if (!(endTime instanceof Date)) {
    endTime = parser.parseToDate(endTime);
  }
  const startTimestamp = startTime.valueOf();
  const endTimestamp = endTime.valueOf();
  const diff = (endTimestamp - startTimestamp)/1000;
  const totalHours = Math.floor(diff/3600);
  const days = Math.floor(totalHours/24);
  const hours = totalHours - days*24
  const minutes = Math.floor((diff/60) - totalHours*60);
  const seconds = Math.floor(diff - totalHours*3600 - minutes*60);
  return {
    days,
    hours,
    minutes,
    seconds : Math.max(seconds, 0),
  }
}

/**
 * @about return the time since the given time
 * @param {string | Date } refTime
 * @returns {{days: number, hours: number, minutes: number, seconds: number}}
 */
exports.timeSince = (refTime) => {
  const now = new Date();
  return exports.timeBetween(refTime, now);
}

/**
 * @about return the time until the given time
 * @param {string | Date } refTime
 * @returns {{days: number, hours: number, minutes: number, seconds: number}}
 */
exports.timeUntil = (refTime) => {
  const now = new Date();
  return exports.timeBetween(now, refTime);
}
