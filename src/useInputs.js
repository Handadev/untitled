import React, { useCallback, useState, useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE' :
            return {
              ...state,
              [action.name]: action.value
            };
        case 'RESET':
            console.log("Object.keys(state) => " , Object.keys(state));
            return Object.keys(state).reduce((acc, current) => {
                acc[current] = '';
                return acc;
            }, {});
        default:
            return state;
    }

}


function useInputs(initForm) {
    // const [form, setForm] = useState(initForm);
    //
    // const onChange = useCallback(e => {
    //     const {name, value} = e.target;
    //
    //     setForm(form => ({
    //         ...form,
    //         [name]: value
    //     }));
    // }, []);
    //
    // const reset = useCallback(() => {
    //     setForm(initForm);
    // }, [initForm]);
    const [form, dispatch] = useReducer(reducer, initForm);

    const onChange = useCallback(e => {
        const { name, value } = e.target;

        dispatch({
            type: 'CHANGE',
            name,
            value,
        });
    }, []);

    const reset = useCallback(() => {
        dispatch({
            type: 'RESET',
        });
    }, []);

    return [form, onChange, reset];
}




export default useInputs;