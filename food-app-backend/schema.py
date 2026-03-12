from pydantic import BaseModel
class FoodCreate(BaseModel):
    name: str
    price: float
    category: str
    description: str
    image: str
    
class FoodResponse(FoodCreate):
    id: int
    
    class config:
      form_attributes = True
      
    