import React from "react";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Activities from "./components/Activities";
function App() {
  return (
    <div className="App">
      <Topbar/>
      <Navbar/>
      <Hero/>
      <Activities/>
      <Gallery/>

    </div>
  );
}

export default App;
