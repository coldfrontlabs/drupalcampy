var current = "Conference Is Now"; //-->enter what you want the script to display when the target date and time are reached, limit to 20 characters
var year = 2015; //-->Enter the count down target date YEAR
var month = 6; //-->Enter the count down target date MONTH
var day = 24; //-->Enter the count down target date DAY
var hour = 8; //-->Enter the count down target date HOUR (24 hour clock)
var minute = 0; //-->Enter the count down target date MINUTE
var tz = -5; //-->Offset for your timezone in hours from UTC

var montharray = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

function countdown(yr, m, d, hr, min) {
  theyear = yr;
  themonth = m;
  theday = d;
  thehour = hr;
  theminute = min;
  var today = new Date();
  var todayy = today.getYear();
  if (todayy < 1000) {
    todayy += 1900;
  }
  var todaym = today.getMonth();
  var todayd = today.getDate();
  var todayh = today.getHours();
  var todaymin = today.getMinutes();
  var todaysec = today.getSeconds();
  var todaystring1 = montharray[todaym] + " " + todayd + ", " + todayy + " " + todayh + ":" + todaymin + ":" + todaysec;
  var todaystring = Date.parse(todaystring1) + (tz * 1000 * 60 * 60);
  var futurestring1 = (montharray[m - 1] + " " + d + ", " + yr + " " + hr + ":" + min);
  var futurestring = Date.parse(futurestring1) - (today.getTimezoneOffset() * (1000 * 60));
  var dd = futurestring - todaystring;
  var dday = Math.floor(dd / (60 * 60 * 1000 * 24) * 1);
  var dhour = Math.floor((dd % (60 * 60 * 1000 * 24)) / (60 * 60 * 1000) * 1);
  var dmin = Math.floor(((dd % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) / (60 * 1000) * 1);
  var dsec = Math.floor((((dd % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000 * 1);
  if (dday <= 0 && dhour <= 0 && dmin <= 0 && dsec <= 0) {
    document.getElementById('count2').innerHTML = current;
    document.getElementById('count2').style.display = "block";
    document.getElementById('count2').style.width = "390px";
    document.getElementById('day').style.display = "none";
    document.getElementById('hour').style.display = "none";
    document.getElementById('min').style.display = "none";
    document.getElementById('sec').style.display = "none";
    document.getElementById('days').style.display = "none";
    document.getElementById('hours').style.display = "none";
    return;
  } else {
    document.getElementById('count2').style.display = "none";
    document.getElementById('day').innerHTML = dday;
    document.getElementById('hour').innerHTML = dhour;
    document.getElementById('min').innerHTML = dmin;
    document.getElementById('sec').innerHTML = dsec;
    setTimeout(function () {
      "use strict";
      countdown(theyear,themonth,theday,thehour,theminute);
     }, 1000);

  }
}