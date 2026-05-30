# EventFlow - Event Calendar CRUD Application

## Project Overview

EventFlow is a full-stack Event Calandar CRUD web application built as part of a Python Full Stack Developer technical assessment.

The application allows users to :

- Create events 
- View events in calendar format
- Edit existing events 
- Delete events 
- View upcoming events list 


----

## Tech Stack 


### Frontend
- React.js 
- Bootstrap
- Axios 
- FullCalendar

### Backend

- FastAPI
- SQLALchemy
- SQLite
- Uvicorn

---

## Project Structure 

```txt 
event-calendar-crud
|
|__ backend/
|    |__ database.db
|    |__ database.py
|    |__ main.py
|    |__ models.py
|    |__ requirements.txt
|    |__ schemas.py
|
|__ frontend/
|    |__ node_modules/
|    |__ public/
|    |__ src/
|    |__ gitignore 
|    |__ eslint.config.js
|    |__ index.html
|    |__ package-lock.json
|    |__ package.json
|    |__ vite.config.js
|
|__ README.md

```

## Features 

- Interactive calendar event management 
- Create, edit , and delete events 
- Real-time UI  updates
- FastAPI REST API integration
- SQLite database storage
- Responsive dashboard UI 
- Swagger API documentation

--- 

# Installation & Setup Instructions

## Clone the repository

``` bash
git clone https://github.com/sreejith5533/event-calendar-crud.git
```

Move into project folder:

```bash 
cd event-crud-calendar-crud
```


---


# Backend Setup (FastAPI)

Move into backend folder:


```bash
cd backend 
```

Create virtual environment :

``` bash 
python -m venv venv 
```

Activate virtual environment:

``` bash
venv\Scripts\activate
```

Install backend dependencies:

```bash
pip install -r requirements.txt 
```

Run FastAPI server:

```bash
uvicorn main:app --reload
```

Backend will run at:
```txt 
http://127.0.0.1:8000
```

FastAPI API documentation:
```txt 
http://127.0.0.1:8000/docs
```


---


# Frontend Setup (React)

Open new terminal.

Move into frontend folder:

```bash
cd frontend
```
Install frontend dependencies:

```bash
npm install 
```
Run frontend:

```bash
npm run dev
```

Frontend will run at:

```txt
http://localhost:5173
```

---

# API Endpoints 

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /events | Get all events |
| POST | /events | Create event |
| PUT | /events/{id} | Update event |
| DELETE | /events/{id} | Delete event |



---  

# Event Fields 

Each event contains:

- Title 
- Description
- Date


---


# Notes 

- SQLite is used as the local database.
- FastAPI Swagger docs available at `/docs`.
- React frontend communicates with FastAPI backend using Axios.
- Designed as a single-page Event Calendar CRUD dashboard application

--- 

# Author

Sreejith R