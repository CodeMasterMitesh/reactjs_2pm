import { Children, createContext } from "react";
// React.createContext() is a function in React's Context API that enables sharing data
// across the component tree without manually passing props at every level (prop drilling).
// It is particularly useful for global data like themes, user authentication status,
// or language preferences

export const myContext = createContext();

export const ContextApi = ({children}) => {

    const value = "Hello from Context API";
    const value2 = "This is another value from Context API";

    return (
        <myContext.Provider value={{data1: value, data2: value2}}>
           {children}
        </myContext.Provider>
    );
}
