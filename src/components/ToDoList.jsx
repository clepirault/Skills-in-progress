import { useState } from 'react';
import './Global.css';

function ToDoList() {
  const [newTask, setNewTask] = useState('');
  const [task, setTask] = useState([]);
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setNewTask('');
    setTask([...task, newTask]);
  };
  return (
    <div className='todolist'>
      <p>
        Mettre en pratique le State et l'interception des évènements avec un
        exercice simple :
      </p>
      <h1>To-do list</h1>
      <ul>
        {task.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type='text' value={newTask} onChange={handleChange} />
        <br />
        <button type='submit'>Ajouter une tâche</button>
      </form>
    </div>
  );
}
export default ToDoList;
