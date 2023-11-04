import InputSection from "./InputSection";
import Task from "./Task";
import EditTask from "./editTask";

import { useState } from "react";



function TaskSection(){

    const [taskTitles, setTaskTitles] = useState([]);
    const [actualTitle, setActualTitle] = useState("");
    const [menuAtivo, setMenuAtivo] = useState(false);

    function addTask(title){
        setTaskTitles([...taskTitles, title]);
    }

    function handleDeleteTask(titleToDelete){
        const updatedTasks = taskTitles.filter((title)=> title !== titleToDelete);
        setTaskTitles(updatedTasks);
    }

    function handleEditClick(title){
        
        //adicionar classe css para ele aparecer na tela
        setActualTitle(title)
        setMenuAtivo(true)
    }

    function handleEditTask(newTitle){
        //pegar o titulo retornado e mudar ele na lista
        //fechar o menu de edit
        console.log('new title: ' + newTitle)
        const novoArray = taskTitles.map(elemento => {
            if (elemento === actualTitle) {
              return newTitle; // Substitui o valor pelo novo valor
            } else {
              return elemento; // Mantém o valor original
            }
          });

          setTaskTitles(novoArray)
          setMenuAtivo(false)

    }

    return(
        <>
            <div className="w-10/12 h-2/3 flex flex-col items-center">
                <InputSection onAddTask={addTask}/>
                {
                    taskTitles.map((title, index) => (
                    <Task key={index} title={title} onDelete={handleDeleteTask} onEdit={handleEditClick} />
                ))
                }
                {menuAtivo ? <EditTask onEdit={handleEditTask}/> : ''}
                
            </div>
        </>
    )
}

export default TaskSection;