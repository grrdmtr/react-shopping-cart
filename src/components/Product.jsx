import PropTypes from 'prop-types'
import styles from "./Product.module.css"

function Product({item}) {

  return (
    <div className={styles.product} key={item.id}>
      <img className={styles.img} src={item.image} alt={item.title} />
      <p>{item.title} <br />
        Price: {item.price}$
      </p>
    </div>
  )
}

export default Product

Product.propTypes = {
  item: PropTypes.object,
}