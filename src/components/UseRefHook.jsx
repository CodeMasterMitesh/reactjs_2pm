import { useRef } from "react";

const UseRefHook = () => {

// const name = document.getElementById("name");
// const email = document.getElementById("email");
// const mobile = document.getElementById("mobile");

const name = useRef('null');
const email = useRef('null');
const mobile = useRef('null');

const formSubmit = (e) =>{
    e.preventDefault();
    console.log(name.current.value, email.current.value, mobile.current.value);
}
console.log(name, email, mobile);
    return (
       <form onSubmit={formSubmit}>
            <label>Name:</label>
            <input id="name" type="text" placeholder="Enter your name" ref={name} />
            <br />
            <label htmlFor="">Email</label>
            <input id="email" type="email" placeholder="Enter your email" ref={email} />
            <br />
            <label htmlFor="">Mobile</label>
            <input id="mobile" type="text" placeholder="Enter your mobile number" ref={mobile} />
            <br />
            <button type="submit">Submit</button>
       </form>
    );

}


export default UseRefHook;


// Theory 
// The useRef hook in React is a function that returns a mutable ref object which persists for the full lifetime of the component. The primary feature of useRef is that updating its value does not trigger a component re-render, unlike the useState hook. 
// Key Characteristics
// Persists Values: The value stored in ref.current remains the same across re-renders.
// No Re-renders: Modifying the .current property does not cause the component to re-render, making it efficient for storing non-UI related data.
// Mutable Object: It returns a plain JavaScript object with a single current property, which can be directly read or updated.
// Escape Hatch: React considers useRef an "escape hatch" to interact with imperative APIs or non-React code, such as direct DOM manipulation or integrating with third-party librarie