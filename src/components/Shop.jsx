import { useEffect, useState, useContext } from 'react'
import { AppContext } from '../App'; // Import the context
import Product from "./Product"
import styles from "./Shop.module.css"

function Shop() {
  const { handleAddToCart } = useContext(AppContext);
  const [products, setProducts] = useState([])

  const fetchProductsData = () => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setProducts(data)
      })
  }

  useEffect(() => {
    fetchProductsData()
  }, [])

  return (
    <div>
      {products.length > 0 && (
        <div className={styles.container}>
          {products.map(product => (
            <div key={product.id}>
              <Product item={product} />
              <button onClick={() => handleAddToCart(product)}>Add to cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Shop
