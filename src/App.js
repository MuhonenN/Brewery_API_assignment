import React from "react";
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Brewery from "./Components/Brewery";

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/brewery/:id" element={<Brewery />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
