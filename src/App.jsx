import React from 'react'
import Navbar from './assets/navbar'
import Beranda from './assets/beranda'
import Product from './assets/product'

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