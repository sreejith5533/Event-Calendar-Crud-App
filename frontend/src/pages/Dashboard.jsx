import { useState , useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";
import DashboardHeader from "../components/DashboardHeader";
import StatusCards from "../components/StatusCards";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";
import React from "react";
import API from "../api/axios";
function Dashboard() {
  const [events, setEvents] = useState([]);
  const [updateEvent,setUpdateEvent] = useState(null);
  const [deleteEvent,setDeleteEvent] = useState(null);

  useEffect(()=>{
    API.get('/events')
      .then((res)=>{
        setEvents(res.data);
      })
      .catch((err)=>{
        console.log(err)
      });
  },[]);

  useEffect(()=>{
    if(deleteEvent){
      API.delete(`/events/${deleteEvent.id}`)
        .then((res)=>{
          setEvents((prev)=>prev.filter((event)=>event.id !== deleteEvent.id));
          setDeleteEvent(null);
        })
        .catch((err)=>{
          console.log(err);
        });
    }
  },[deleteEvent]);


  return (
    <div>
      <Navbar />
      <div className="container">
        <DashboardHeader />
        <StatusCards events={events} />
        <div className="row mt-4  mb-4">
          <div className="col-md-8">
            <div className="row">
              <div className="col-12">
                <EventCalendar events={events} />
              </div>
              <div className="col-12">
                <EventList events={events} setUpdateEvent={setUpdateEvent}  setDeleteEvent={setDeleteEvent} setEvents={setEvents}/>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <EventForm setEvents={setEvents} updateEvent={updateEvent} setUpdateEvent={setUpdateEvent}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
