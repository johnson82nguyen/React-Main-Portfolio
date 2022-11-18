import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Typewriter from 'typewriter-effect';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects/>
      <Contact />
    </div>
  );
}

export default App;
