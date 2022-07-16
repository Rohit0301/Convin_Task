import React from 'react'
import styles from './Button.module.css';
import { useDispatch, useSelector } from "react-redux";
import { FetchSingleUser } from '../../Redux/Users/UsersActions';
export default function Button(props) {
    const {id} = props
    const currentUser = useSelector((state) => state.users.currentUser);
    const dispatch = useDispatch();
    return (
        <button className={id==currentUser?.id ? styles.active_button: styles.button} onClick={()=>dispatch(FetchSingleUser(id))}>{id}</button>
    )
}
