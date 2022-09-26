import React, { useRef, useMemo, useCallback, useReducer, createContext} from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import InputSample02 from './InputSample02';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './useInputs';
import produce from 'immer';

window.produce = produce;

function countActiveUsers(users) {
  console.log('활성 사용자 수 세는중');
  return users.filter(user => user.active === true).length;
}

const initalState = {
  users: [
    {
      id: 1,
      name: 'hoon',
      email: '1111111111111@adfasdfasdf',
      active: true,
    },
    {
      id: 2,
      name: 'hgdgon',
      email: '22222222222222@adfasdfasdf',
      active: false,
    },
    {
      id: 3,
      name: 'hqwerqwer',
      email: '33333333333333@adfasdfasdf',
      active: false,
    },
  ]
}

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER' :
      // return {
      //   // inputs: {
      //   //   name: '',
      //   //   email: '',
      //   // }
      //   // users: state.users.concat(action.user)
      // };
          return produce(state, draft => {
            draft.users.push(action.user);
          });
    case 'TOGGLE_USER' :
      // return {
      //   ...state,
      //   users: state.users.map(
      //       user => user.id === action.id
      //       ? {...user, active : !user.active}
      //           : user
      // )};
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      });
    case 'REMOVE_USER' :
      // return {
      //   ...state,
      //   users: state.users.filter(
      //       user => user.id !== action.id
      //   )
      // };
      return produce(state, draft => {
        const index = draft.users.findIndex(user => user.id === action.id);
        draft.users.splice(index, 1);
      });
    default:
      throw new Error('no action available');
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initalState);
  const {users} = state;
  const nextId = useRef(4);
  const [form, onChange, reset] = useInputs({
    name: '',
    email: '',
  });
  const {name, email} = form;

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        name,
        email,
      }
    });
    console.log('name = ' + name);
    console.log('email = ' + email);
    nextId.current += 1;
    reset();
  }, [name, email, reset]);

  // [] 빈 배열인 이유는 컴포넌트 최초 생성에만 정의해주면 계속 같은 기능을 사용할 수 있기 때문
  // const onToggle = useCallback(id => {
  //   dispatch({
  //     type: 'TOGGLE_USER',
  //     id: id
  //   })
  // }, []);
  //
  // const onRemove = useCallback(id => {
  //   dispatch({
  //     type: 'REMOVE_USER',
  //     id: id
  //   })
  // }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
      <UserDispatch.Provider value={dispatch}>
        <CreateUser
            name={name}
            email={email}
            onChange={onChange}
            onCreate={onCreate}
        />
        <UserList
            users={users}
            // onToggle={onToggle}
            // onRemove={onRemove}
        />
        <div>활성사용자 수 : {count}</div>
      </UserDispatch.Provider>
  );
}

export default App;
