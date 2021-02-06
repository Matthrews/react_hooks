import React, { useReducer, useState } from 'react'
import Todo from './Todo'

export const ACTIONS = {
  ADD_TODO: 'add',
  TOGGLE_TODO: 'toggle',
  DELETE_TODO: 'delete'
}

function newTodo(name) {
  return { id: Date.now(), name, completed: false }
}

const todoReducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, { id: Date.now(), name: action.payload.name, completed: false }]
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
    default:
      return todos
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, [])
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } })
    setName('')
  }

  console.log('todos', todos);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
      </form>
      {
        todos.map(todo => (
          <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        ))
      }
    </>
  );
}

export default App;
