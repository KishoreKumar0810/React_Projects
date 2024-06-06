function List(){
    const Cars=[{id:1,brand:"BMW",model:"740Li"},
    {id:2,brand:"Mercedes",model:"AMG BlackSeries"},
    {id:3,brand:"Lexus",model:"LS 500h"},
    {id:4,brand:"Porsche",model:"911 GT"},
    {if:5,brand:"Audi",model:"RS 7"}];
    // Cars.sort((a,b)=> a.brand.localeCompare(b.brand)) //alphabetical order
    // Cars.sort((a,b)=> b.brand.localeCompare(a.brand)) //Reverse alphabetical order
    // Cars.sort((a,b)=> a.id - b.id) // Ascending id
     Cars.sort((a,b)=> b.id - a.id) // Descending id
    const ListCars=Cars.map(car => <li key={car.id}><b>{car.brand}</b> : {car.model}</li>)
    return(<ol>{ListCars}</ol>);
}
export default List;