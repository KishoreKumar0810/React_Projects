import React,{useState, useEffect} from "react";
function DigitalClock(){
   const[time, setTime] = useState(new Date());
   useEffect(() => {
      const intervalId = setInterval(() => {
         setTime(new Date());
      },1000);
      return() => {
         clearInterval(intervalId);
      }
   }, [])
   function formatTime(){
      let hours = time.getHours();
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();
      const meridiem = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${padZero(meridiem)}`;
   }
   function padZero(number){
      return (number < 10 ? "0" : "") + number;
   }
   function formatTime24Hr(){
   let hours = time.getHours();
   const minutes = time.getMinutes();
   const seconds = time.getSeconds();
   return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
   }
return(<div className="clock-container">
    <div className="clock">
       <span>{formatTime()}</span> <br />
       <span>{formatTime24Hr()}</span>
    </div>         
      </div>);
}
export default DigitalClock;