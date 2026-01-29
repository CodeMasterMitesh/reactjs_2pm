export const EventHandling = () => {
    // this is event handler function method 1
    // function eventHandler()
    // {
    //     alert("Button Clicked! Event Handling in ReactJS");
    // }
    // this is event handler function method 2 (arrow function)

    const eventHandler = (event) => {
        // console.log(event);
        // console.log(event.target);
        alert("Button Clicked! Event Handling in ReactJS");
    }

    const anotherEventHandler = (name) => {
        alert("Another Event Handler Called! " + name);
    }
    
    return (
        <div>
            <button onClick={eventHandler}>Click Me</button>
            <button onClick={eventHandler}>Click 2</button>
            <button onClick={ (event) => eventHandler(event)}>Click 3</button>
            {/* event call using inline arrow function */}
            <button onClick={() => alert("Hello")}>Click 4</button>
            <button onClick={(event) => console.log(event)}>Click 4</button>
            {/* event call with passing arguments*/}
            <button onClick={ () => anotherEventHandler("Mitesh")}>Click 5</button>
            <button onClick={ () => anotherEventHandler("Kishan")}>Click 6</button>


        </div>
    )

} 