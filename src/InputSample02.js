import React, {useState, useRef} from 'react';


function InputSample02() {
    const [inputs, setInputs] = useState({
        name: '',
        nickName: '',
    });

    const {name, nickName} = inputs;
    const nameInput = useRef();

    // 발생한 이벤트 객체를 가져옴
    const onChange = (e) => {
        const {name, value} = e.target;

        console.log(name);
        console.log(value);

        // 객체의 상태를 업데이트 할 때는 기존 객체를 복사한 후, 새로운 상태로 업데이트 해줘야함
        // 불변성을 지켜줘야, react에서 변화를 감지할 수 있다 !!!!
        // const nextInputs = {
        //     ...inputs,
        // };
        // nextInputs[name] = value;
        // setInputs(nextInputs);

        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onDelete = (e) => {
        setInputs({
            name: '',
            nickName: '',
        });
        nameInput.current.focus();
    };

    return (
        <div>
            <input name='name' placeholder='이름' onChange={onChange} value={name} ref={nameInput}/>
            <input name='nickName' placeholder='닉네임' onChange={onChange} value={nickName}/>
            <button onClick={onDelete}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickName})
            </div>
        </div>
    );
}

export default InputSample02;