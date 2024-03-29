<h1 align="center">
  <a href="https://github.com/jafar-jabr/date-dealer/">
    Date Dealer
  </a>
</h1>

<p align="center">
  <a href="https://github.com/jafar-jabr/date-dealer/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="DateDealer is released under the MIT license." />
  </a>
  <a href="https://github.com/jafar-jabr/date-dealer">
    <img src="https://badge.fury.io/js/date-dealer.svg" alt="Current npm package version." />
  </a>
</p>

(All what you need about date and time) we still have long road to achieve this, but we work on it. 
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
[
  'ddd mmm dd yyyy HH:MM:ss',
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
  'HH:MM:ss',
  'yyyy-mm-dd HH:MM:ss',
  'yyyy-mm-dd'
 ]
*/

// get dates array started from specific date
const dates = dateDealer.getDatesArray('2019-10-10', 12, false));
console.log(dates);
// similar getDatesAfter and getDatesBefore, dateDealer.getDatesBetween('2019-01-10', '2019-01-21')

const time = dateDealer.addMinutes('13:50', 20);
console.log(time); // 14:10

// return day index [Mon,Tue,...,Sun] -> [0,1,...,6]
const dayIndex = dateDealer.getDayIndex('2019-01-10');
console.log(dayIndex);

const isoString = ISOStringOf('2019-01-10 12:30:40'); // the date as object or string
console.log(isoString); // iso string of the date

const timeStamp = dateDealer.timeStampOf('2019-01-10 12:30:40');
console.log(timeStamp); // timestamp in milliseconds


// check if the given date is weekend (Saturday or Sunday)
const isWeekend = dateDealer.isWeekEnd('2019-12-21');
console.log(isWeekend); // true

const thisMoment = dateDealer.atThisMoment('HH:MM:ss');

console.log(thisMoment);
//similar 
 dateDealer.beforeYesterday('yyyy-mm-dd'),
 dateDealer.yesterday('yyyy-mm-dd'),
 dateDealer.tomorrow('yyyy-mm-dd'),
 dateDealer.afterTomorrow('yyyy-mm-dd'),
 dateDealer.mondayThisWeek(), 
 dateDealer.tuesdayThisWeek(), 
 dateDealer.wednesdayThisWeek(), 
 dateDealer.thursdayThisWeek(), 
 dateDealer.fridayThisWeek(), 
 dateDealer.saturdayThisWeek(), 
 dateDealer.sundayThisWeek(), 
~~~
~~~ javascript
 const dateObject = dateDealer.dateObjectOf(dateDealer.atThisMoment());
//accept the date either as string or an object and return date Object which has the following properties
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
// at the end to get usable date in any format
   .get('yyyy-mm-dd HH:MM:ss') // the default formt is 'yyyy-mm-dd HH:MM:ss'
~~~
Calculate age:
~~~ javascript
const age = dateDealer.calculateAge('1984-06-19');
//{ years: 36, months: 6, days: 18 }

~~~

Time between:
~~~ javascript
const timeBetween = dateDealer.timeBetween('2021-04-23 21:37:30', '2021-05-20 22:40:20');
//{ days: 27, hours: 1, minutes: 2, seconds: 50 }

//similar 
dateDealer.timeSince('2021-04-23 21:37:30')
dateDealer.timeUntil('2022-04-23 21:37:30')
~~~
License
-------

(MIT License)

Copyright © 2019-2022 Jafar Jabr

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

