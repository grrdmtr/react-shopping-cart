import styles from "./Navbar.module.css"
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <div className={styles.navbar}>
      <Link to='/'>
        <h1 className={styles.logo}>Foarfece</h1>
      </Link>
      <ul className={styles.listItems}>
        <Link to='/'>About us</Link>
        <Link to="/shop">Shop</Link>
        <Link to='/shopping-cart'>Shopping cart</Link>
      </ul>
    </div>
  )
}

export default Navbar
