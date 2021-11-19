import React from "react"
import formatPrice from "../helpers/formatPrice"

const ProductsList = ({productData}) => {
    // console.log(productData)
    let individualProduct = productData.map(product => {
        return (
        <li className="list-item">
            <h3>{product.name}</h3>
            <p>Price: {formatPrice(product.price)}</p>
            <button type="submit">Add To Cart</button>
            <img src={product.img}/>
            <p>{product.description}</p>
        </li>
        )
    })
    return (
        <div className="products-list">
            <h2>My Garage Sale</h2>
            <ul className="products">
                {individualProduct}
            </ul>
        </div>
    )
}

export default ProductsList;
