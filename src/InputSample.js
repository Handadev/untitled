import React, {useState} from 'react';


function InputSample() {
    const [text, setText] = useState('');

    // 발생한 이벤트 객체를 가져옴
    const onChange = (e) => {
        // e.target 이벤트가 발생한 dom 객체의 정보를 가져옴
        console.log(e.target.value);
        setText(e.target.value);
    }

    const onDelete = (e) => {
        setText('');
    }

    return (
        <div>
            <input onChange={onChange} value={text}/>
            <button onClick={onDelete}>초기화</button>
            <div>
                <b>값: </b>
                {text}
            </div>
        </div>
    );
}

export default InputSample;