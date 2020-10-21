const getParsedDate = (date) => {
  const dateParts = String(date).split(' ');
  let datePart = String();
  if(dateParts[0].indexOf('/') > -1) {
    datePart = String(dateParts[0]).split('/');
  }else if(dateParts[0].indexOf('-') > -1){
    datePart = String(dateParts[0]).split('-');
  }else{
    throw TypeError('invalid date string');
  }
  const year = parseInt(datePart[0], 10);
  let month = parseInt(datePart[1], 10);
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
  const validYear = Math.max(year, day);
  let validDay = Math.min(year, day);
  month = `0${month}`.slice(-2);
  validDay = `0${validDay}`.slice(-2);
  hour = `0${hour}`.slice(-2);
  minute = `0${minute}`.slice(-2);
  second = `0${second}`.slice(-2);
  const dd =  new Date(`${validYear}-${month}-${validDay}T${hour}:${minute}:${second}.3000Z`);
  console.warn(dd);
  return dd;
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
  } else if(dateString.constructor === String) {
    if(dateString.indexOf('+') > -1) {
      dateString = dateString.split('+')[0];
      dateObject = getParsedDate(dateString);
    }else if(dateString.indexOf('T') > -1) {
      if (dateString.indexOf('Z') > -1 ) {
        dateObject = new Date(dateString);
      } else {
        const cleanDateParts = dateString.split('T');
        const cleanDate = `${cleanDateParts[0]} ${cleanDateParts[1]}`;
        dateObject = getParsedDate(cleanDate);
      }
    } else {
      console.warn('they pass here');
      dateObject = getParsedDate(dateString);
    }
  } else {
    throw TypeError('Invalid date');
  }
  if (dateObject === 'Invalid Date') {
    throw TypeError('Invalid date');
  }
  console.warn(`and before ${dateObject}`);
  return dateObject;
};
