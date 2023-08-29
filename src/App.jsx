import React from 'react'
import Navbar from './pages/navbar'
import Beranda from './pages/beranda'
import Product from './pages/product'
import Tentang from './pages/tentang'

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Beranda />
        <Product />
        <Tentang />
      </main>
    </>
  )
}

export default App