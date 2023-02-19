import React from 'react'
import {ITodo} from "../../interfaces";
import TodoItem from "../TodoItem/TodoItem";

type TodoListProps = {
    todos: ITodo[],
    deleteHandler: (id: number) => void,
    completeHandler: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({todos, deleteHandler, completeHandler}) => {
    const elements = todos.map(todo => {

        return <TodoItem key={todo.id} todo={todo} deleteHandler={deleteHandler} completeHandler={completeHandler}/>
    })

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default TodoList