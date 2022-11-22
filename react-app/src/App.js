import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Goals from './components/Goals';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Goals/>
      <Projects />
    </div>
  );
}

export default App;
