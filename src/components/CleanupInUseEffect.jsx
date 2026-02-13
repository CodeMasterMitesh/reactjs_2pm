import { useEffect, useState } from "react";

const CleanupInUseEffect = () => {
    const [count, setCount] = useState(0);
    console.log("Component Rendered");
    // console.log("Count:", count);

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("Timer called");
            setCount((prev) => prev + 1 );
        }, 1000);

        return () => clearInterval(timer);
    },[]);
    

    return (
        <div>
            <h1>Use Effect Hook</h1>
            <h2>Count: {count}</h2>
        </div>
    );
};


export default CleanupInUseEffect;