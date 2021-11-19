import { Component } from "react";

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const listItem = this.props.shoppingCart.map((product) => {
      return <li>{product.name}: ${product.price.toFixed(2)}</li>;
    });
    return (
      <div className="cart">
        <h2>Cart</h2>
        <ul>{listItem}</ul>
        <h3>Subtotal: ${}</h3>
        <h3>Tax: ${}</h3>
        <h3>Total: ${}</h3>
      </div>
    );
  }
}

export default Cart;
