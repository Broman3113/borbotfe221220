import React, {FC} from 'react';
import classes from './ViewUser.module.css';
import {User} from "../../../types/types";
import Button from "../../Button/Button";

type ViewUserProps = {
    user: User,
    setUserViewed: (user: null) => void
}
const ViewUser: FC<ViewUserProps> = ({user, setUserViewed}) => {
    return (
        <div className={classes.ViewUser}>
            <button className={classes.CrossBtn} onClick={() => setUserViewed(null)}>&times;</button>
            <div className={classes.UserHeader}>
                <img className={classes.UserImg} src={require(`../../../assets/userPhoto/${user.photo}`)} alt=""/>
                <h3 className={classes.UserName}>{user.name}</h3>
                <p className={classes.UserPosition}>{user.position}</p>
            </div>
            <div className={classes.UserBody}>
                <ul className={classes.InfoList}>
                    <li className={classes.InfoItem}>
                        <span className={classes.InfoItemTitle}>Phone</span>
                        <span className={classes.InfoItemValue}>{user.phone}</span>
                    </li>
                    <li className={classes.InfoItem}>
                        <span className={classes.InfoItemTitle}>URL</span>
                        <span className={classes.InfoItemValue}><a href="#">https://example.com</a></span>
                    </li>
                    <li className={classes.InfoItem}>
                        <span className={classes.InfoItemTitle}>Email</span>
                        <span className={classes.InfoItemValue}><a href={user.email}>{user.email}</a></span>
                    </li>
                </ul>
                <Button type={"solid"} style={{width: '100%'}}>Send Message</Button>
            </div>
        </div>
    );
};

export default ViewUser;
