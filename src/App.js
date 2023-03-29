import React from "react";
import Info from "./components/Info";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="card">
      <div className="container">
        <Info />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
