const getParsedDate = date => {
  const dateParts = String(date).split(' ');
  const datePart = String(dateParts[0]).split('-');
  const year = parseInt(datePart[0], 10);
  const month = parseInt(datePart[1], 10) - 1;
  const day = parseInt(datePart[2], 10);
  let hour = 10;
  let minute = 30;
  let second = 0;
  if(dateParts[1]) {
    const timePart = String(dateParts[1]).split(':');
    hour = parseInt(timePart[0], 10);
    minute = parseInt(timePart[1], 10);
    let seconds = '00';
    if (typeof timePart[2] !== "undefined") {
      seconds = timePart[2];
    }
    second = parseInt(seconds, 10);
  }
  const dateArray = [
    Math.max(year, day),
    month,
    Math.min(year, day),
    hour,
    minute,
    second
  ];
  return new Date(...dateArray);
};
/**
 *
 * @param dateString
 * @returns {Date}
 */
exports.parseToDate = dateString => {
  let dateObject = new Date();
  if (dateString instanceof Date) {
    dateObject =  dateString;
  }else if(dateString.constructor === String) {
    if(dateString.indexOf('+') > -1) {
      dateString = dateString.split('+')[0];
      dateObject = getParsedDate(dateString);
    }else if(dateString.indexOf('T') > -1) {
      dateObject = new Date(dateString);
    } else {
      dateObject = getParsedDate(dateString);
    }
  } else {
    console.log(dateString.constructor);
    throw TypeError('Invalid date');
  }
  if (dateObject === 'Invalid Date') {
    throw TypeError('Invalid date');
  }
  return dateObject;
};
