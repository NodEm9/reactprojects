// Desc: Reducer for tasks
export default function taskReducer(tasks, action) { 
  switch (action.type) {
    case 'add_task':{
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          day: action.day,
          isDone: false
        }
      ]
    }
    case 'change_task': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task
        } else {
          return t
        }
      })
    }
    case 'change_day': {
      return tasks.map(d => {
        if (d.id === action.day.id) {
          return action.day
        } else {
          return d
        }
      })
    }
    case 'set_tasks': {
      return action.tasks
    }
    case 'delete_task': {
      return tasks.filter(t => t.id !== action.id)
    }
    default:{
      throw new Error('Invalid action', + action.type)
    }
  }
}