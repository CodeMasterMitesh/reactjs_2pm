// To pass an event handler function as a prop in React, you define the function in a parent component and then pass it to the child component as a regular prop. The child component receives the function via its props object and assigns it to an event handler attribute (like onClick) of a built-in element. 
// This pattern is fundamental for managing state and behavior, allowing parent components to control actions triggered by child components. 
export const EventPassAsProps = () => {
    const handClick = () => {
        alert('Handled by Function');
    }

    const handleMouseEnter = () => {
        alert('Mouse Entered!');
    }
    return (
        <div>
            <h2>Event Handling by Passing as Props</h2>
            <Buttons click= {() => alert('Button Clicked!')} name="Click Me"/>
            <Buttons click= {() => alert('Button Pressed!')} name="Press Me"/>
            <Buttons click= { handClick } name="Handle Me"/>
            <MouseEnterBtn mouseEnter={ handleMouseEnter} name="Hover Me"/>
        </div>
    );
}


const Buttons = (props) => {
    // const handleClick = () =>{
    //     alert(`Button ${props.name} clicked!`);
    // }
    return (
        <div>
            <button onClick={props.click}>{props.name}</button>
        </div>
    );
}


const MouseEnterBtn = (props) => {
   
    return (
        <div style={{marginTop: '20px', border: '1px solid black', width: '100px', textAlign: 'center'}}>
            <div onMouseEnter={props.mouseEnter}>{props.name}</div>
        </div>
    );
}