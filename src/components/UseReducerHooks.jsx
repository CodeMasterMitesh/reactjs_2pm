import React, { useReducer } from 'react';
// what is useReducer Hooks?
// `useReducer` is a React hook that is used for managing complex state logic in functional components. 
// It is an alternative to `useState` and is particularly useful when the state logic involves multiple sub-values or when the next state depends on the previous one.

export const UseReducerHooks = () => {
    const reducer =  (state,action) =>{
        // console.log(state,action);
        if(action.type === 'INCREMENT'){
            return state + 1;
        }

        if(action.type === 'DECREMENT'){
            return state - 1;
        }
    }
    // const [count , setCount] = useState(0);
    const [count , dispatch] = useReducer(reducer, 0);
    // console.log(useReducer(reducer, 0));
    
    return (

        <div>
            <h1>UseReducerHooks Component</h1>
            <p>Count : {count}</p>
            <button onClick={()=> dispatch({type : 'INCREMENT'})}>Increment</button>
            <button onClick={()=> dispatch({type : 'DECREMENT'})}>Decrement</button>
        </div>
    )
}