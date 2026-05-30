from pydantic import BaseModel
from typing import Optional

class EventBase(BaseModel):
  title : str
  description : str
  date : str





class EventCreate(EventBase):
  pass


class EventUpdate(EventBase):
  pass

class EventResponse(EventBase):
  id : int


  class Config:
    from_attributes = True