// props = read-only properties that are shared between components.
// A parent component can send data to a child component.
// <Component key=value />

// propTypes = mechanism that ensures that the passed value is of correct data type

//defaultProps = default values for props incase they are not passed from the parent component
import propTypes from 'prop-types'
function Jawa(props){
    return(
    <div className="jawa">
        <p>Model : {props.model}</p>
        <p>CC : {props.cc}</p>
        <p>IsCruzer : {props.isCruzer?"Yes":"No"}</p>
    </div>
    );
}
Jawa.propTypes={
    model:propTypes.string,
    cc:propTypes.number,
    isCruzer:propTypes.bool
}
Jawa.defaultProps={
    model:"Jawa",
    cc:300,
    isCruzer:false
}
export default Jawa;