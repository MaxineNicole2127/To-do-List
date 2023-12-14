const InputBox = ({userInput, changeVal, addTask}) => {
    function handleKeyPress(event) {
        if(event.key === "Enter") {
            event.preventDefault();
            document.getElementById("submit-task-button").click();
        }
    }

    return (
        <div className="input-form">
            <input type="text" id="input-box" 
            placeholder="Enter Task" onChange={changeVal} 
            value={userInput} onKeyDown={(e) => handleKeyPress(e)}/>
            <button id="submit-task-button" onClick={addTask}>ADD</button>
        </div>
    )
}

export default InputBox;