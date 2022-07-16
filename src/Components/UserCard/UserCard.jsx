import React from "react";
import { useSelector } from "react-redux";
import EmptyUserCard from "./EmptyUserCard";
import styles from "./UserCard.module.css";
export default function UserCard() {
  const currentUser = useSelector((state) => 
    state.users.currentUser,
  );
  if (!currentUser) {
    return <EmptyUserCard />;
  }
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <img src={currentUser.avatar} alt="avatar" />
      </div>
      <div className={styles.right}>
        <div className={styles.name}>
          {currentUser.first_name} {currentUser.last_name}
        </div>
        <div className={styles.email}>{currentUser.email}</div>
      </div>
    </div>
  );
}
