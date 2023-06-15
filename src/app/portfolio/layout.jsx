import React from 'react'
import styles from './portfolio.module.css'

function Layout({ children }) {
  return (
    <>
      <div className={styles.mainTitle}>
        <h1>Our Works</h1>
      </div>
      {children}
    </>

  )
}

export default Layout
