// useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
// This component re-renders
// This component mounts
// The state of a value

// useEffect(function, [dependencies])
// 1. useEffect(() => {})
// 2. useEffect(() => {}, [])
// Runs after every re-render
// Runs only on mount
// 3. useEffect(() => {), [value]) // Runs on mount + when value changes
// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts
import React,{useState, useEffect} from "react";
/* function UseEffectHook(){
   const[count, setCount] = useState(0);
   const[color, setColor] = useState("green");

   useEffect(() =>{
    document.title = `Count: ${count} ${color}`;
   }, [count] [color]);

   function addCount(){
    setCount(c => c + 1);
   }

   function subCount(){
    setCount(c => c - 1);
   }

   function changeColor(){
    setColor(c => c === "green" ? "red" : "green");
   } 
   return(<>
            <p style={{color : color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subCount}>Subtract</button> <br />
            <button onClick={changeColor}>Change Color</button>
          </>)
} */
function UseEffectHook(){
    const[width, setWidth] = useState(window.innerWidth);
    const[height, setHeight] = useState(window.innerHeight);
    useEffect(() =>{
        window.addEventListener("resize",handleResize);
        console.log("EVENT LISTENER ADDED");
    },[width, height]);

    useEffect(() =>{
        document.title = `Size: ${width} x ${height}`;
    })
    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return(<>
           <p>Window Width: {width}px</p>
           <p>Window Height: {height}px</p>
    </>)
}
export default UseEffectHook;