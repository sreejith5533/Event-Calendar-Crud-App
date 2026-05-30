import API from "../api/axios";
import {useState} from "react";


function EventCard({event,setUpdateEvent,setDeleteEvent}) {
  
  const handleEdit = (event) => {
    setUpdateEvent(event);

  };


  const eventDate = new Date(event.date);
  const day = eventDate.getDate();

  const month = eventDate.toLocaleString("en-US",{
    month:"short"
  });


  const handleDelete = (event)=>{
    setDeleteEvent(event);
  }



  return (
    <div className="event-card">
      <div className="date-content-div">
        <div className="date-div">
          <p className="month">{month}</p>
          <h3 className="date">{day}</h3>
        </div>
        <div className="content-div">
          <h5 className="event-title">{event.title}</h5>
          <small>
            {event.description}
          </small>
          <p className="event-date">{event.date}</p>
        </div>
      </div>
      <div className="edit-delete-div">
        <button className="edit-btn" onClick={()=>handleEdit(event)}>
          <i class="fa-regular fa-pen-to-square"></i>
        </button>
        <button className="delete-btn" onClick={()=>handleDelete(event)}>
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
}

export default EventCard;
