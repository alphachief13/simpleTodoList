import PropTypes from 'prop-types';


import { useState } from "react";

function EditTask({onEdit}){

    const [editInput, setEditInput] = useState("");

    function handleEditInput(event){
        setEditInput(event.target.value)
    }

    function handleEditTask(){
        if(editInput){
            onEdit(editInput);
            setEditInput("");
        }
    }

    return(
        <>
        <div className="bg-gray-800 h-96 w-1/3 fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-90">
            <div>
                <h1 className="text-6xl bg-yellow-300 text-gray-900 text-center">
                Edit Task
                </h1>
            </div>
            <div className="flex justify-center items-center mt-32 gap-9">
            <input 
                    name="task"
                    placeholder="type a task"
                    value={ editInput }
                    onChange={ handleEditInput }

                    className="bg-transparent border-b-2 border-yellow-300 w-2/3 text-2xl text-yellow-300 placeholder:text-yellow-300 outline-none text-center"

                />
                 <div className="flex items-center cursor-pointer hover:bg-black transition duration-300 ease-in-out rounded-lg p-2 pl-5 pr-5" onClick={handleEditTask}>
                    <h2 className="mr-3 text-2xl text-yellow-300">
                        Edit
                    </h2>
                    <span className="material-symbols-outlined bg-yellow-300 text-4xl font-bold m-2 rounded-md cursor-pointer hover:bg-white transition duration-300 ease-in-out">
                edit_note
                </span>
                </div>
            </div>
        </div>
        </>
    )

}

EditTask.propTypes = {
    onEdit: PropTypes.func.isRequired
};

export default EditTask;