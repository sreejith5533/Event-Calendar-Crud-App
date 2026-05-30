import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function EventCalendar({events}) {
  const calendarEvents = events.map((event)=>({
    id : event.id.toString(),
    title : event.title,
    description : event.description,
    date : event.date
  }));
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={calendarEvents}
    />
  );
}


export default EventCalendar;