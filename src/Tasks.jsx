const Tasks = ({tasks, toggleTask}) => {
    const handleDeleteMark = (event) => {
        const closeElement = event.target;
        const itemElement = (closeElement.parentNode).querySelector("li");
        console.log(itemElement);
    }

    return (
        <ul className="tasks">
            {
                tasks.map(task => (
                    <div className="task-line">
                        <li key={task.task} 
                            value={task} onClick={toggleTask} 
                            className={(task.done === true ? "done" : "notDone")}>{task.task}
                            </li>
                            <span id="close-mark" onClick={handleDeleteMark}>&#10006; </span>
                    </div>
                ))
            }
        </ul>
    )
}

export default Tasks;