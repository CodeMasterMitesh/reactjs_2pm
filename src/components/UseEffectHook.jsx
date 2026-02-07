import { useEffect, useState } from "react";

const UseEffectHook = () => {
    const [count, setCount] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const increment = () => {
        // console.log("Button Clicked");
        setCount((prev) => prev + 1);
    };

    useEffect(() => {
        console.log("useEffect called");
        document.title = `Count: ${count}`;
    }, [count]);

    useEffect(() => {
        const id = setInterval(() => {
            console.log("Timer called");
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(id);
    }, []);

    return (
        <div>
            <h1>Use Effect Hook</h1>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <p>Timer: {seconds}s</p>
        </div>
    );
};


export default UseEffectHook;