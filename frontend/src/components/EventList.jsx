import EventCard from "./EventCard";

function EventList({events ,setUpdateEvent,setDeleteEvent}) {
  return (
    <div className="event-list-div mt-4">
      <div className="eventlist-heading">
        <h5>Upcoming Recent Events</h5>
        {events.length > 0 ?(
          <div className="row">
          {events.map((event)=>(
            <div className="col-12" key={event.id}>
              <EventCard event={event} setUpdateEvent={setUpdateEvent} setDeleteEvent={setDeleteEvent}/>
            </div>
          ))}
        </div>
        ):(
          <p>No events found..</p>
        )}
      </div>
    </div>
  );
}


export default EventList;