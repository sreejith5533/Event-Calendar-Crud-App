from fastapi import FastAPI,Depends,HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

import models
import schemas
from database import engine ,SessionLocal

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


origins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173"
]

app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)



def get_db():
  db = SessionLocal()
  try:
    yield db
  finally:
    db.close()





@app.get("/events",response_model=list[schemas.EventResponse])
def get_events(db:Session = Depends(get_db)):
  events = db.query(models.Event).all()
  return events

@app.post("/events",response_model=schemas.EventResponse)
def create_event(event:schemas.EventCreate,db:Session = Depends(get_db)):
  new_event = models.Event(**event.model_dump())
  db.add(new_event)
  db.commit()
  db.refresh(new_event)
  return new_event





@app.put("/events/{event_id}",response_model=schemas.EventResponse)
def update_event(event_id:int,updated_event:schemas.EventUpdate,db:Session = Depends(get_db)):
  event = db.query(models.Event).filter(models.Event.id == event_id).first()

  if not event:
    raise HTTPException(status_code=404,detail=f"Event with id {event_id} not found")
  
  for key ,value in updated_event.model_dump().items():
    setattr(event,key,value)

  db.commit()
  db.refresh(event)

  return event




@app.delete("/events/{event_id}")
def delete_event(event_id:int,db:Session = Depends(get_db)):
  event = db.query(models.Event).filter(models.Event.id == event_id).first()

  if not event :
    raise HTTPException(status_code=404,detail=f"Event with id {event_id} not found")
  
  db.delete(event)
  db.commit()

  return {"message":f"Event with id {event_id} deleted successfully"}

