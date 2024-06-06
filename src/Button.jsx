function Button(){
const styles={
        backgroundColor:" hsl(200,100%,50%)",
        size: "200px",
        borderRadius:"5px",
        color: "white",
        padding: "10px 20px",
        border: "none",
        cursor: "pointer",
      }
      const handleClick = (e) => e.target.textContent=" OOP's :( "
return(
<button style={styles} onDoubleClick={(e)=> handleClick(e)}>Click</button>
);
}
export default Button;