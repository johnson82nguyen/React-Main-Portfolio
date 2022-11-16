import React from 'react';
import './App.css';
import Navbar from './components/Navbar/NavbarElements';
import Typewriter from 'typewriter-effect';


function App() {
  return (
    <div className="App">

      <h1 class="header">
        John Nguyen

      </h1>
      <h1 class="typewriter">
       <Typewriter
        onInit={(typewriter) => {
        typewriter
        .changeDelay(30)
        .typeString("Hello!")
        .pauseFor(2000)
        .deleteAll()
        .typeString("I'm a Software Engineer")
        .pauseFor(1000)
        .changeDeleteSpeed(30)
        .deleteChars(17)
        .typeString("web developer")
        .pauseFor(1000)
        .deleteChars(13)
        .typeString("basketball/tennis player")
        .pauseFor(1000)
        .deleteChars(24)
        .typeString("gamer")
        .pauseFor(1000)
        .deleteChars(5)
        .typeString("martial artist")
        .pauseFor(1000)
        .deleteAll()
        .typeString("Welcome to my website!")
        .pauseFor(1000000)
        .start();
      }}
      /> 
      </h1>
    </div>
  );
}

export default App;
