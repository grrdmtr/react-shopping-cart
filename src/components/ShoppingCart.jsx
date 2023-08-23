import { useState, useContext } from 'react';
import { AppContext } from '../App'; // Import the context
import './ShoppingCart.css'

function ShoppingCart() {
  const { cart, updateCart } = useContext(AppContext);
  const [newCart, setNewCart] = useState(cart);
  const [placeOrder, setPlaceOrder] = useState(false);
  const [total, setTotal] = useState();

  const handleDecrease = (product) => {
    const updatedCart = newCart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
        : item
    );
    setNewCart(updatedCart);
    updateCart(updatedCart);
    handleTotal();
  };

  const handleIncrease = (product) => {
    const updatedCart = newCart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: (item.quantity || 0) + 1 }
        : item
    );
    setNewCart(updatedCart);
    updateCart(updatedCart);
    handleTotal();
  };

  const handlePlaceOrder = () => {
    setPlaceOrder(true);
    setNewCart([]);
    updateCart([]);
  }

  const handleTotal = () => {
    if (cart && cart.length > 0) {
      setTotal(cart.reduce((acc, product) => acc + (product.price || 1) * product.quantity || 1))
    }
    console.log(total);
  }

  if (placeOrder) {
    return (
      <div>
        Thank you for shopping with us!
      </div>
    );
  } else {
    return (
      <div>
        {newCart && newCart.length > 0 ? (
          <div className="cart-popup-content">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {newCart.map((product, index) => (
                  <tr key={index}>
                    <td><img className="cart-image" src={product.image} alt={product.title} /></td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td className="qty">
                      <button onClick={() => handleDecrease(product)}>-</button>
                      {`  ${product.quantity}  ` || 1}
                      <button onClick={() => handleIncrease(product)}>+</button>
                    </td>
                    <td>{(Math.round(product.price * 100)/100 || 1) * (product.quantity || 1)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>{`Total: ${total}`}</td>
                </tr>
              </tfoot>
            </table>
            <div className="cart-popup-header">
              <button onClick={handlePlaceOrder}>Place order</button>
            </div>
          </div> 
        ) : (
          <div>Visit our shop and choose some items</div>
        )}
      </div>
    );
  }
}

export default ShoppingCart;
