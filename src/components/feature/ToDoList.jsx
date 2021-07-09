import { useState } from 'react';
import './Feature.css';
import Table from '../commons/Table';
import { TextContent } from '../../TextContent';
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
    <div>
      <h2>{TextContent.title2}</h2>
      <Table tableHead={TextContent.head}>
        <>{TextContent.notion5}</>
        <>{TextContent.notion2}</>
        <>{TextContent.notion3}</>
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
    </div>
  );
}
export default ToDoList;
