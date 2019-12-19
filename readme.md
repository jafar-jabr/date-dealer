Date Dealer
=======
(all what you need about date and time) we still have long road to achieve this but we work on it. 
any contribution or suggestion will be highly appreciated.

Installation
------------

    npm i date-dealer

Usage
-----

~~~ javascript
const dateDealer = require("date-dealer")

// parse to date
const  dateObject = dateDealer.dateOf('2019-03-24');
console.log(dateObject);

// format date string or object
const  formattedDate = dateDealer.doFormat('2019-03-24 12:30:40', 'dd-mm-yy h:MM:ss');
console.log(formattedDate);
/*
available formats:
['ddd mmm dd yyyy HH:MM:ss',
  'm/d/yy',
  'mmm d, yyyy',
  'mmmm d, yyyy',
  'dddd, mmmm d, yyyy',
  "yyyy-mm-dd'T'HH:MM:sso",
  "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
  'ddd, dd mmm yyyy HH:MM:ss Z',
  'h:MM TT',
  'h:MM:ss TT',
  'h:MM:ss TT Z',
  'yyyy-mm-dd',
  'HH:MM:ss']
*/

// get dates array started from specific date
var dates = dateDealer.getDatesArray('2019-10-10', 12, false));
console.log(dates);
// similar getDatesAfter and getDatesBefore, dateDealer.getDatesBetween('2019-01-10', '2019-01-21')

var time = dateDealer.addMinutes('13:50', 20);
console.log(time);

// return day index [Mon,Tue,...,Sun] -> [0,1,...,6]
var dayIndex = dateDealer.getDayIndex('2019-01-10');
console.log(dayIndex);

var timeStamp = dateDealer.timeStampOf('2019-01-10 12:30:40');
console.log(timeStamp);

// check if the given date is weekend (Saturday or Sunday)
var isWeekend = dateDealer.isWeekEnd('2019-12-21');
console.log(isWeekend);

var thisMoment = dateDealer.atThisMoment('HH:MM:ss');
console.log(thisMoment);
//similar dateDealer.yesterday('yyyy-mm-dd'),
 dateDealer.mondayThisWeek(), 
 dateDealer.tuesdayThisWeek(), 
 dateDealer.wednesdayThisWeek(), 
 dateDealer.thursdayThisWeek(), 
 dateDealer.fridayThisWeek(), 
 dateDealer.saturdayThisWeek(), 
 dateDealer.sundayThisWeek(), 
~~~


License
-------

(MIT License)

Copyright © 2019-2020 Jafar Jabr & Alexandru Simache

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the “Software”), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

