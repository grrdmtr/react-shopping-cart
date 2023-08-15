import { useState } from 'react'
import Navbar from './components/Navbar'
import { Outlet } from "react-router-dom";

import './App.css'

function App() {

  const [cart, setCart] = useState([])

  const handleAddToCard = (product) => {
    setCart(cart => [...cart, product])
  }

  return (
    <>
      <Navbar />
      <Outlet context={[cart, handleAddToCard]}/>
    </>
  )
}

export default App
