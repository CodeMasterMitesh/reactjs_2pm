import { useEffect, useState } from "react";

const UseEffectDependancyArray = () => {
    const [count, setCount] = useState(0);
    // console.log("Count:", count);
    const increment = () => {        
        setCount(count + 1);
    }

    // useEffect hook will be called only once when the component is mounted because the dependency array is empty. It will not be called on subsequent renders unless the component is unmounted and remounted.
    // explanation of dependency array in useEffect hook
    // explanation when useEffect will be called based on the dependency array
    useEffect(()=>{
       console.log(count);
       console.log("Use Effect Called");
    },[]);
    

    return (
        <div>
            <h1>Use Effect Hook</h1>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
        </div>
    );
};


export default UseEffectDependancyArray;