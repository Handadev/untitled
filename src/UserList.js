import React, {useEffect, useContext} from 'react';
import {UserDispatch} from './App02';

const User = React.memo(function User({ user }) {
    const {id, name, email, active} = user;
    const dispatch = useContext(UserDispatch);
    // useEffect(() => {
    //     console.log("컴포넌트가 화면에 등장"); // onMount
    //     // props -> state
    //     // rest api
    //     // d3 video.js
    //     // setInterval, setTimeout
    //     // 등등의 동작을 수행할 수 있다. UI가 화면에 나타난 이후이기 때문에 DOM에 바로 접근가능
    //     return () => {
    //         // clearInterval, clearTimeout
    //         // 라이브러리 인스턴스 제거
    //         console.log("컴포넌트가 화면에서 사라짐"); // unMount
    //     }
    // },[]); // 두 번째 파라미터는 배열값이 들어감, 배일이 비어있으면 컴포넌트를 한 번만 호출

    useEffect(() => {
        // 1.컴포넌트가 처음 등장할 때 호출
        // 2. 컴포넌트가 변경된 후값 호출
        // console.log("user 값이 설정됨");
        // console.log(user);
        return () => { // 클리너 함수
            // 1. 컴포넌트가 사라질 때 호출
            // 2. 컴포넌트가 변경되기 전 값 호출
            // console.log("user 값이 바귀기전");
            // console.log("unMount => ", user);
        }
    },  // 두 번째 파라미터 배열에 특정 값을 선언하면 그 값의 onMount, unMount 이벤트를 감지함
        // 조회하고 있는 값이나 props가 있다면 입력해주는것이 규칙
        [user]
    );

    return (
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer'
            }}
               onClick={() => dispatch({
                   type: 'TOGGLE_USER',
                   id
               })}
            >
                {name}
            </b>
            <span>{email}</span>
            {/*onClick에서는 () => 를 설정하지 않으면 onRemove(id) 이것만 넣으면 컴포넌트가
            구성되면서 자동 호출이 된다. 이는 의도된 작동이 아님 */}
            <button onClick={() => dispatch({
                type: 'REMOVE_USER',
                id
            })}>삭제</button>
        </div>
    );
});

function UserList({users, onRemove, onToggle}) {


    return (
        <div>
            {
                users.map(
                    // reRendering시 최적화를 위해 map에는 key값을 요구한다. key 값은 유일값일때가 좋다
                    // reRednering의 효율성을 위해 유일값을 가지고 있는것이 좋다
                    user => (
                        <User
                            user={user}
                            key={user.id}
                            // onRemove={onRemove}
                            // onToggle={onToggle}
                        />
                    )
                    // 유일값이 없을 땐 index값을 보통 넣는다 하지만 권장되지 않는다
                    // (user, index) => (<User user={user} key={index}/>)
                )
            }
        </div>
    );
}

export default React.memo(UserList);