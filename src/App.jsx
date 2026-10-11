import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/scroll'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Categories from './components/Categories'
import Checkout from './pages/Checkout'

import './index.css'

function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/sale" element={<Shop />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App