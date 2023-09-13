import './App.css'
import Landing from './Components/Landing/Landing'
import Home from "./Views/Home/Home"
import AboutUs from "./Components/AboutUs/AboutUs"
import Login from "./Components/Login/Login"
import { Routes, Route } from 'react-router-dom'



function App() {

  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  )
}

export default App
