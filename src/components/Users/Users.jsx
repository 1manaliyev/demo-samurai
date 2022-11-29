import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = ({currentPage, selectedPage, totalUsersCount, onPageChanged, pageSize, users, followingInProgress, unfollow, follow, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage} selectedPage={selectedPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize} />
        {
            users.map(u => <User user={u} followingInProgress={followingInProgress} unfollow={unfollow} follow={follow} />)
        }
    </div>
}

export default Users;