const Cart = (props) => {
    const {shoppingCart, subTotal, tax, total} = props
  
    const listItem = shoppingCart.map((product) => {
    return (
      <li key={product.id}>
        {product.name}: ${product.price.toFixed(2)}
      </li>
    );
  });
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>{listItem}</ul>
      <h3>Subtotal: {subTotal}</h3>
      <h3>Tax: {tax}</h3>
      <h3>Total: {total}</h3>
    </div>
  );
};

export default Cart;