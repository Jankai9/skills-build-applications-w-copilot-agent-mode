import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src="/octofitapp-small.png" alt="Octofit Logo" className="me-2" style={{height: '40px', borderRadius: '5px'}} />
              Octofit Tracker
            </Link>
            <div className="navbar-nav">
              <Link className="nav-link" to="/users">Users</Link>
              <Link className="nav-link" to="/teams">Teams</Link>
              <Link className="nav-link" to="/activities">Activities</Link>
              <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
              <Link className="nav-link" to="/workouts">Workouts</Link>
            </div>
          </div>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={
              <div className="jumbotron bg-primary text-white rounded p-4 mt-4">
                <h1 className="display-4">Welcome to Octofit Tracker</h1>
                <p className="lead">Track your fitness activities, teams, and leaderboards with ease.</p>
                <hr className="my-4" />
                <p>Use the navigation above to explore users, teams, activities, leaderboard, and workouts.</p>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
