import React, { useRef, useState, useMemo, useCallback, useReducer } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import InputSample02 from './InputSample02';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수 세는중');
  return users.filter(user => user.active === true).length;
}

function App() {
  // input 초기화
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
  });
  // users 초기화
  const [users, setUsers] = useState([
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
  ]);

  const {name, email} = inputs;

  // 값을 저장하 사용하지만 reRendering이 불필요하기 때문에 state 관리를 하지 않는 것
  const nextId = useRef(4);

  // input값 변경
  const onChange = useCallback( e => {
    const {name, value} = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });

  }, [inputs]);

  // 유저 생성
  const onCreate = useCallback(() => {
    console.log(nextId.current);
    const user = {
      id: nextId.current,
      name,
      email,
    };
    // 배열자체에 직접 넣는 것은 좋은 방법이 아님. 배열복사를 통해서 신규 배열을 구성해야함
    // 1번 방법
    // setUsers([...users, user]);
    // 2번 방법
    setUsers(user => users.concat(user));

    setInputs({
      name: '',
      email: '',
    });
    nextId.current += 1;
  }, [name, email]);
  // useCallback 작성시 참조하는 상태값을 빼먹으면, 가장 최신값이 아닌 초기의 값을 참조하기 때문에
  // 참조값을 추가해야한다. 만약 App에서 props로 가져온 값을 사용하게 된다면, 그 값도 []에 추가해야함

  // 유저 삭제
  const onRemove = useCallback((id) => {
    setUsers(users => users.filter(user => user.id !== id));
  }, []);

  // 특정 배열을 업데이트 할 때도 map을 사용할 수 있음
  const onToggle = useCallback(id => {
    setUsers(users => users.map(
        user => user.id === id
        ? {...user, active: !user.active}
            : user
    ));
  }, [users]);

  // useMemo 컴포넌트 성는 최적화 값이 쓸데없이 reRendering되는 것을 막는다
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
      // <Wrapper>
      //     <Hello name='냠냠' color='red' isSpecial/>
      //     <Hello color='pink' isSpecial={false}/>
      // </Wrapper>
      // <Counter />
      <>
        <CreateUser name={name} email={email} onChange={onChange} onCreate={onCreate}/>
        <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
        <div>활성사용자 수 : {count}</div>
      </>
  );
}

export default App;
