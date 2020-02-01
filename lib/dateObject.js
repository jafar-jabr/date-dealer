const parser = require('./DateParser');
exports.dateObject = (dateString => {
  const dateObject = this;
  dateObject.date = parser.parseToDate(dateString);
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
  dateObject.get = () => {
    return dateObject.date;
  };
  return dateObject;
});
