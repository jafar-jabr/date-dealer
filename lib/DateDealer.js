/* eslint-disable no-param-reassign */
const formatter = require('./formatter');
const parser = require('./DateParser');
const dateObject = require('./dateObject');

/**
 * @param {string} startDate
 * @param {number} numberOfDates
 * @param {boolean} include to include the start date or not
 * @returns {[]}
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
    const dd = `0${newDate.getDate()}`.slice(-2);
    const mm = `0${newDate.getMonth() + 1}`.slice(-2);
    const y = newDate.getFullYear();
    const someFormattedDate = `${y}-${mm}-${dd}`;
    datesArray.push(someFormattedDate);
  }
  return datesArray;
};

/**
 * @param {string} startDate
 * @param {number} numberOfDates
 * @param {boolean} include to include the start date or not
 * @returns {[]}
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
    const dd = `0${newDate.getDate()}`.slice(-2);
    const mm = `0${newDate.getMonth() + 1}`.slice(-2);
    const y = newDate.getFullYear();
    const someFormattedDate = `${y}-${mm}-${dd}`;
    datesArray.push(someFormattedDate);
  }
  return datesArray;
};

/**
 * @param {string} startDate
 * @param {number} numberOfDates
 * @param {boolean} include to include the start date or not
 * @returns {[]}
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
    const dd = `0${newDate.getDate()}`.slice(-2);
    const mm = `0${newDate.getMonth() + 1}`.slice(-2);
    const y = newDate.getFullYear();
    const someFormattedDate = `${y}-${mm}-${dd}`;
    datesArray.push(someFormattedDate);
  }
  return datesArray;
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
  let minutes = parseFloat(timeSplit[1]) + parseFloat(minutesToAdd);
  hours += Math.floor(minutes / 60);
  while (hours >= 24) {
    hours -= 24;
  }
  minutes %= 60;
  return `${`0${hours}`.slice(-2)}:${`0${minutes}`.slice(-2)}`;
};

/**
 * @param {Date | String } start
 * @param {Date | String } end
 * @returns {[]}
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
    theDate = exports.formatTheTime(parser.parseToDate(dt), 'date', '-');
    arr.push(theDate);
    dt.setDate(dt.getDate() + 1);
  }
  return arr;
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

exports.formatTheTime = (UnixTimestamp, type, separator = '/') => {
  const now = parser.parseToDate(UnixTimestamp);
  switch (type) {
    case 'time':
      return `${now.getHours() < 10 ? `0${now.getHours()}` : now.getHours()}:${
        now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()
      }`;
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
        now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds()
      }`;
  }
};

exports.timeStampOf = (date, unit='seconds') => {
  const dateObject = parser.parseToDate(date);
  return unit==='seconds' ? Math.floor(dateObject.valueOf()/1000) : dateObject.valueOf()
};

exports.isWeekEnd = (theDate) => {
  const dayIndex = exports.getDayIndex(theDate);
  return dayIndex === 5 || dayIndex === 6;
};

exports.atThisMoment = (format = 'yyyy-mm-dd HH:MM:ss', timeZone='Asia/Baghdad') => {
  const today = new Date();
  return formatter.dateFormat(today, format);
};

exports.yesterday = (format = 'yyyy-mm-dd') => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return formatter.dateFormat(yesterday, format);
};

exports.mondayThisWeek = (format = 'yyyy-mm-dd') => {
  const targetIndex = 0;
  const dateObject = new Date();
  const currentIndex = exports.getDayIndex(dateObject);
  const mondayDate = dateObject.setDate((dateObject.getDate() - (currentIndex - targetIndex)));
  return formatter.dateFormat(new Date(mondayDate), format);
};
exports.tuesdayThisWeek = (format = 'yyyy-mm-dd') => {
  const targetIndex = 1;
  const dateObject = new Date();
  const currentIndex = exports.getDayIndex(dateObject);
  const mondayDate = dateObject.setDate(dateObject.getDate() - (currentIndex - targetIndex));
  return formatter.dateFormat(new Date(mondayDate), format);
};
exports.wednesdayThisWeek = (format = 'yyyy-mm-dd') => {
  const targetIndex = 2;
  const dateObject = new Date();
  const currentIndex = exports.getDayIndex(dateObject);
  const mondayDate = dateObject.setDate(dateObject.getDate() - (currentIndex - targetIndex));
  return formatter.dateFormat(new Date(mondayDate), format);
};
exports.thursdayThisWeek = (format = 'yyyy-mm-dd') => {
  const targetIndex = 3;
  const dateObject = new Date();
  const currentIndex = exports.getDayIndex(dateObject);
  const mondayDate = dateObject.setDate(dateObject.getDate() - (currentIndex - targetIndex));
  return formatter.dateFormat(new Date(mondayDate), format);
};
exports.fridayThisWeek = (format = 'yyyy-mm-dd') => {
  const targetIndex = 4;
  const dateObject = new Date();
  const currentIndex = exports.getDayIndex(dateObject);
  const mondayDate = dateObject.setDate(dateObject.getDate() - (currentIndex - targetIndex));
  return formatter.dateFormat(new Date(mondayDate), format);
};

exports.saturdayThisWeek = (format = 'yyyy-mm-dd') => {
  const targetIndex = 5;
  const dateObject = new Date();
  const currentIndex = exports.getDayIndex(dateObject);
  const mondayDate = dateObject.setDate(dateObject.getDate() - (currentIndex - targetIndex));
  return formatter.dateFormat(new Date(mondayDate), format);
};

exports.sundayThisWeek = (format = 'yyyy-mm-dd') => {
  const targetIndex = 6;
  const dateObject = new Date();
  const currentIndex = exports.getDayIndex(dateObject);
  const mondayDate = dateObject.setDate(dateObject.getDate() - (currentIndex - targetIndex));
  return formatter.dateFormat(new Date(mondayDate), format);
};

exports.doFormat = (date, format) => {
  if (!(date instanceof Date)) {
    date = parser.parseToDate(date);
  }
  if (date === 'Invalid Date') {
    throw TypeError('Invalid date');
  }
  return formatter.dateFormat(date, format);
};

exports.dateOf = (dateString) => {
     return parser.parseToDate(dateString);
};

exports.dateObjectOf = (dateString) => {
  return dateObject.dateObject(dateString);
};

