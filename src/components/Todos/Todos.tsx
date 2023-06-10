import React, {useEffect, useState} from 'react'
import Input from "../Input/Input";
import {ITodo} from "../../interfaces";
import TodoList from "../TodosList/TodosList";
import Button from "../Button/Button";


export type FilterValuesType = 'all' | 'completed' | 'active'

const Todos: React.FC = () => {

  const [todos, setTodos] = useState<ITodo[]>([])
  const [filter, setFilter] = useState<FilterValuesType>('all')

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]')
    setTodos(todos)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (text: string) => {
    const newTodo: ITodo = {
      id: Date.now(),
      text,
      completed: false
    }
    setTodos(prev => [newTodo, ...prev]);
  }

  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const toggleCompleteTodo = (id: number) => {
    setTodos(prev => prev.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  const changeFilter = (value: FilterValuesType) => {
    setFilter(value)
  }

  let tasksForTodoList = todos
  if (filter === 'completed') {
    tasksForTodoList = todos.filter(t => t.completed === true)
  }
  if (filter === 'active') {
    tasksForTodoList = todos.filter(t => t.completed === false)
  }


  return (
    <>
      <Input placeholder={'Add todo'} iconName={'create'} onKeyPress={addTodo}/>
      {todos.length ?
        <div className='filters'>
          <Button onClick={() => {
            changeFilter('all')
          }} text={'All'} isActive={filter === 'all'}/>
          <Button onClick={() => {
            changeFilter('active')
          }} text={'Active'} isActive={filter === 'active'}/>
          <Button onClick={() => {
            changeFilter('completed')
          }} text={'Completed'} isActive={filter === 'completed'}/>
        </div> : ''}
      <TodoList todos={tasksForTodoList} deleteHandler={deleteTodo} completeHandler={toggleCompleteTodo}/>
    </>
  )
}

export default Todos;