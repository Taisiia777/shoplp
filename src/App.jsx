import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css"; // Import the CSS for transitions
import ReactGA from 'react-ga4';

function App() {
    useEffect(() => {
        ReactGA.initialize('G-S29PJYNV79'); // Ваш Tracking ID
        ReactGA.send("pageview");
      }, []);
    return (
        <Router>
            <Routes />
        </Router>
    );
}

export default App;
