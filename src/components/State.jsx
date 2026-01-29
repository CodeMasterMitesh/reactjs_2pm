import React ,{useState} from 'react';
export const StateManage = () => {
    // State management definition
    // State is an object that holds some information that may change over the lifetime of the component
    // State is managed within the component (similar to variables declared within a function)
    // State can be updated using the setState method provided by React
    // In functional components, we use the useState hook to manage state
    // in useState we pass the initial value of the state
    // useState returns an array with two elements
    // we dont mutate the state directly instead we use the setter function provided by useState
    // example we can not change is  count directly like count = count + 1 // this will not work
    // we have to use the setter function like setCount(count + 1)
    // when state is updated the component re-renders to reflect the changes in the UI
    const [count, setCount] = useState(0);
    // console.log("State Value:", count);
    // let value = 0;
    const increment = () => {
        setCount(count + 1);
        console.log(count);
    }

    // console.log(useState());
    return( 
        <div style={{textAlign:"center",width:'300px'}}>
            <h2>State Management Component</h2>
            <p>{count}</p>
            <button style={{textAlign:"center",width:'100px',padding:'10px',backgroundColor:'lightblue'}} onClick={increment}>Increment</button>
        </div>

    )
}