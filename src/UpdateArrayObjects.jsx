import React,{useState} from "react";
function UpdateArrayObjects(){
    const[cars,setCars] = useState([]);
    const[year,setYear] = useState(new Date().getFullYear());
    const[brand,setBrand] = useState("");
    const[model,setModel] = useState("");
    function AddCar(event){
     const newCar = { newYear:year,
                      newBrand:brand,
                      newModel:model }
                      setCars(c => [...c,newCar]);
                      setYear(new Date().getFullYear());
                      setBrand("");
                      setModel("");
    }
    function RemoveCar(index){
    setCars(c => c.filter((_, i) => i !== index));
    }
    function handleYearChange(event){
    setYear(event.target.value)
    }
    function handleBrandChange(event){
        setBrand(event.target.value)
    }
    function handleModelChange(event){
        setModel(event.target.value)
    }
    return(<div>
                <h1>List of Cars</h1>
                <ul>{cars.map((car,index) => 
                <li key = {index} onClick={() => RemoveCar(index)}>
                      {car.newYear} {car.newBrand} {car.newModel}
                </li>)
                }</ul>
                <input type="number" value={year} onChange={handleYearChange}/> <br />
                <input type="text" value={brand} onChange={handleBrandChange} placeholder="Enter car brand"/> <br />
                <input type="text" value={model} onChange={handleModelChange} placeholder="Enter car model"/> <br />
                <button onClick={AddCar}>Add Car</button>
                <p className="p_container">*Note: click on the list item to remove item from the list</p>
           </div>)
}
export default UpdateArrayObjects;