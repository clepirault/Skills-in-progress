import { useState } from 'react';
import MainLayout from '../layout/MainLayout';
import './Feature.css';
import Table from '../commons/Table';

const table = {
  title: 'To-do list',
  head: 'Notions',
};

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
      <Table tableTitle={table.title} tableHead={table.head}>
        <>State</>
        <>Interception des évènements</>
        <>Un seul composant</>
      </Table>
      <div className='todolist'>
        <ul>
          {task.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit} className="todolistForm">
          <input type='text' value={newTask} onChange={handleChange} placeholder="Add a task"/>
          <button type='submit'>Add</button>
        </form>
      </div>
    </MainLayout>
  );
}
export default ToDoList;
