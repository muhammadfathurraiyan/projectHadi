import React from "react";
import Navbar from "./pages/navbar";
import Beranda from "./pages/beranda";
import Product from "./pages/product";
import Tentang from "./pages/tentang";
import Alamat from "./pages/mitra";
import Kontak from "./pages/kontak";
import Footer from "./pages/footer";
import Manfaat from "./pages/manfaat";
import Jadwal from "./pages/jadwal";
import Team from "./pages/team";
import Video from "./pages/video";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Beranda />
        <Tentang />
        <Manfaat />
        <Jadwal />
        <Product />
        <Alamat />
        <Video />
        <Team />
        <Kontak />
      </main>
      <Footer />
    </>
  );
};

export default App;
