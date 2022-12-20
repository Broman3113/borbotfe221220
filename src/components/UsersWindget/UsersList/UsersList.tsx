import React, {FC} from 'react';

import classes from './UsersList.module.css';
import {User} from "../../../types/types";
import Button from "../../Button/Button";

type UsersListProps = {
    users: Array<User>
    setUserViewed: (user: User) => void
}
const UsersList: FC<UsersListProps> = ({users, setUserViewed}) => {
    return (
        <ul className={classes.UsersList}>
            {users.map(user => <li className={classes.User} key={user.email}>
                <div className={classes.UserImageWrapper}>
                    <img src={require(`../../../assets/userPhoto/${user.photo}`)} alt="user avatar"/>
                </div>
                <div className={classes.UserInfoWrapper}>
                    <span className={classes.UserName}>{user.name}</span>
                    <span className={classes.UserNickname}>{user.nickname}</span>
                </div>
                <div className={classes.UserInteraction}>
                    <Button onClick={() => setUserViewed(user)}>View</Button>
                </div>
            </li>)}

        </ul>
    );
};

export default UsersList;
