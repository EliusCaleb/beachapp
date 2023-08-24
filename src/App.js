import React from "react";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Activities from "./components/Activities";
import Bookings from "./components/Bookings";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Topbar/>
      <Navbar/>
      <Hero/>
      <Activities/>
      <Bookings/>
      <Gallery/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
