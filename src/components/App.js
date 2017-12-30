import React from 'react';
import CalcForm from './calc/CalcForm';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Logo from './logo/Logo';
import Paper from 'material-ui/Paper';

//import { Button } from 'reactstrap';

const style = {
  backgroundColor: "#FAFAFA",
  marginTop: 50,
  padding: 40,
  paddingTop: 35, // temporary adjustment to account for logo image top transparent bar
  textAlign: 'center',
  display: 'inline-block',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromDate: null,
      toDate: null,
      numberOfWorkdays: "",
      checked: {
        fromDate: false,
        toDate: false,
        numberOfWorkdays: false
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFromDateChange = this.handleFromDateChange.bind(this);
    this.handleToDateChange = this.handleToDateChange.bind(this);
    this.calculateToDate = this.calculateToDate.bind(this);
  }

  getMovingHolidaysForYear(queryYear) {
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

  isHoliday(strdate) {
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

    if (d.getDay() === 6 || d.getDay() === 0) {
      return true;
    } else if (holidays.includes([d.getDate(), d.getMonth()].join(', '))) {
      return true;
    } else {
      return false;
    }
  }

  nextDay(date) {
    date.setDate(date.getDate() + 1);
    return date;
  }

  previousDay(date) {
    date.setDate(date.getDate() - 1);
    return date;
  }

  calculateNumberOfWorkdays(dateLast = this.state.toDate) {
    let dateChecked = new Date(this.state.fromDate.getTime());
    let currentNumberOfWorkdays = 0;

    if (dateChecked < dateLast) {
      while (dateChecked.getTime() !== dateLast.getTime()) {
        if (!this.isHoliday(dateChecked)) {
          currentNumberOfWorkdays += 1;
        }
        dateChecked = this.nextDay(dateChecked);
      }
    }

    dateChecked.setDate(dateChecked.getDate() + 1);

    return currentNumberOfWorkdays;
  }

  calculateToDate() {
    let dateFirst = this.state.fromDate;
    let checkedDate = new Date(dateFirst.getTime());
    let expectedNumberOfWorkdays = this.state.numberOfWorkdays;
    let finalDate = checkedDate;
    let checkedNumberOfWorkdays = 0;
    
    while (checkedNumberOfWorkdays < expectedNumberOfWorkdays) {
      if (!this.isHoliday(checkedDate)) {
        checkedDate = this.nextDay(checkedDate);
        finalDate = checkedDate;
        checkedNumberOfWorkdays++;
      } else {
        checkedDate = this.nextDay(checkedDate);
      }
    }
    return finalDate;
  }

  calculateFromDate() {
    let dateLast = this.state.toDate;
    let checkedDate = new Date(dateLast.getTime());
    let expectedNumberOfWorkdays = this.state.numberOfWorkdays;
    let finalDate = checkedDate;
    let checkedNumberOfWorkdays = 0;

    while (checkedNumberOfWorkdays < expectedNumberOfWorkdays) {
      if (!this.isHoliday(checkedDate)) {
        checkedDate = this.previousDay(checkedDate);
        finalDate = checkedDate;
        checkedNumberOfWorkdays++;
      } else {
        checkedDate = this.previousDay(checkedDate);
      }
    }

    return finalDate;
  }

  isOnlyEmptyElementInObject(sts, s) {
    if (sts[s]) { return false; } // returns false if the field is not empty
    let only = true;
    
    for (let k in sts) {
      if (!(k === s) && !sts[k]) { only = false; }
    }
    
    return only;
  }

  countEmptyFields(sts) {
    let empty = 0;

    for (let f in sts) {
      if (!sts[f]) { empty++; }
    }

    return empty;
  }

  getEmptyFieldNames(sts) {
    let fields = [];
    
    for (let f in sts) {
      if (!sts[f]) { fields.push(f) }
    }

    return fields;
  }

  getCheckedFieldName(checked) {
    for (let f in checked) {
      if (checked[f]) {
        return f;
      }
    }
  }

  calculateFunctionMapper(fieldName) {
    let returnFunction = null;

    switch (fieldName) {
      case "fromDate":
         returnFunction = this.calculateFromDate;
        break;
      case "numberOfWorkdays":
        returnFunction =  this.calculateNumberOfWorkdays;
        break;
      case "toDate":
        returnFunction = this.calculateToDate;
        break;
      default:
        break;
    }
    
    return returnFunction;
  }

  handleToDateChange(e, newToDate) {
    let newDate = {
      id: "toDate",
      value: newToDate
    };

    this.handleChange(e, newDate);
  }

  handleFromDateChange(e, newFromDate) {
    let newDate = {
      id: "fromDate",
      value: newFromDate
    };

    this.handleChange(e, newDate);
  }

  handleChange(e, newDate) {
    let occurrenceId;
    let occurrenceValue;

    if (e == null) {
      occurrenceId = newDate.id;
      occurrenceValue = newDate.value;
    } else {
      occurrenceId = e.target.id;
      occurrenceValue = e.target.value;
    }

    switch (occurrenceId) {
      // ~~~ Radio selections ~~~
      case "fromDateCheckbox":
        this.setState({
          checked: { fromDate: true, toDate: false, numberOfWorkdays: false }
        });
        break;
      case "toDateCheckbox":
        this.setState({
            checked: { fromDate: false, toDate: true, numberOfWorkdays: false }
        });
        break;
      case "numberOfWorkdaysCheckbox":
        this.setState({
            checked: { fromDate: false, toDate: false, numberOfWorkdays: true }
        });
        ////console.log(this.state.checked);
        break;
      // ~~~ Date and Num of Workdays selections ~~~
      case "fromDate":
      case "toDate":
      case "numberOfWorkdays":
        console.log(occurrenceId, occurrenceValue);
        if (occurrenceId === "numberOfWorkdays" && occurrenceValue === "") {
          this.setState({numberOfWorkdays: ""});
          break;
        }
        let change = {};
        occurrenceId === "numberOfWorkdays" ? change[occurrenceId] = parseInt(occurrenceValue, 10) : change[occurrenceId] = occurrenceValue;

        this.setState(change, () => {
          let fieldStates = {
            fromDate: this.state["fromDate"],
            toDate: this.state["toDate"],
            numberOfWorkdays: this.state["numberOfWorkdays"] 
          };

          let calculateFunctions = {
            fromDate: this.calculateFromDate,
            toDate: this.calculateToDate,
            numberOfWorkdays: this.calculateNumberOfWorkdays
          };

          let numberOfEmptyFields = this.countEmptyFields(fieldStates);
          let emptyFields = this.getEmptyFieldNames(fieldStates);
          let calculateFunction = null;
          let stateUpdate = {};
          let checkedUpdate = {};
          
          if (numberOfEmptyFields === 1) {
            calculateFunction = calculateFunctions[emptyFields[0]].bind(this);
            stateUpdate[emptyFields[0]] = calculateFunction();
            checkedUpdate[emptyFields[0]] = true;
            stateUpdate["checked"] = checkedUpdate;
            this.setState(stateUpdate);
          } else if (numberOfEmptyFields === 0) {
            let checkedFieldName = this.getCheckedFieldName(this.state.checked);
            calculateFunction = calculateFunctions[checkedFieldName].bind(this);
            stateUpdate[checkedFieldName] = calculateFunction();
            this.setState(stateUpdate);
          } else {
            console.log("No empty fields");
          }
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <MuiThemeProvider>
      <div className="container">
        <div className="row">
          <div className="col" />
          <div className="col">
          <Paper style={style} zDepth={4}>
            <Logo />
            <CalcForm
              fromDate={this.state.fromDate}
              toDate={this.state.toDate}
              numberOfWorkdays={this.state.numberOfWorkdays}
              handleChange={this.handleChange}
              handleFromDateChange={this.handleFromDateChange}
              handleToDateChange={this.handleToDateChange}
              checked={this.state.checked}
            />
            </Paper>
          </div>
          <div className="col" />
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
