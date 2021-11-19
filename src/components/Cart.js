import { Component } from "react";

class Cart extends Component {
    constructor() {
        super()

    }

    render() {
        return (
            <div className="cart">
                <h2>Cart</h2>
                <ul></ul>
                <h3>Subtotal: ${}</h3>
                <h3>Tax: ${}</h3>
                <h3>Total: ${}</h3>
            </div>
        )
    }
}

export default Cart;