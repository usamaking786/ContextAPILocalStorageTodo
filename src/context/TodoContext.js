import { createContext , useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id : 1,
            todo : "Default message is here",
            completed : false,
        }
    ],
    addTodo : (todo)=>{},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {},
})

// Here context has been created, Now need to useit.

export const useTodo = ()=> {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;