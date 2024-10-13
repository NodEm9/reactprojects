import React, { useState } from 'react'
import PropType from 'prop-types'

function AddTask({ onAdd }) {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text) {
      alert('Please add a task')
      return
    }
    onAdd(text, day)
    setText('')
    setDay('')
  }

  return (
    <form onSubmit={handleSubmit} >
      <input
        placeholder='Add Task'
        value={text} 
        onChange={(e) => setText(e.target.value)}
      />
      <input
        placeholder='Add Day'
        value={day}
        onChange={(e) => setDay(e.target.value)}
      />
      <button type='submit'  className='add-button' >Add task</button>
    </form>
  )
}

export default AddTask;

AddTask.propTypes = {
  onAdd: PropType.func.isRequired
}