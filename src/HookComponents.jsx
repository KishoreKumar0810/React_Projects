// React hook = Special function that allows functional components to use React features without
// writing class components (React v16.8) (useState, useEffect, useContext, useReducer, useCallback, and more...)
// useState() = A React hook that allows the creation of a stateful variable AND a setter function to update
// its value in the Virtual DOM. [name, setName]
import React,{useState} from "react";
function HookComponents(){
const[name,setName] = useState("Guest");
const updateName=() => {
    setName("SpeedBob");
}
return(<div>
    <p>Name : {name}</p>
    <button onClick={updateName}>Set Name</button>
</div>)
}
export default HookComponents;