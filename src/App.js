import "./App.css";
import { Component } from "react";
import ProductsList from "./components/ProductsList.js"
import Cart from "./components/Cart.js"
import Form from "./components/Form.js"
import data from "./data/productData.js"
// import formatPrice from "./helpers/formatPrice";

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
      <div className="products-container">
        <ProductsList productData={data}/>
        <Cart />
        <Form />
      </div>
    )
  }
}

export default App;