from sqlalchemy import Column,Integer,String,Text
from database import Base

class Event(Base):
  __tablename__ = "event"
  id = Column(Integer,primary_key=True,index=True)
  title = Column(String(100),nullable=False)
  description = Column(Text,nullable=False)
  date = Column(String(20),nullable=False)