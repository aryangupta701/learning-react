import './App.css';
import {Component} from "react";
import Person from './components/Person';
class App extends Component{
  state={
    persons: [
      {name:'Max', age:'20'},
      {name:'Evan' ,age:'21'},
      {name:'Ben' ,age:'22'}
    ],
    showperson: false

  }
 toggleperson=()=>{
    const x=this.state.showperson
    this.setState({showperson: !x})
    console.log(this.state.showperson)
 }
deleteperson=(index)=>{
const persons= this.state.persons
persons.splice(index,1)
this.setState({persons:persons})
}
 render(){
   let persons=null
   console.log(this.state.showperson)
   if(this.state.showperson)
   {
     persons=(
       
       <div>
         { this.state.persons.map((person,index)=>{
       return <Person name={person.name} age={person.age} click={()=>this.deleteperson(index)}/>
         })}
       </div>
     )
    }
   
  return (
    <div className="App">
      <button className="btn btn-success" onClick={this.toggleperson} style={{margin:'10px'}}>Toggle Bar</button>
     {persons}
    </div>
  )
  }
}

export default App;
