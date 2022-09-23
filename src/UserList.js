import React from 'react';

function User({user}) {
    return (
        <div>
            <b>{user.name}</b> <span>{user.email}</span>
        </div>
    );
}

function UserList({users}) {


    return (
        <div>
            {
                users.map(
                    // reRendering시 최적화를 위해 map에는 key값을 요구한다. key 값은 유일값일때가 좋다
                    // reRednering의 효율성을 위해 유일값을 가지고 있는것이 좋다
                    user => (<User user={user} key={user.id}/>)
                    // 유일값이 없을 땐 index값을 보통 넣는다 하지만 권장되지 않는다
                    // (user, index) => (<User user={user} key={index}/>)
                )
            }
        </div>
    );
}

export default UserList;