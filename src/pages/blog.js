import React from "react"
import Layout from "../components/layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>blog page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          tenetur ullam molestiae deleniti eligendi aliquam velit dicta
          repellat. Nihil qui rerum nesciunt est quas non.
        </p>
      </div>
    </Layout>
  )
}

export default blog
