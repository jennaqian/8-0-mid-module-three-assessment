import { Component } from "react";

class Form extends Component {
    constructor() {
        super()

    }

    handleInput = () => {

    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        
    }

    render() {
        return (
            <div>
                <h2>Checkout</h2>
                <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name"></input>
                    <br />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name"></input>
                    <br />

                    <label htmlFor="email">Email</label>
                    <input type="text" id="email"></input>
                    <br />

                    <label htmlFor="credit-card">Credit Card</label>
                    <input type="" id="credit-card"></input>
                    <br />

                    <label htmlFor="zip-code">Zip Code</label>
                    <input type="number" id="zip-code"></input>
                    <br />

                    <button>Buy Now</button>
                </form>
            </div>
        )
    }
}

export default Form;
