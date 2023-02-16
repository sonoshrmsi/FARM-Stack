import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoView from "./components/TodoListView";
function App() {
  const [todoList, setTodoList] = useState([{}]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // Read all todos
  useEffect(() => {
    axios.get("http://localhost:8000/api/todo").then((res) => {
      setTodoList(res.data);
    });
  });

  // Post a todo
  const addTodoHandler = () => {
    axios
      .post("http://localhost:8000/api/todo/", {
        title: title,
        description: desc,
      })
      .then((res) => console.log(res));
  };

  return (
    <div
      className="App list-group-item justify-content-center align-items-center mx-auto"
      style={{
        width: "400px",
        backgroundColor: "white",
        marginTop: "15px",
        border: "1px solid grey",
        padding: "20px",
      }}
    >
      <h1
        className="card text-white bg-primary mb-1"
        styleName="max-width: 20rem;"
      >
        Task Manager
      </h1>
      <h6 className="card text-white bg-primary mb-3">
        FASTAPI - React - MongoDB
      </h6>
      <div className="card-body">
        <h5 className="card text-white bg-dark mb-3">Add Your Task</h5>
        <span className="card-text">
          <input
            className="mb2 form-control titleIn"
            placeholder="Title"
            style={{ "margin-top": "10px" }}
            onChange={(event) => setTitle(event.target.value)}
          ></input>
          <input
            className="mb2 form-control desIn"
            placeholder="Description"
            style={{ "margin-top": "10px" }}
            onChange={(event) => setDesc(event.target.value)}
          ></input>
          <button
            className="btn btn-outline-primary mx-2"
            style={{
              borderRadius: "50px",
              "font-weight": "bold",
              "margin-top": "10px",
            }}
            onClick={addTodoHandler}
          >
            Add task
          </button>
        </span>
        {/* adding the task */}
        <h5
          className="card text-white bg-dark mb-3"
          style={{
            "margin-top": "10px",
          }}
        >
          Your Tasks
        </h5>
        <div>
          {/* exteral component */}
          <h6 className="card text-dark bg-warning py-1 mb-0">
            2023, All rights reserved &copy;
          </h6>
        </div>
      </div>
    </div>
  );
}

export default App;
