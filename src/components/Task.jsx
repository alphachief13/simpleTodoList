import PropTypes from 'prop-types';


function Task({title, onDelete, onEdit}){
    function handleDeleteClick(){
        onDelete(title)
    }

    function handleEditClick(){
        onEdit(title)
    }

    return (
        <>
            <div className="m-5 h-24 w-10/12 flex justify-between items-center rounded-xl border-4 p-5 border-yellow-300">
            
            <span className="material-symbols-outlined bg-yellow-300 text-4xl font-bold m-2 rounded-md cursor-pointer hover:bg-white transition duration-300 ease-in-out" onClick={handleDeleteClick}>
                done
            </span>
            
            <h2 className="text-3xl text-yellow-300 border-b-2 border-yellow-300 ">
                {title}
            </h2>

            <div>
            <span className="material-symbols-outlined bg-yellow-300 text-4xl font-bold m-2 rounded-md cursor-pointer hover:bg-white transition duration-300 ease-in-out" onClick={handleEditClick}>
                edit_note
            </span>
            <span className="material-symbols-outlined bg-yellow-300 text-4xl font-bold mr-2 rounded-md cursor-pointer hover:bg-white transition duration-300 ease-in-out" onClick={handleDeleteClick}>
                delete_forever
            </span>
            </div>

            </div>
        </>
    )
}

Task.propTypes = {
    title: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};


export default Task;