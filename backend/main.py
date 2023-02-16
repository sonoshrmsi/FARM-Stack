from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
import models
from database import (
    fetch_all_todos,
    fetch_one_todo,
    create_todo,
    database,
    update_todo,
    remove_todo
)

# App object
app = FastAPI()

origins = ['https://localhost:3000']

app.add_middleware(
    CORSMiddleware, 
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)

@app.get("/")
def read_root():
    return {"ping": "pong"}


# GET ALL POST
@app.get("/api/todo")
async def get_todo():
    response = await fetch_all_todos()
    return response

# GET ONE POST
@app.get("/api/todo{title}", response_model=models.Todo)
async def get_todo_by_id(title):
    response = await fetch_one_todo(title)

    if response:
        return response
    else:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"No todo was found with this title: {title}")
    

# CREATE
@app.post("/api/todo", response_model=models.Todo)
async def post_todo(todo: models.Todo):
    response = await create_todo(todo.dict())
    print(response)
    if response:
        return response
    else:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST)


# UPDATE 
@app.put("/api/todo/{title}/", response_model=models.Todo)
async def put_todo(title: str, desc: str):
    response = await update_todo(title, desc)
    if response:
        return response
    else:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"No todo was found with this title: {title}")


    
# DELETE
@app.delete("/api/todo{title}")
async def delete_todo(title):
    response = await remove_todo(title)
    if response:
        return {"message":"title removed successfully"}
    else:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"No todo was found with this title: {title}")

