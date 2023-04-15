import { useState } from "react";
import './App.css'

export const App=()=>{
const [tasks,setTask]=useState([
	{id:1010,name:"ab",passed:false},
	{id:1011,name:"a2",passed:true},
	{id:11010,name:"b",passed:false}
])
	return (
	<div className="App">
	<h1>Task Lists</h1>
	<ul>
		{tasks.map((task,index) =>(
			<li key={index}>

				<span>{task.name}</span>- <span>{task.id}</span>
				<button>delete </button>
			</li>
		))}
		</ul>	
	</div>
	);
}