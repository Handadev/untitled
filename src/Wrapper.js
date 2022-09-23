import React from 'react';

// {children}을 통해 App.js에 <Wrapper> 사이에 넣어놓은 <Hello>를 가져다 온다
function Wrapper({children}) {
    const style = {
        border: '2px solid black',
        padding: 16
    };
    return (
        <div style={style}>
            {children}
        </div>
    );
}

export default Wrapper;