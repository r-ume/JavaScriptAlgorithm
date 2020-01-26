import React from 'react'

import '../../styles/todo-item.css'

const ToDoItem = (props) => {
  const { item, deleteItem } = props

  return (
    <div className="ToDoItem">
      <p className="ToDoItem-Text">{item.text}</p>
      <button className="ToDoItem-Delete" onClick={() => deleteItem(item.id)}>
        -
      </button>
    </div>
  )
}

export default ToDoItem
