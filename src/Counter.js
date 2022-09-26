import React, {useState, useReducer, Component} from 'react';

// function reducer(state, action) {
//     if (action.type === "increment") {
//         return state + 1;
//     } else if ( action.type === "decrement") {
//         return state - 1;
//     } else {
//         throw new Error('Unhendled action');
//     }
// }

// function Counter() {
    // const [number, setNumber] = useState(0);

    // const onIncrease = () => {
    //     setNumber(number + 1);
    // };
    // const onDecrease = () => {
    //     setNumber(number - 1);
    // };

    // function onIncrease () {
    //     // 상태 업데이트
    //     setNumber(prevNumber => prevNumber + 1);
    // }
    //
    // function onDecrease () {
    //     setNumber(prevNumber => prevNumber - 1);
    // }

    // const [number, dispatch] = useReducer(reducer, 0);
    //
    // function onIncrease () {
    //     // 상태 업데이트
    //     dispatch({
    //         type: "increment"
    //     });
    // }
    //
    // function onDecrease () {
    //     dispatch({
    //         type: "decrement"
    //     });
    // }
    //
    //
    // return (
    //     <div>
    //         <h1>{number}</h1>
    //         <button onClick={onIncrease}>+1</button>
    //         <button onClick={onDecrease}>-1</button>
    //     </div>
    // );
// }

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }


    increase = () => {
        console.log('up');
        this.setState(state => ({
            counter: state.counter + 1
        }));
    }

    decrease = () => {
        console.log('dw');
        this.setState({
            counter: this.state.counter - 1
        });
    }
    render() {
        return (
            <div>
                <h1>0</h1>
                <button onClick={this.increase}>+</button>
                <button onClick={this.decrease}>-</button>
            </div>
        );
    }
}

export default Counter;