import react from "react";
// todo app : create store and reducer for task management
const ADD_TASK = 'add/task';
const DELETE_TASK = 'delete/task';

const initialState = {
    task : []
}

const TaskReducer = (state = initialState, action) => {
    console.log(state,action);
    switch(action.type){
        case ADD_TASK :
            return{
                ...state,   task : [...state.task, action.payload]
            }

        case DELETE_TASK : 
            return{
                ...state, task : state.task.filter((task) => task.id !== action.payload)
            }
        default:
            return state;
    }
}

export default TaskReducer;