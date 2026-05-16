import react from "react";
import { createStore , applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import {thunk} from "redux-thunk";
// todo app : create store and reducer for task management
const ADD_TASK = 'add/task';
const DELETE_TASK = 'delete/task';
const FETCH_TASK = 'fetch/task';

const initialState = {
    task : [],
}

const TaskReducer = (state = initialState, action) => {
    // console.log(state,action);
    switch(action.type){
        case ADD_TASK :
            return{
                ...state,   task : [...state.task, action.payload]
            }

        case DELETE_TASK : 
            return{
                ...state, task : state.task.filter((curre,index) => index != action.payload)
            }

        case FETCH_TASK :
            return{
                ...state, task : [...state.task, ...action.payload]
            }
        default:
            return state;
    }
}



export const store = createStore(TaskReducer,composeWithDevTools(
    applyMiddleware(thunk)
));

export const addTask = (data) =>{
    return(
        {type :ADD_TASK , payload : data}
    )
}


export const deleteTask = (data) =>{
    return(
        {type :DELETE_TASK , payload : data}
    )
}

export const fetchTask = () => {
    return (
        async (dispatch) => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
                const data = await response.json();
                console.log("fetched data", data);
                dispatch({type : FETCH_TASK , payload : data.map((item) => item.title)});
            }catch (error) {
                console.log("error in fetching data", error);
            }
        }
    )
}

// console.log("get store info")
// console.log("initialState", store.getState());


store.dispatch(addTask("My Name is mitesh"));
console.log("updated states", store.getState());

store.dispatch(addTask("Hello How Are You?"));
console.log("updated states", store.getState());


store.dispatch(addTask("I am on the way"));
console.log("updated states", store.getState());

store.dispatch(addTask("Hello Mitesh How are you?"));
console.log("updated states", store.getState());

store.dispatch(deleteTask(0));
console.log("deleted states", store.getState());



