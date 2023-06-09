import { useState } from "react";
import './App.css'

export const App=()=>{
const [tasks,setTask]=useState([
	{id:1010,name:"ab",passed:false},
	{id:1011,name:"a2",passed:true},
	{id:11010,name:"b",passed:false}
])
const[show,setShow]=useState(true)
function handleDel(id){
	setTask(tasks.filter(task=>id!==task.id))
}
	return (
	<div className="App">
	<h1>Task Lists</h1>
	<ul>
		<button onClick={()=> setShow(!show)}> toggle</button>
		{show && tasks.map((task) =>(
			<li key={task.id}>

				<span>{task.name}</span>- <span>{task.id}</span>
				<button className="del" onClick={()=>handleDel(task.id)}>delete </button> 
			</li>
		))}
		
		</ul>	
	</div>
	);
}