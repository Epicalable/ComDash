// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashBoard from './pages/Dashboard';
import Settings from './pages/Settings';
import Auth from './Auth';
import './App.css'; // Styling

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div style={{ padding: '2rem' }}>
        <Routes>
          {/* If not authenticated, show Auth */}
          {!user ? (
            <Route path="*" element={<Auth onUser={setUser} />} />
          ) : (
            <>
              <Route path="/" element={<DashBoard user={user} />} />
              <Route path="/settings" element={<Settings user={user} />} />
              {/* Redirect any unknown path to "/" */}
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
