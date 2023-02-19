import React, {useEffect, useState} from 'react'
import Input from "../Input/Input";
import {ITodo} from "../../interfaces";
import TodoList from "../TodosList/TodosList";

const Todos: React.FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos') || '[]')
        setTodos(todos)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addTodo = (text: string) => {
        const newTodo:ITodo = {
            id: Date.now(),
            text,
            completed: false
        }
        setTodos(prev => [newTodo, ...prev]);
    }

    const deleteTodo = (id:number) => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    const toggleCompleteTodo = (id:number) => {
        setTodos(prev => prev.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    return (
        <>
            <Input placeholder={'Add todo'} iconName={'create'} onKeyPress={addTodo}/>
            <TodoList todos={todos} deleteHandler={deleteTodo} completeHandler={toggleCompleteTodo}/>
        </>
    )
}

export default Todos;