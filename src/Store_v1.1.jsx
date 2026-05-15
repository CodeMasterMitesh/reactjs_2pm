import react from "react";
import { createStore } from "redux";
// todo app : create store and reducer for task management
const ADD_TASK = 'add/task';
const DELETE_TASK = 'delete/task';

const initialState = {
    task : []
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
        default:
            return state;
    }
}



export const store = createStore(TaskReducer);

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

// console.log("get store info")
// console.log("initialState", store.getState());


// store.dispatch(addTask("My Name is mitesh"));
// console.log("updated states", store.getState());

// store.dispatch(addTask("Hello How Are You?"));
// console.log("updated states", store.getState());


// store.dispatch(addTask("I am on the way"));
// console.log("updated states", store.getState());

// store.dispatch(addTask("Hello Mitesh How are you?"));
// console.log("updated states", store.getState());

// store.dispatch(deleteTask(0));
// console.log("deleted states", store.getState());



