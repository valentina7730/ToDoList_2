import { useState } from 'react'
import './App.css'
import StatusTasks from './Components/StatusTasks'

function App() {
  const [Tasks, setTask] = useState([
    { id: 1, name: 'learn React', state: "To do" },
    { id: 2, name: 'learn JavaScript', state: "In Dev" },
    { id: 3, name: 'learn CSS', state: "In Dev" },
    { id: 4, name: 'learn HTML', state: "Done" }
  ])

  const [newTask, setNewTask] = useState('')

  const AddTask = () => {
    if(newTask.trim() === '') {
      alert('Task cannot be empty');
      return;
    }
    setTask([
      ...Tasks,
      {
        id: Tasks.length + 1,
        name: newTask,
        state: "To do",
      }
    ])
    setNewTask('')
  }

  // Eliminar tarea
  const handleDelete = (id) => {
    setTask(Tasks.filter(task => task.id !== id));
  }

  // Cambiar estado con checkbox
  const handleCheck = (id, checked) => {
    setTask(Tasks.map(task =>
      task.id === id
        ? { ...task, state: checked ? "Done" : "To do" }
        : task
    ));
  }

  // Drag and Drop
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('id', id);
  }
  const handleDragOver = (e) => {
    e.preventDefault();
  }
  const handleDrop = (e, newState) => {
    const id = e.dataTransfer.getData('id');
    setTask(Tasks.map(task => task.id === Number(id) ? { ...task, state: newState } : task))
  }

  return (
    <>
      <div>
        <h2>New Task:</h2>
        <input 
          type="text" 
          onChange={(e) => setNewTask(e.target.value)} 
          value={newTask}
          placeholder='Add new task'
        />
        <button onClick={AddTask}>Add Task</button>
      </div>
      <div>
        <h2>Task List:</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
          }}
        >
          <StatusTasks 
            Tasks={Tasks} 
            Status="To do" 
            handleDragOver={handleDragOver}
            handleDragStart={handleDragStart}
            handleDrop={handleDrop}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
          />
          <StatusTasks 
            Tasks={Tasks} 
            Status="In Dev" 
            handleDragOver={handleDragOver}
            handleDragStart={handleDragStart}
            handleDrop={handleDrop}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
          />
          <StatusTasks 
            Tasks={Tasks} 
            Status="Done" 
            handleDragOver={handleDragOver}
            handleDragStart={handleDragStart}
            handleDrop={handleDrop}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
          />
        </div>
      </div>
    </>
  )
}

export default App