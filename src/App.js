import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const person = {
    name: "Dipen",
    Job: "Singer"
  }
  const products = [
    {name: "Adobe", price: "$10", validiy: "1 month"},
    {name: "Amazon", price: "$20", validiy: "3 month"},
    {name: "Facebook", price: "$40", validiy: "6 month"},
    {name: "Twitter", price: "$40", validiy: "7 month"}
  ]
  return (
    <div className="App">
      <header className="App-header">
      <Person profile = {person}></Person>   
      <Products detail = {products[0]}></Products>
      <Products detail = {products[1]}></Products>
      <Products detail = {products[2]}></Products>
      <Products detail = {products[3]}></Products>
      </header>
    </div>
  );
}
function Person(props) {
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
function Products (props) {
  const {name,price,validiy} = props.detail;
  const productsStyle = {
    border: "2px solid white",
    borderRadius: "5px",
    backgroundColor: "royalblue",
    margin: "5px"
  }
  return (
    <div style = {productsStyle}>
      <h5>Product Name : {name} </h5>
      <h5>Product Price : {price} </h5>
      <p>Product Validity : {validiy} </p>
      <button>Buy Now</button>
    </div>
  )
}


export default App;
