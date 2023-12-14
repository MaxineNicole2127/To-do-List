import Header from "./Header";
import Input_Box from "./Input_Box";
import Tasks from "./Tasks";
import './App.css'
import {useState} from 'react';

function App() {
  const [userInput, setUserInput] = useState("");
  const changeVal = (event) => {
      let newTaskInput = event.target.value;
      setUserInput(newTaskInput);
      console.log(newTaskInput);
  }

  const [tasks, setTasks] = useState([
    { "task": "Feed Cleo", "done": false},
    { "task": "Take a bath", "done": false},
  ]);

  const addTask = () => {
    if(userInput === "")
      alert("You cannot input an empty task!");
    else {
      const newTask = {
        "task" : userInput,
        "done" : false
      }
      const newTasks = [...tasks, newTask];
      setTasks(newTasks);
      setUserInput("");
    }
  }

  const toggleTask = (event) => {
      const taskToToggle = event.target.innerText;
      // create a new array
      const updatedTasks = tasks.map (task => task.task === taskToToggle ? {...task, done : !task.done} : task );
      // update value of the previous array 
      setTasks(updatedTasks);
  }

  return (
    <div className="container" id="entire-page">
      <Header />
      <Input_Box userInput = {userInput} changeVal = {changeVal} addTask = {addTask}/>
      <Tasks tasks={tasks} toggleTask={toggleTask}/>
    </div>
  )
}

export default App;