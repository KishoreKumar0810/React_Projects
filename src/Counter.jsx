// updater function is a function passed as an argument to setState() usually ex. setYear(arrow function)
// Allow for safe updates based on the previous state
// Used with multiple state updates and asynchronous function
// Good practice to use updater functionsimport React,{ useState } from "react";

import React,{useState} from "react";
function Counter(){
    const [count,setCount] = useState(0);
    const increment = () =>{
    // Takes the pending state to calculate next state. React puts your updater function in a queue
    // During the render it'll call them in a same order
    setCount(c => c+1)
    setCount(c => c+1)
    setCount(c => c+1)
    }
    const reset = () =>{
        setCount(0)
    }
    const decrement = () =>{
        setCount(count-1)
    }
    return(
        <div className="count-container">
            <p className="count-display">{count}</p>
            <button className="count-button" onClick={decrement}>Decrement</button>
            <button className="count-button" onClick={reset}>Reset</button>
            <button className="count-button" onClick={increment}>Increment</button>
        </div>
    );
}
export default Counter;