import { useState, useEffect } from "react";
import API from "../api/axios";

function EventForm({ setEvents, updateEvent, setUpdateEvent }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
  });


  useEffect(()=>{
    if(updateEvent){
      setFormData({
        title : updateEvent.title,
        description : updateEvent.description,
        date : updateEvent.date
      });
    }
  },[updateEvent]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedData = {
        ...prev,
        [name]: value,
      };
      console.log(updatedData);
      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (updateEvent) {
      API.put(`/events/${updateEvent.id}`, formData)
        .then((res) => {
          setEvents((prev) =>
            prev.map((event) =>
              event.id === updateEvent.id ? res.data : event,
            ),
          );
          setUpdateEvent(null);
          setFormData({
            title: "",
            description: "",
            date: "",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      API.post("/events", formData)
        .then((res)=>{
          setEvents((prev)=>[...prev,res.data]);
          setFormData({
            title: "",
            description: "",
            date: "",
          });
        }).catch((err)=>{
          console.log(err);
        })
    }
  };

  return (
    <div className="event-form-div">
      <h5>Manage Event</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="e-title" className="form-label">
            Event Title
          </label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="e-title"
            value={formData.title || ""}
            placeholder="Enter Event Title"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            placeholder="Add Event Details..."
            className="form-control"
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="date">
            Date
          </label>
          <input
            className="form-control"
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="save-changes-btn">
          {updateEvent ? "Update Event" : "Create Event"}
        </button>
      </form>
    </div>
  );
}

export default EventForm;
