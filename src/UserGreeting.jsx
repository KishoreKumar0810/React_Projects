//conditional rendering = allows you to control whats get rendered in your application based on certain conditions
// (show, hide or change components)
function UserGreeting(props){
return(props.IsLoggedIn ? <h2 className="Welcome-Message"> Welcome {props.userName} :) </h2> 
                          : <h2 className="LogIn-prompt">Please Login to continue :( </h2>
);
}
export default UserGreeting;