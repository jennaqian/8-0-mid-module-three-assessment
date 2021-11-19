import "./App.css";
import { Component } from "react";
import ProductsList from "./components/ProductsList.js";
import Cart from "./components/Cart.js";
import Form from "./components/Form.js";
import data from "./data/productData.js";
import formatPrice from "./helpers/formatPrice.js"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data,
      shoppingCart: [],
      subTotal: 0,
      tax: 0,
      total: 0,
    };
  }

  addToCart = (product) => {
    console.log(product)
    const { shoppingCart, subTotal, tax, total } = this.state;

    this.setState({
      shoppingCart: [...shoppingCart, product],
      subTotal: product.price + subTotal,
      tax: (product.price + subTotal) * 0.05,
      total: (product.price + subTotal) * 1.05,
    });
  };

  render() {
    const { data, shoppingCart, subTotal, tax, total } = this.state;
    return (
      <div className="products-container">
        <ProductsList productData={data} addToCart={this.addToCart} />
        <Cart shoppingCart={shoppingCart} tax={formatPrice(tax)} total={formatPrice(total)} subTotal={formatPrice(subTotal)}/>
        <Form total={formatPrice(total)}/>
      </div>
    );
  }
}

export default App;
