import { useState } from "react";
import "./simple.css";

const DeleteTodo =()=>{

    const initialTodosList = [
        {
            id:1,
            title:"Book the ticket for today evening"
        },
        {
            id:2,
            title:"Rent the movie for tomorrow movie night"
        },
        {
            id:3,
            title:"Confirm the solt for the yoga session tomorrow morning"
        },
        {
            id:4,
            title:"Drop the parcel at Bloomingdale"
        },
        {
            id:5,
            title:"Order fruits on Big Basket"
        },
        {
            id:6,
            title:"Fix the production issue"
        },
        {
            id:7,
            title:"Confirm my solt for Saturday Night"
        },
        {
            id:8,
            title:"Get essentials for Sunday car wash"
        }
    ]

    const [todos,setTodos] = useState(initialTodosList);

    const handleDeleteTodo =(id)=>{
        const updatetodos = todos.filter(todo => todo.id !== id);
        setTodos(updatetodos);
    }
    return(
        <div className="main-div">
            <div className="todo-div">
                <h1 className="heading1">Simple Todos</h1>
                {todos.map((todo)=>
                <div key={todo.id} className="todoContainer">
                    <div className="todoTitle">
                        <p className="todoName">{todo.title}</p>
                    </div>  
                    <div className="todoButton">
                        <button className="deleteTodo" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </div>                  
                </div>
                )}
            </div>
        </div>
    )
}


export default DeleteTodo;