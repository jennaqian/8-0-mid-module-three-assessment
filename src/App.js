import "./App.css";
import { Component } from "react";
import ProductsList from "./components/ProductsList.js"
import Cart from "./components/Cart.js"
import Form from "./components/Form.js"
import data from "./data/productData.js"

class App extends Component {
  constructor() {
    super()

    this.state = {
      data: data
    }
  }

  render() {
    const {data} = this.state
    return (
      <div>
        <ProductsList productData={data}/>
        <Cart />
        <Form />
      </div>
    )
  }
}

export default App;