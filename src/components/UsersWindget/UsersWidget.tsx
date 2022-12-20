import React, {useEffect} from 'react';
import classes from './UsersWidget.module.css';
import UsersList from "./UsersList/UsersList";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {fetchUsers} from "../../store/usersSlice";
import Button from "../Button/Button";
import ViewUser from "./ViewUser/ViewUser";
import {User} from "../../types/types";

const UsersWidget = () => {
    const [showAll, setShowAll] = React.useState(false);
    const users = useAppSelector(state => state.users.users);
    const [userViewed, setUserViewed] = React.useState<null | User>(null);
    const dispatch = useAppDispatch();
    const onShowAllClick = () => {
        setShowAll(!showAll);
    }
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])
    return (
        <div className={classes.UsersWidget} data-testid="user-widget">
            {!userViewed
                ? <>
                    <div>
                        <UsersList users={showAll ? users : users.slice(0, 3)} setUserViewed={setUserViewed}/>
                    </div>
                    {!showAll && <div className={classes.ViewAllPanel} onClick={onShowAllClick}>
                        <Button style={{width: '100%'}}>View All</Button>
                    </div>}
                </>
                : <div>
                    <ViewUser user={userViewed} setUserViewed={setUserViewed}/>
                </div>}
        </div>
    );
};

export default UsersWidget;
