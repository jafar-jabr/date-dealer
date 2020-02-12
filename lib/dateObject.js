const parser = require('./DateParser');
const formatter = require('./formatter');

exports.dateObject = (dateString => {
  const dateObject = this;
  if (dateString instanceof Date) {
    dateObject.date = dateString;
  } else {
    dateObject.date = parser.parseToDate(dateString);
  }
  dateObject.plusYears = years => {
    dateObject.date.setFullYear(dateObject.date.getFullYear() + years);
    return dateObject;
  };
  dateObject.plusMonths = months => {
    dateObject.date.setMonth(dateObject.date.getMonth() + months);
    return dateObject;
  };
  dateObject.plusDays = days => {
    dateObject.date.setDate(dateObject.date.getDate() + days);
    return dateObject;
  };
  dateObject.plusHours = hours => {
    dateObject.date.setHours(dateObject.date.getHours() + hours);
    return dateObject;
  };
  dateObject.plusMinutes = minutes => {
    dateObject.date.setMinutes(dateObject.date.getMinutes() + minutes);
    return dateObject;
  };
  dateObject.plusSeconds = seconds => {
    dateObject.date.setSeconds(dateObject.date.getSeconds() + seconds);
    return dateObject;
  };
  dateObject.minusYears = years => {
    dateObject.date.setFullYear(dateObject.date.getFullYear() - years);
    return dateObject;
  };
  dateObject.minusMonths = months => {
    dateObject.date.setMonth(dateObject.date.getMonth() - months);
    return dateObject;
  };
  dateObject.minusDays = days => {
    dateObject.date.setDate(dateObject.date.getDate() - days);
    return dateObject;
  };
  dateObject.minusHours = hours => {
    dateObject.date.setHours(dateObject.date.getHours() - hours);
    return dateObject;
  };
  dateObject.minusMinutes = minutes => {
    dateObject.date.setMinutes(dateObject.date.getMinutes() - minutes);
    return dateObject;
  };
  dateObject.minusSeconds = seconds => {
    dateObject.date.setSeconds(dateObject.date.getSeconds() - seconds);
    return dateObject;
  };
  /**
   *
   * @param format
   * @returns {*}
   */
  dateObject.get = (format = 'yyyy-mm-dd HH:MM:ss') => {
    return formatter.dateFormat(dateObject.date, format);
  };
  return dateObject;
});
