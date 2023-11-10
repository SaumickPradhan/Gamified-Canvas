import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Container } from "react-bootstrap";
import NavBar from './components/NavBar'
import Announcements from './pages/Announcements'
import Calender from './pages/Calender'
import Courses from './pages/Courses'
import UserProfile from './pages/UserProfile'
import Dashboard from './pages/Dashboard'
import {BrowserRouter as Router, Routes,Route,Navigate,} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <NavBar />
        <Container className="my-3">
          <Router>
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="/user" element={<UserProfile />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/announcements" element={<Announcements />} />
              <Route path="/calender" element={<Calender />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
        </Container>
    </div>
  )
}

export default App
