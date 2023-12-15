import Header from "./Header";
import Input_Box from "./Input_Box";
import Tasks from "./Tasks";
import './App.css'
import {useState, useEffect} from 'react';

function App() {
  const [userInput, setUserInput] = useState("");
  const changeVal = (event) => {
      let newTaskInput = event.target.value;
      setUserInput(newTaskInput);
      console.log(newTaskInput);
  }

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [
    { id: 0, "desc": "Feed Cleo", "done": false},
    { id: 1, "desc": "Study ReactJS", "done": false},
  ]);

  const addTask = () => {
    if(userInput === "")
      alert("You cannot input an empty task!");
    else {
      const newTask = {
        id : tasks.length,
        "desc" : userInput,
        "done" : false
      }
      const newTasks = [...tasks, newTask];
      setTasks(newTasks);
      setUserInput("");
    }
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  })

  const toggleTask = (event) => {
      const taskToToggle = event.target.innerText;
      // create a new array
      const updatedTasks = tasks.map (task => task.desc === taskToToggle ? {...task, done : !task.done} : task );
      // update value of the previous array 
      setTasks(updatedTasks);
  }

  const handleDeleteMark = (event) => {
    const closeElement = event.target;
    const itemElement = (closeElement.parentNode).querySelector("li");
    console.log(itemElement);

    const newTaskList = tasks.filter(task => { return task.id !== parseInt(itemElement.id) ;})
    setTasks(newTaskList);
}

  return (
    <div className="container" id="entire-page">
      <Header />
      <Input_Box userInput = {userInput} changeVal = {changeVal} addTask = {addTask}/>
      <Tasks tasks={tasks} toggleTask={toggleTask} handleDeleteMark={handleDeleteMark}/>
    </div>
  )
}

export default App;