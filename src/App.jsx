import React from "react";
import Navbar from "./pages/navbar";
import Beranda from "./pages/beranda";
import Product from "./pages/product";
import Tentang from "./pages/tentang";
import Alamat from "./pages/alamat";
import Berlangganan from "./pages/berlangganan";
import Footer from "./pages/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Beranda />
        <Product />
        <Tentang />
        <Alamat />
        <Berlangganan />
      </main>
      <Footer />
    </>
  );
};

export default App;
