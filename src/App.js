import React, { useRef, useState } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import InputSample02 from './InputSample02';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
  });

  const {name, email} = inputs;

  const users = [
    {
      id: 1,
      name: 'hoon',
      email: '1111111111111@adfasdfasdf'
    },
    {
      id: 2,
      name: 'hgdgon',
      email: '22222222222222@adfasdfasdf'
    },
    {
      id: 3,
      name: 'hqwerqwer',
      email: '33333333333333@adfasdfasdf'
    },
  ];

  // 값을 저장하 사용하지만 reRendering이 불필요하기 때문에 state 관리를 하지 않는 것
  const nextId = useRef(4);

  const onChange = e => {
    const {name, value} = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });

  }

  const onCreate = () => {
    console.log(nextId.current);
    nextId.current += 1;
  }

  return (
      // <Wrapper>
      //     <Hello name='냠냠' color='red' isSpecial/>
      //     <Hello color='pink' isSpecial={false}/>
      // </Wrapper>
      // <Counter />
      <>
        <CreateUser name={name} email={email} />
        <UserList users={users}/>
      </>
  );
}

export default App;
