import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css"; // Import the CSS for transitions

function App() {
    return (
        <Router>
            <Routes />
        </Router>
    );
}

export default App;
