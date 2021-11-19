import { Component } from "react";

class Form extends Component {
    constructor() {
        super()

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            creditCard: "",
            zipCode: "",
        }
    }

    handleInput = (e) => {
        // console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        const {firstName, lastName, email, creditCard, zipCode} = this.state
        if(firstName.length === 0 || lastName.length === 0 || email.length === 0) {
            window.alert("Input is not valid")
        } else if( creditCard.length !== 16) {
            window.alert("Credit card number is not valid")
        } else if(zipCode.length !== 5){
            window.alert("Zip code is not valid")
        } else {
            window("Purchase Complete! You will be charged $73.49")
        }
    }

    render() {
        return (
            <div className="form">
                <h2>Checkout</h2>
                <form id="checkout" onSubmit={this.handleFormSubmit} >
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" name="firstName" id="first-name" onChange={this.handleInput}></input>
                    <br />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" name="lastName" id="last-name" onChange={this.handleInput}></input>
                    <br />

                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" onChange={this.handleInput}></input>
                    <br />

                    <label htmlFor="credit-card">Credit Card</label>
                    <input type="" name="creditCard" id="credit-card" onChange={this.handleInput}></input>
                    <br />

                    <label htmlFor="zip-code">Zip Code</label>
                    <input type="number" name="zipCode" id="zip-code" onChange={this.handleInput}></input>
                    <br />

                    <button>Buy Now</button>
                </form>
            </div>
        )
    }
}

export default Form;
