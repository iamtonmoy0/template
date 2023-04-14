import { useState } from "react";

export const App=()=>{
	const [count,setCount]=useState(0)
	
	function handle(){
	setCount(count+1)
	}
	return (
	<div className="App">
		<div className="box">
			<p>{count}</p>
			<button className="a" onClick={handle}>Add</button>

		</div>
	</div>
	);
}