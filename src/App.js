import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const person = {
    name: "Dipen",
    Job: "Singer"
  }
  const personStyle = {
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 style = {{border: "1px solid blue",
    backgroundColor: "red",
    borderRadius: "5px"}}>Name: {`${person.name} ${person.Job}`}</h1>

      </header>
    </div>
  );
}



export default App;