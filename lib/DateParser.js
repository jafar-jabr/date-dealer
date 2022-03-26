const getParsedDate = (date) => {
  const dateParts = String(date).split(' ');
  const dateStr = String(dateParts[0]);
  const dateSeparator = dateStr.indexOf('-') > -1 ? '-' : '/';
  const datePart = String(dateStr).split(dateSeparator);
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
exports.parseToDate = (dateString) => {
  let dateObject = new Date();
  if(!dateString) {
    throw TypeError('null can not be parsed to date');
  }
  if (dateString instanceof Date) {
    dateObject = dateString;
  }else if (typeof(dateString) === "undefined") {
    throw TypeError('undefined can not be parsed to date');
  } else if(typeof dateString === 'string') {
    if(dateString.indexOf('AM') > -1 || dateString.indexOf('PM') > -1 || dateString.indexOf('am') > -1 || dateString.indexOf('pm') > -1) {
      dateObject = new Date(Date.parse(dateString));
    }else if(dateString.indexOf('+') > -1) {
      dateObject = new Date(dateString);
    }else if(dateString.indexOf('T') > -1) {
      if (dateString.indexOf('Z') > -1 ) {
        dateObject = new Date(dateString);
      } else {
        const cleanDateParts = dateString.split('T');
        const cleanDate = `${cleanDateParts[0]} ${cleanDateParts[1]}`;
        dateObject = getParsedDate(cleanDate);
      }
    } else {
      dateObject = getParsedDate(dateString);
    }
  } else {
    throw TypeError('Invalid date');
  }
  if (dateObject === 'Invalid Date') {
    throw TypeError('Invalid date');
  }
  return dateObject;
};
