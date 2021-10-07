
const boxstyle = {
    
    margin:'50px',
    padding:'10px',
    border:'2px solid black' 

}
const person= (props) =>{
return(
    <div style={boxstyle}>
    <p onClick={props.click}>hello ! my name is {props.name} and I am {props.age} years old.</p>
    <input type="text"></input>
</div>
)
}
export default person