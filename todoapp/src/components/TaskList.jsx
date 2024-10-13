import React, { useState } from 'react'
import PropType from 'prop-types'

export default function TaskList({
  tasks,
  onChangeTask,
  onChangeDay,
  onDeleteTask
}) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task
            task={task}
            onChangeTask={onChangeTask}
            onChangeDay={onChangeDay}
            onDeleteTask={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  )
}

// Create a new component called Task
function Task({ task, onChangeTask, onChangeDay, onDeleteTask }) {
  const [isEditing, setIsEditing] = useState(false)
  let taskContent;
  // If the task is being edited, display an input field to edit the task
  // Otherwise, display the task text
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={
            (e) => {
              onChangeTask({
                ...task,
                text: e.target.value
              })
            }
          }
        />
        <input
          value={task.day}
          onChange={
            (e) => {
              onChangeDay({
                ...task,
                day: e.target.value
              })
            }
          }
        />
        <button className='save-btn' onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        <span className='task-wrapper'>
          {task.text} - {task.day}
          <button className='edit-btn' onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </span>
      </>
    );
  }
  return (
    <label  className='task-label'>
      <input
        type='checkbox'
        checked={task.isDone}
        onChange={
          (e) => {
            onChangeTask({
              ...task,
              isDone: e.target.checked
            })
          }
        }
        className='checkbox'
      />
      {taskContent}
      <button className='delete-btn' onClick={
        () => task.isDone ? onDeleteTask(task.id) : alert('You must complete the task first')
      }
      >Delete</button>
    </label>
  )
}

Task.propTypes = {
  task: PropType.object.isRequired,
  onChangeTask: PropType.func.isRequired,
  onChangeDay: PropType.func.isRequired,
  onDeleteTask: PropType.func.isRequired
}