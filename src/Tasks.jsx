const Tasks = ({tasks, toggleTask, handleDeleteMark}) => {
    return (
        <ul className="tasks">
            {
                tasks.map(task => (
                    <div className="task-line">
                        <li key={task.id} 
                            id={task.id}
                            value={task} onClick={toggleTask} 
                            className={(task.done === true ? "done" : "notDone")}>{task.desc}
                            </li>
                            <span id="close-mark" onClick={handleDeleteMark}>&#10006; </span>
                    </div>
                ))
            }
        </ul>
    )
}

export default Tasks;