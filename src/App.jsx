import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Startup from './components/Startup';
import Services from './components/Services';
import Team from './components/Team';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Startup />
      <Services />
      <Team />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
