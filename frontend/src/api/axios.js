import axios from 'axios'

const API = axios.create({
  baseURL: 'https://event-calendar-crud-app.onrender.com/events',
})

export default API;