import { useState } from "react";
import PropTypes from 'prop-types';

function InputSection({ onAddTask }){
    const [inputValue, setInputValue] = useState("");

    function handleInputValue(event){
        setInputValue(event.target.value)
    }

    function handleAddTask(){
        if(inputValue){
            onAddTask(inputValue);
            setInputValue("");
        }
    }


    return(
        <>
            <div className="w-full h-16 flex flex-row justify-between content-center">

                <input 
                    name="task"
                    placeholder="type a task"
                    value={ inputValue }
                    onChange={ handleInputValue }

                    className="bg-transparent border-b-2 border-yellow-300 w-1/3 text-2xl text-yellow-300 placeholder:text-yellow-300 outline-none "

                />

                <div className="flex items-center cursor-pointer hover:bg-black transition duration-300 ease-in-out rounded-lg p-2" onClick={handleAddTask}>
                    <h2 className="mr-3 text-2xl text-yellow-300">
                        add a new task
                    </h2>
                    <span className="material-symbols-outlined text-4xl text-yellow-300">
                    add_circle
                    </span>
                </div>

            </div>
        </>
    )
}

InputSection.propTypes = {
    onAddTask: PropTypes.func.isRequired
}

export default InputSection;