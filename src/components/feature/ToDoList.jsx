import { useState } from 'react';
import MainLayout from '../layout/MainLayout';

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
    <MainLayout>
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
    </MainLayout>
  );
}
export default ToDoList;
