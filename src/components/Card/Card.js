import React from 'react'
import styles from './Card.module.css'

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.borderRight}>
        <p>IP ADDRESS</p>
        <h2>192.212.174.101</h2>
      </div>
      <div className={styles.borderRight}>
        <p>LOCATION</p>
        <h2>Brooklyn, NY <br/>1001</h2>
      </div>
      <div className={styles.borderRight}>
        <p>TIMEZONE</p>
        <h2>UTC-05:00</h2>
      </div>
      <div>
        <p>ISP</p>
        <h2>SpaceX <br/> Starlink</h2>
      </div>
    </div>
  )
}

export default Card
