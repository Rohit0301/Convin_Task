import React from 'react'
import styles from "./UserCard.module.css";
export default function EmptyUserCard() {
  return (
    <div className={styles.card}>
        <div className={styles.empty_text}> Please click on the button to get user details</div>
    </div>
  )
}
