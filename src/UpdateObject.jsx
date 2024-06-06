import React,{useState} from "react";
function UpdateObject(){
    const[car,setCar] = useState({year: 2024, brand: "", model: ""})
    function handleYearChange(event){
    setCar(c => ({...c, year: event.target.value}))
    }
    function handleBrandChange(event){
        setCar(c => ({...c, brand: event.target.value}))
    }
    function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}))
    }

    return(<div>
                 <h1>Your Favourite Car is {car.year} {car.brand} {car.model}</h1>
                 <input type="number" value={car.year} onChange={handleYearChange}></input> <br />
                 <input type="text" value={car.brand} onChange={handleBrandChange}
                 placeholder="Enter car brand"></input> <br />
                 <input type="text" value={car.model} onChange={handleModelChange}
                 placeholder="Enter car model"></input>

          </div>)
}
export default UpdateObject;