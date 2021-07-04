import { useState } from 'react';
import MainLayout from '../layout/MainLayout';
import './Feature.css';
import Table from '../commons/Table';
import { TextContent } from '../commons/TextContent';
import Code from '../commons/Code';

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
      <Table tableTitle={TextContent.title2} tableHead={TextContent.head}>
        <>UseState</>
        <>Handling events</>
        <>Map</>
      </Table>
      <div className='todolist'>
        <ul>
          {task.map((element, index) => (
            <li key={index} className="newTask">{element}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit} className="todolistForm">
          <input type='text' value={newTask} onChange={handleChange} placeholder="Add a task" className="todolistInput"/>
          <button type='submit'>Add</button>
        </form>
      </div>
      <Code link={TextContent.link2}/>
    </MainLayout>
  );
}
export default ToDoList;
