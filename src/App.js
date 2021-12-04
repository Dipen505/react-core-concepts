import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const person = {
    name: "Dipen",
    Job: "Singer"
  }
  return (
    <div className="App">
      <header className="App-header">
      <Person profile = {person}></Person>
      <Person profile = {person}></Person>
      <Person profile = {person}></Person>
      <Person profile = {person}></Person>
      </header>
    </div>
  );
}
function Person(props) {
  console.log(props);
  const personStyle = {
    border: "1px solid blue",
    backgroundColor: "red",
    borderRadius: "5px",
    margin: "5px"
  }
  return (
    <div style = {personStyle}>
      <h1>Name: {props.profile.name}</h1>
      <h5>Hero of the year</h5>
    </div>
  )
}



export default App;
