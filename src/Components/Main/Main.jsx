import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FetchAllUsers } from "../../Redux/Users/UsersActions";
import Button from "../Button/Button";
import UserCard from "../UserCard/UserCard";
import styles from "./Main.module.css";
export default function Main() {
  const [pageNo, setPageNo] = useState(1);
  const reduxState = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchAllUsers(pageNo));
  }, [pageNo]);

  const HandlePageChange = (delta) => {
    setPageNo(pageNo + delta);
  };

  if (reduxState.usersLoading || !reduxState.users) {
    return (
      <div className={styles.main}>
        <div className={styles.loader} />
      </div>
    );
  }
  return (
    <div className={styles.main}>
      <UserCard />
      <div className={styles.buttons}>
        <button
          disabled={pageNo === 1}
          className={styles.action_button}
          onClick={() => HandlePageChange(-1)}
        >
          Prev
        </button>
        {reduxState.users.map((item) => (
          <Button key={item.id} id={item.id} />
        ))}
        <button
          disabled={pageNo === reduxState.totalPage}
          className={styles.action_button}
          onClick={() => HandlePageChange(1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
