import React, { useState } from "react";

const TodoApp = () => {
    const [tasks, setTasks] = useState([]);

    const [newTask, setNewTask] = useState(""); //useState Hook

    const handleChangeText = (e) => {
        const data = e.target.value;
        // console.log(data, "data")
        setNewTask(data)
    }

    const handleAddTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask])
            setNewTask("");
        }
        else {
            alert("Please fill the field")
        }
    };

    console.log(tasks, "All tasks");
  
    const handleDeleteTask = (x) => {
        console.log(x, "user item to be delete");
        const updatedTasks = tasks.filter((_, i) => i !== x);
        setTasks(updatedTasks);
    }

    return (
        <div style={{
            padding: "20px", maxWidth: "400px",
            margin: "0 auto"
        }}>
            <h1>To-Do App</h1>

            <div>
                <input
                    type="text"
                    placeholder="Add a task..."
                    value={newTask}
                    onChange={handleChangeText}
                />
                <button onClick={handleAddTask}>
                    Add
                </button>
            </div>


            {
                tasks.map((data, index) => (
                    <div style={{ display: 'flex', height: '20px', margin: '10px', alignItems: 'center' }}>
                        <p>{data} </p>
                        <button onClick={(e) => handleDeleteTask(index)}>Delete</button>
                    </div>
                ))
            }



        </div>
    );
};

export default TodoApp;
