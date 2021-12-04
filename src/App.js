import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    {name: "Adobe", price: "$10", validiy: "1 month"},
    {name: "Amazon", price: "$20", validiy: "3 month"},
    {name: "Facebook", price: "$40", validiy: "6 month"},
    {name: "Twitter", price: "$40", validiy: "7 month"},
    {name: "Google", price: "$60", validiy: "9 month"},
    {name: "Microsoft", price: "$600", validiy: "1 year"}
  ]
  const students = ["Dipen","Anwar","Hannah","Noyon"];
  return (
    <div className="App">
      <header className="App-header">
        <h1>List item of name</h1>
      {
        students.map(student=><li>{student}</li>)
      }
      {
        products.map(product=><Products detail = {product}></Products>)
      }
      </header>
    </div>
  );
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
