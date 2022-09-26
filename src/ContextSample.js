import React, { createContext, useContext , useState} from 'react';

const MyContext = createContext('defaultContext');

function Child() {
    const text = useContext(MyContext);
    return (
        <div>안녕! {text}</div>
    );
}

function Parent({text}) {
    return (
        <Child text={text} />
    );
}


function GrandParent({text}) {
    return (
        <Parent text={text} />
    );
}

function Contextsample() {
    const [value, setValue] = useState(true);
    return (
        <MyContext.Provider value={value ? "진퉁" : "가짜"}>
            <GrandParent/>
            <button onClick={() => setValue(!value)}> 클릭</button>
        </MyContext.Provider>
    );
}

export default Contextsample;