import InputSection from "./InputSection";
import Task from "./Task";
import { useState } from "react";

function TaskSection(){

    const [taskTitles, setTaskTitles] = useState([]);

    function addTask(title){
        setTaskTitles([...taskTitles, title]);
    }

    function handleDeleteTask(titleToDelete){
        const updatedTasks = taskTitles.filter((title)=> title !== titleToDelete);
        setTaskTitles(updatedTasks);
    }

    return(
        <>
            <div className="w-10/12 h-2/3 flex flex-col items-center">
                <InputSection onAddTask={addTask}/>
                {
                    taskTitles.map((title, index) => (
                    <Task key={index} title={title} onDelete={handleDeleteTask}/>
                ))
                }

            </div>
        </>
    )
}

export default TaskSection;