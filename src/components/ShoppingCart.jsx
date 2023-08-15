import { useOutletContext } from 'react-router-dom'
// import { useState } from 'react'

function ShoppingCart() {
  const [cart] = useOutletContext();

  if (cart) {
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
          {cart.map((product, index) => <>
            <tr key={index}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <button >-</button>
                
                {product.quantity ? product.quantity :
                                      product.quantity = 0} 
                <button >+</button>
              </td>
            </tr>  
          </>)}
          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <div>Visit our shop and choose some items</div>
    )
  }
}

export default ShoppingCart