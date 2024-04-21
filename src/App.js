import React from 'react'
import Navigation from './components/Navbar/Navbar';
import Body from './components/Body/body';
import Signup from './components/Login/signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<Body/>} />
                    <Route path="/signup" element={<Signup/>} />
                </Routes>
      </Router>
    </div>
  );
}

export default App;