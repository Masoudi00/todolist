

import { useState } from "react";
//TASK STATE
const TodoList = () => {
    const[tasks, setTasks] = useState([]);
    const[taskText, setTaskText] = useState('');
    


//ADD TASK

const AddTask = () => {
    if(taskText) {
        setTasks([...tasks, taskText]);
        }
        setTaskText('');
} 
//remove Task 
const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  return(
    <div>
    <h2>To-Do List</h2>
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task} <button onClick={() => removeTask(index)}>Remove</button>
        </li>
      ))}
    </ul>
    <div>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={AddTask}>Add Task</button>
    </div>
  </div>

  );
};

export default TodoList;


