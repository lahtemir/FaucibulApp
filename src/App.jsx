import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/header";
import Articles from "./components/articles";
import About from "./components/about";
import Footer from "./components/footer";
import Hero from "./components/hero";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Articles />
      <About />
      <Footer />
    </div>
  );
}

export default App;
