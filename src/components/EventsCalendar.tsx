import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

import events from "./events";

export default class EventsCalendar extends React.Component {
    contructor(props: any){
    }

    render() {
        return (
            <div className="events-calendar">
              <FullCalendar
                themeSystem="Simplex"
                plugins={[dayGridPlugin]}
                events={events}
              />
            </div>
          );
    }
}