function getDateType(date) {
  let parts = date.split('-');
  return new Date(parseInt(parts[0]), parseInt(parts[1] - 1), parseInt(parts[2]));
}

function getMovingHolidaysForYear(queryYear) {
  let easterDateForYear = {
    1980: () => { return new Date(queryYear, 3, 6) },
    1981: () => { return new Date(queryYear, 3, 19) },
    1982: () => { return new Date(queryYear, 3, 11) },
    1983: () => { return new Date(queryYear, 3, 3) },
    1984: () => { return new Date(queryYear, 3, 22) },
    1985: () => { return new Date(queryYear, 3, 7) },
    1986: () => { return new Date(queryYear, 2, 30) },
    1987: () => { return new Date(queryYear, 3, 19) },
    1988: () => { return new Date(queryYear, 3, 3) },
    1989: () => { return new Date(queryYear, 2, 26) },
    1990: () => { return new Date(queryYear, 3, 15) },
    1991: () => { return new Date(queryYear, 2, 31) },
    1992: () => { return new Date(queryYear, 3, 19) },
    1993: () => { return new Date(queryYear, 3, 11) },
    1994: () => { return new Date(queryYear, 3, 3) },
    1995: () => { return new Date(queryYear, 3, 16) },
    1996: () => { return new Date(queryYear, 3, 7) },
    1997: () => { return new Date(queryYear, 2, 30) },
    1998: () => { return new Date(queryYear, 3, 12) },
    1999: () => { return new Date(queryYear, 3, 4) },
    2000: () => { return new Date(queryYear, 3, 23) },
    2001: () => { return new Date(queryYear, 3, 15) },
    2002: () => { return new Date(queryYear, 2, 31) },
    2003: () => { return new Date(queryYear, 3, 20) },
    2004: () => { return new Date(queryYear, 3, 11) },
    2005: () => { return new Date(queryYear, 2, 27) },
    2006: () => { return new Date(queryYear, 3, 16) },
    2007: () => { return new Date(queryYear, 3, 8) },
    2008: () => { return new Date(queryYear, 2, 23) },
    2009: () => { return new Date(queryYear, 3, 12) },
    2010: () => { return new Date(queryYear, 3, 4) },
    2011: () => { return new Date(queryYear, 3, 24) },
    2012: () => { return new Date(queryYear, 3, 8) },
    2013: () => { return new Date(queryYear, 2, 31) },
    2014: () => { return new Date(queryYear, 3, 20) },
    2015: () => { return new Date(queryYear, 3, 5) },
    2016: () => { return new Date(queryYear, 2, 27) },
    2017: () => { return new Date(queryYear, 3, 16) },
    2018: () => { return new Date(queryYear, 3, 1) },
    2019: () => { return new Date(queryYear, 3, 21) },
    2020: () => { return new Date(queryYear, 3, 12) },
    2021: () => { return new Date(queryYear, 3, 4) },
    2022: () => { return new Date(queryYear, 3, 17) },
    2023: () => { return new Date(queryYear, 3, 9) },
    2024: () => { return new Date(queryYear, 2, 31) },
    2025: () => { return new Date(queryYear, 3, 20) },
    2026: () => { return new Date(queryYear, 3, 5) },
  };

  let easterDate = easterDateForYear[queryYear]();
  let easterMonday = new Date(easterDate.getFullYear(), easterDate.getMonth(), easterDate.getDate());
  let pentecost = new Date(easterDate.getFullYear(), easterDate.getMonth(), easterDate.getDate());
  let corpusChristi = new Date(easterDate.getFullYear(), easterDate.getMonth(), easterDate.getDate());
  easterMonday.setDate(easterDate.getDate() + 1);
  pentecost.setDate(easterDate.getDate() + 49);
  corpusChristi.setDate(easterDate.getDate() + 60);

  try {
    return [
      [easterDate.getDate(), easterDate.getMonth()].join(", "),
      [easterMonday.getDate(), easterMonday.getMonth()].join(", "),
      [pentecost.getDate(), pentecost.getMonth()].join(", "),
      [corpusChristi.getDate(), corpusChristi.getMonth()].join(", "), 
    ];
  } catch (TypeError) { return []; }
}

function isHoliday(strdate) {
  let d = strdate;

  const holidays = [
    "1, 0",    // Nowy Rok
    "6, 0",    // Swieto Trzech Kroli
    "1, 4",    // Swieto Pracy
    "3, 4",    // Swieto Trzeciego Maja
    "15, 7",   // Wniebowziecie Najswietszej Maryi Panny
    "1, 10",   // Swieto Zmarlych
    "11, 10",  // Swieto Niepodleglosci
    "25, 11",  // Pierwszy Dzien Swiat
    "26, 11"   // Drugi Dzien Swiat
  ].concat(this.getMovingHolidaysForYear(d.getFullYear()));

  if (d.getDay() == 6 || d.getDay() == 0) {
    return true;
  } else if (holidays.includes([d.getDate(), d.getMonth()].join(', '))) {
    return true;
  } else {
    return false;
  }
}

function nextDay(date) {
  date.setDate(date.getDate() + 1);
  return date;
}

function previousDay(date) {
  date.setDate(date.getDate() - 1);
  return date;
}