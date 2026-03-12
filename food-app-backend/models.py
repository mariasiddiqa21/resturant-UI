from sqlalchemy import Column, Integer, String, Float
from database import Base

class FoodItems(Base):
  __tablename__= "Food_items"
  
  id=Column(Integer,primary_key=True)
  name=Column(String)
  price=Column(Float)
  category=Column(String)
  description=Column(String)
  image=Column(String)
  