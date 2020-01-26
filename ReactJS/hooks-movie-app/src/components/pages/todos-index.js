import React, { useState } from 'react'

import '../../styles/todo.css'

import TodoItem from '../molecules/todo-item'

const ToDo = () => {
  const [list, setList] = useState([
    { id: 1, text: 'clean the house' },
    { id: 2, text: 'buy milk' },
  ])

  const [toDo, setToDo] = useState('')

  const createNewToDoItem = () => {
    if (!toDo) {
      console.log('Please enter a todo!')
      return
    }

    const generateId = () => {
      if (list && list.length > 1) {
        return Math.max(...list.map((t) => t.id)) + 1
      } else {
        return 1
      }
    }

    const newId = generateId()
    const newToDo = { id: newId, text: toDo }
    setList([...list, newToDo])
    setToDo('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      createNewToDoItem()
    }
  }

  const handleInput = (e) => {
    setToDo(e.target.value)
  }

  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id))
  }

  return (
    <div className="ToDo">
      <h1 className="ToDo-Header">React To Do</h1>

      <div className="ToDo-Container">
        <div className="ToDo-Content">
          {list.map((item) => {
            return <TodoItem key={item.id} item={item} deleteItem={deleteItem} />
          })}
        </div>

        <div className="ToDoInput">
          <input type="text" value={toDo} onChange={handleInput} onKeyPress={handleKeyPress} />
          <button className="ToDo-Add" onClick={createNewToDoItem}>
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default ToDo
