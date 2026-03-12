from fastapi import FastAPI, Depends, HTTPException, Query, Path
from sqlalchemy.orm import Session
import models  # Your SQLAlchemy models (FoodItems)
import schema  # Your Pydantic schemas (FoodCreate, FoodResponse)
import crud  # CRUD functions (create_food, get_all_food, search_food)
from database import SessionLocal, engine  # DB session & engine


@app.post("/food")
def add_food(food: schemas.FoodCreate, db: Session = Depends(get_db)):
    return crud.create_food(db, food)


@app.get("/food")
def get_food(db: Session = Depends(get_db)):
    return crud.get_all_food(db)


@app.get("/food/search")
def search_food(name: str, db: Session = Depends(get_db)):
    return crud.search_food(db, name)
