import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/Login'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import Mainpage from './components/Mainpage'

function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/homepage" element={<Mainpage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
