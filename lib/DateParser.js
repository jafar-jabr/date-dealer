const getParsedDate = date => {
  const dateParts = String(date).split(' ');
  const datePart = String(dateParts[0]).split('-');
  const timePart = String(dateParts[1]).split(':');
  const dateArray = [
    parseInt(datePart[0], 10),
    parseInt(datePart[1], 10) - 1,
    parseInt(datePart[2], 10),
    parseInt(timePart[0], 10),
    parseInt(timePart[1], 10),
    parseInt(timePart[2], 10),
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
  if(dateString.indexOf('+') > -1) {
    dateString = dateString.split('+')[0];
  }
  if (dateString instanceof Date) {
    dateObject =  dateString;
  }else if(dateString.indexOf('T') > -1) {
    dateObject = new Date(dateString);
  } else {
    dateObject = getParsedDate(dateString);
  }
  if (dateObject === 'Invalid Date') {
    throw TypeError('Invalid date');
  }
  return dateObject;
};
