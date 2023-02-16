import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="App">
            <div
                className="App list-group-item justify-content-center mx-auto"
                style={{
                    width: "400px",
                    backgroundColor: "white",
                    marginTop: "15px",
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
            </div>
        </div>
    );
}

export default App;
