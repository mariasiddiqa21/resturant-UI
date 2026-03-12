from models import FoodItems

def create_foodItem(db,Food):
  new=FoodItems.models(**Food.dict())
  db.add(new)
  db.commit()
  db.refresh(new)
  return new
def get_all_fooditems(db): 
  return db.query(FoodItems).all()

def search_item(db,name):
  return db.query(FoodItems.models).filter(FoodItems.name.contain(name)).all