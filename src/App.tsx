import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar';

function App() {
  return (
      <div className="App">
        <h1>TO-DO app with ReactJS and Typescript</h1>
        <div className="container">
          <Navbar />
        </div>
      </div>
  );
}

export default App;
