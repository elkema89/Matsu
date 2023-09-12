import './App.css'
import Landing from './Components/Landing/Landing'
import Home from "./Views/Home/Home"
import { Routes, Route } from 'react-router-dom'



function App() {

  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
  )
}

export default App
