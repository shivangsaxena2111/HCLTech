import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import PatientProfile from './pages/Profile/PatientProfile';
import PatientDashboard from './pages/Dashboard/PatientDashboard';
import GoalTracker from './pages/GoalTracker/GoalTracker';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/patientprofile" element={<PatientProfile />} />
                <Route path="/patient/dashboard" element={<PatientDashboard />} />
                <Route path="/patient/tracker" element={<GoalTracker />} />
            </Routes>
        </Router>
    );
}

export default App;
