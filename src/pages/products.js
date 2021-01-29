import React from "react"
import Layout from "../components/layout"

import styles from "../components/products.module.css"

// console.log(styles)
const products = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>products page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          iure sint laborum, libero suscipit quo rem ab? Nobis temporibus saepe
          minus repudiandae, delectus qui accusantium.
        </p>
      </div>
    </Layout>
  )
}

export default products
