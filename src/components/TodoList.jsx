import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState('');
    const [doneTasks, setDoneTasks] = useState([]);

    const AddTask = () => {
        if (taskText) {
            setTasks([...tasks, taskText]);
            setTaskText('');
        }
    }

    const markTaskAsDone = (index) => {
        const taskToMarkAsDone = tasks[index];
        setDoneTasks([...doneTasks, taskToMarkAsDone]);
        removeTask(index);
    }

    const markTaskAsNotDone = (index) => {
        const taskToMarkAsNotDone = doneTasks[index];
        setTasks([...tasks, taskToMarkAsNotDone]);
        removeDoneTask(index);
    }

    const removeTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index); 
        setTasks(updatedTasks);
    };

    const removeDoneTask = (index) => {
        const updatedDoneTasks = doneTasks.filter((_, i) => i !== index);
        setDoneTasks(updatedDoneTasks);
    };

    return (
        <>
            <div>
                <h1>------Add Tasks--------</h1>
                <div>
                    <input
                        className="form-control-3"
                        id="exampleInputEmail1"
                        type="text"
                        value={taskText}
                        onChange={(e) => setTaskText(e.target.value)}
                    />
                    <br /><br />
                    <button className="btn btn-primary" onClick={AddTask}>Add Task</button>
                </div>

                <h1>--------Tasks-----------</h1>
                <ul>
                    {tasks.map((task, index) => (
                      <>
                        <li key={index}>
                            {task} <button className="btn btn-danger btn-sm" onClick={() => removeTask(index)}>Remove</button>
                            <button className="btn btn-success  btn-sm m-1" onClick={() => markTaskAsDone(index)}>Done</button>
                        </li>
                        <br />
                        </>
                    ))}
                </ul>

                <h1>--------Done Tasks-----------</h1>
                <ul>
                    {doneTasks.map((task, index) => (
                        <li key={index}>
                            {task} <button className="btn btn-warning  btn-sm" onClick={() => markTaskAsNotDone(index)}>Not Done</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default TodoList;
