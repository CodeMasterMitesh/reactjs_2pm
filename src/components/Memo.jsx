import { useState } from "react";
import ChildCompo from "./ChildCompo";


export const Memo = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    return (
        <>
            <h1>Memo</h1>
            <p>Memo is a higher order component that is used to optimize the performance of a component by memoizing the result of a function. It is used to prevent unnecessary re-renders of a component when the props have not changed.</p>
            <p>Count : {count}</p>
            <button onClick={increment}>Increment</button>
            <ChildCompo/>
        </>
    );
}