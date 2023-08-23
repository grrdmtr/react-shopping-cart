import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Outlet } from "react-router-dom";
import './App.css'

export const AppContext = React.createContext(); // Create a context

function App() {
  const [cart, setCart] = useState([])
  const [visible, setVisible] = useState(true);

  const handleVisibility = () => {
    setVisible(!visible);
  };

  const handleAddToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
  };

  const contextValue = {
    cart,
    handleAddToCart,
    updateCart,
    visible, // Pass the value directly
    handleVisibility, // Pass the function directly
  };

  return (
    <>
    <AppContext.Provider value={contextValue}>
      <Navbar />
      <Outlet />
    </AppContext.Provider>
  </>
  )
}

export default App
