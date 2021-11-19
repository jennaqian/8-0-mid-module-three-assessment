import "./App.css";
import { Component } from "react";
import ProductsList from "./components/ProductsList.js"
import Cart from "./components/Cart.js"
import Form from "./components/Form.js"

class App extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <ProductsList />
        <Cart />
        <Form />
      </div>
    )
  }
}

export default App;