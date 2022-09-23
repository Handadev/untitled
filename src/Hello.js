import React from 'react';
import './App.css';

// 컴포넌트 대문자
// props 로 가져오거나 {name, color}로 직접 선언하여가져올 수 있다
function Hello({name, color, isSpecial}) {

    return (
        /*요건 fragment라고 함 */
        <>
            {/*오 바로 주석 지원 좋구요*/}
            <div style={{
                color: color
            }}>
                {isSpecial && <b>^^</b>}
                {isSpecial ? <b>스페셜함</b> : <b>안스페셜함</b>}
                hello world {name}
            </div>
            <div className='gray-box'>hello world</div>
        </>)
    ;
}

Hello.defaultProps = {
    name: '이름없음'
};

export default Hello;