// onChange = event handler used primarily eith form elements
// examples = <input>, <textarea>, <select>, <radio>
// Triggers a function every time the value of the input changes
import React,{useState} from "react";
function MyComponents(){
const [name, setName]=useState("Guest")
const [age,setAge]=useState()
const [country, setCountry]=useState();
const [gender, setGender]=useState("");

function handleNameChange(event){
    setName(event.target.value)
}

function handleAgeChange(event){
    setAge(event.target.value)
}

function handleCountryChange(event){
    setCountry(event.target.value)
}
function hanldeGenderChange(event){
    setGender(event.target.value)
}
return(<div className="container">
            <input value={name} onChange={handleNameChange} />
            <p>Name : {name} </p>
            <input value={age} onChange={handleAgeChange} type="number" />
            <p>Age : {age} </p>
            <textarea placeholder="Tel me about yourselves"></textarea>
            <br />
            <br />
            <select value={country} onChange={handleCountryChange}>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Antartica">Antartica</option>
                <option value="Australia">Australia</option>
                <option value="Europe">Europe</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
            </select>
            <p>Country : {country} </p>
            <label> <input type="radio" value="Male" checked={gender==="Male"} onChange={hanldeGenderChange}></input> Male </label> <br />
            <label> <input type="radio" value="Female" checked={gender==="Female"} onChange={hanldeGenderChange}></input> Female </label> <br />
            <label> <input type="radio" value="Transgender" checked={gender==="Transgender"} onChange={hanldeGenderChange}></input> Transgender </label> <br />
            <label> <input type="radio" value="Prefer not to say" checked={gender==="Prefer not to say"} onChange={hanldeGenderChange}></input> Prefer not to say </label>
            <p>Gender : {gender}</p>
       </div>)
}
export default MyComponents;