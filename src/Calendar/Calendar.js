// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import CalendarDay from '../Calendar Day/CalendarDay';
// import { months } from '../DATESTORE';
// // import ViewWorkoutByDate from '../View Workout By Date/ViewWorkoutByDate';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/sass/styles';
// import 'react-big-calendar/addons/dragAndDrop/styles';
// import './Calendar.css';
// // import STORE from '../../STORE';

import React, { Component } from "react";
import { render } from "react-dom";
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import events from '../events';
import * as dates from '../../src/utils/dates'
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale("en");

let allViews = Object.keys(Views).map(k => Views[k])

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  })

const localizer = momentLocalizer(moment);

class ReactCalendar extends Component {
  state = {
    view: "month",
    date: new Date(),
    width: 500
  };

  componentDidMount() {
    // window.addEventListener("resize", () => {
    //   this.setState({
    //     width: window.innerWidth,
    //     height: window.innerHeight
    //   });
    // });
  }

  render() {
    return (
      <div>
<Calendar
    events={events}
    views={allViews}
    step={60}
    showMultiDayTimes
    max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
    defaultDate={new Date(2015, 3, 1)}
    components={{
      timeSlotWrapper: ColoredDateCellWrapper,
    }}
    localizer={localizer}
  />
    </div>
    );
  }
}

export default ReactCalendar;

// import React from 'react'

// import events from '../events'
// import * as dates from '../../src/utils/dates'

// let allViews = Object.keys(Views).map(k => Views[k])

// const ColoredDateCellWrapper = ({ children }) =>
//   React.cloneElement(React.Children.only(children), {
//     style: {
//       backgroundColor: 'lightblue',
//     },
//   })

// let Basic = ({ localizer }) => (
//   <Calendar
//     events={events}
//     views={allViews}
//     step={60}
//     showMultiDayTimes
//     max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
//     defaultDate={new Date(2015, 3, 1)}
//     components={{
//       timeSlotWrapper: ColoredDateCellWrapper,
//     }}
//     localizer={localizer}
//   />
// )

// export default Basic
