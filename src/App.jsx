import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import "./App.css"; // Import the CSS file for styling
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DashBoard />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </Router>
    );
};

export default App;
