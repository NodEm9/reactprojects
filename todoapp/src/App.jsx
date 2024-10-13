import './App.css'
import { useReducer, useEffect } from 'react'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
import taskReducer from '../reducer/taskReducer'

let id = 0;
let initialTasks = [];
function TaskApp() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks)

  // Add a new task
  function handleAddTask(text, day) {
 dispatch({
      type: 'add_task',
      id,
      text,
      day,
      isDone: false
 })
    let task = {
      id: id++,
      text: text,
      day: day,
      isDone: false
    }
    let allTasks = [...tasks, task]
    /**
     * This line of code is used to update the local storage with the new tasks array
     */
    // Save the new task to localStorage
    localStorage.setItem('tasks', JSON.stringify(allTasks))
  }

  // Change/Edit a task
  function handleChangeTask(task) {
    dispatch({
      type: 'change_task',
      task: task
    })
  }

  function handleChangeDay(day) {
    dispatch({
      type: 'change_day',
      day: day
    })
  }

  // Delete a task
  function handleDeleteTask(id) {
    dispatch({
      type: 'delete_task',
      id: id
    })
    let allTasks = tasks.filter(task => task.id !== id)
      /**
       * This line of code is used to update the local storage with the new tasks array
       */
    // Save the remaining tasks to localStorage
        // Filter out the task with the given id.
    //Then, update the local storage with the new tasks array
      localStorage.setItem('tasks', JSON.stringify(allTasks)) 
  }

  useEffect(() => {
    const getTasks = () => {
      const tasks = JSON.parse(localStorage.getItem('tasks'))
      if (tasks) {
        dispatch({
          type: 'set_tasks',
          tasks: tasks
        })
      }
    }
    return () => getTasks()
  }, [])

  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTask
        onAdd={handleAddTask}
      />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onChangeDay={handleChangeDay}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  )
}

export default TaskApp

