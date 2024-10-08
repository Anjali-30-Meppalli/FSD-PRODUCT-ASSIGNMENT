import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Add from './components/Add'
import Dashboard from './components/Dashboard'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar></Navbar>
      <h1>WELCOME TO PRODUCT MANAGEMENT APPLICATION</h1>
      <Routes>
        <Route path="/dash" element={<Dashboard/>}></Route>
        <Route path="/add" element={<Add />}></Route>
        </Routes>

    </>
  )
}

export default App
