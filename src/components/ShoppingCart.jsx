import { useState } from 'react'; // Added useState import
import { useOutletContext } from 'react-router-dom';

function ShoppingCart() {
  const [cart] = useOutletContext();
  const [newCart, setNewCart] = useState(cart); // Initialize local state

  const handleDecrease = (product) => {
    const updatedCart = newCart.map((item) =>
      item.id === product.id
        ? {
            ...item,
            quantity: Math.max((item.quantity || 1) - 1, 0),
          }
        : item
    );
    setNewCart(updatedCart);
  };

  const handleIncrease = (product) => {
    const updatedCart = newCart.map((item) =>
      item.id === product.id
        ? {
            ...item,
            quantity: Math.max((item.quantity || 1) + 1, 0),
          }
        : item
    );
    setNewCart(updatedCart); // Update local state
  };

  if (newCart && newCart.length > 0) {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {newCart.map((product, index) => (
              <tr key={index}>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <button onClick={() => handleDecrease(product)}>-</button>
                  {product.quantity || 1}
                  <button onClick={() => handleIncrease(product)}>+</button>
                </td>
                <td>{(product.price || 1) * (product.quantity || 1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <div>Visit our shop and choose some items</div>;
  }
}

export default ShoppingCart;
