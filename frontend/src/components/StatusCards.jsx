function StatusCards({events}){



  const totalEvents = events.length;

  const today = new Date().getDate();
  const upcomingEvents = events.filter((event) => new Date(event.date).getDate() > today).length;

  const completedEvents = events.filter((event) => new Date(event.date).getDate() < today).length;





  return(
    <div className="row mt-4 g-4">
      <div className="col-md-4">
        <div className="total-events-div">
          <div className="total-icon">
            <i class="fa-regular fa-calendar"></i>
          </div>
          <div className="total-events event-text-div">
            <p>Total Events</p>
            <h3>{totalEvents}</h3>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="upcoming-events-div">
          <div className="upcoming-icon">
            <i class="fa-regular fa-clock"></i>
          </div>
          <div className="upcoming-events event-text-div">
            <p>Upcoming Events</p>
            <h3>{upcomingEvents}</h3>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="completed-events-div">
          <div className="completed-icon">
            <i class="fa-regular fa-circle-check"></i>
          </div>
          <div className="completed-events event-text-div">
            <p>Completed Events</p>
            <h3>{completedEvents}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}


export default StatusCards;