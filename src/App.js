import "./App.css";
import { Component } from "react";
import ProductsList from "./components/ProductsList.js";
import Cart from "./components/Cart.js";
import Form from "./components/Form.js";
import data from "./data/productData.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data,
      shoppingCart: [],
    };
  }

  addToCart = (product) => {
    // console.log("Clicked")
    const { shoppingCart } = this.state;

    this.setState({
      shoppingCart: [...shoppingCart, product],
    });
  };

  render() {
    const { data, shoppingCart } = this.state;
    return (
      <div className="products-container">
        <ProductsList productData={data} addToCart={this.addToCart} />
        <Cart shoppingCart={shoppingCart} />
        <Form />
      </div>
    );
  }
}

export default App;
