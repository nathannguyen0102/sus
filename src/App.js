import React from "react";
// import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Signature from "./components/Signature";
import Reservation from "./components/Reservation";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* <TopBar /> */}
      <Navbar />
      <Hero />
      <Signature />
      <Reservation />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
