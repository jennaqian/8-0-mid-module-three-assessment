import React from "react"

const ProductsList = ({productData}) => {
    console.log(productData)
    let individualProduct = productData.map(product => {
        return (
        <li>
            <p>Name: {product.name}</p>
            <p>Price: $ {product.price}</p>
            <button>Add To Cart</button>
            <img src={product.img}/>
            <p>{product.description}</p>
        </li>
        )
    })
    return (
        <div>
            <h2>My Garage Sale</h2>
            <ul>
                {individualProduct}
            </ul>
        </div>
    )
}

export default ProductsList;
