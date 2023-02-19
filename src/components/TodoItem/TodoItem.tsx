import React from 'react'
import {ITodo} from "../../interfaces";

type TodoProps = {
    todo: ITodo,
    deleteHandler: (id: number) => void,
    completeHandler: (id: number) => void
}

const TodoItem: React.FC<TodoProps> = ({todo, deleteHandler, completeHandler}) => (
    <li className='todo' onClick={completeHandler.bind(null, todo.id)}>
        <input type='checkbox' checked={todo.completed}/>
        <span className={todo.completed ? 'completed' : undefined}>{todo.text}</span>
        <i onClick={deleteHandler.bind(null, todo.id)} className="material-icons prefix delete">delete</i>
    </li>
)

export default TodoItem