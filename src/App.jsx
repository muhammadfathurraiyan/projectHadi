import React from 'react'
import Navbar from './pages/navbar'
import Beranda from './pages/beranda'
import Product from './pages/product'

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Beranda />
        <Product />
      </main>
    </>
  )
}

export default App