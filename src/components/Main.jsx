import styles from "./Main.module.css"

function Main() {

  return (
    <div className={styles.content}>
      <div className={styles.text}>
        <h3>50 YEARS OF HIP-HOP: A STYLE STORY</h3>
        <p>Rappers Bkhterula and midwxst discuss the legends, the style and the future, featuring Stadium Goods, Heron Preston and more.</p>
      </div>
      <img className={styles.img} src="src/assets/data.jpeg" alt="" />
    </div>
  )
}

export default Main
