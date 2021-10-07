import './App.css';
import {Component} from "react";
import Person from './components/Person';
class App extends Component{
  state={
    persons: [
      {id:'1', name:'Max', age:'20'},
      {id:'2', name:'Evan' ,age:'21'},
      {id:'3', name:'Ben' ,age:'22'}
    ],
    showperson: false

  }
 toggleperson=()=>{
    const x=this.state.showperson
    this.setState({showperson: !x})
   
 }

 changeName=(event , id)=>{
   const personindex= this.state.persons.findIndex(p => {return p.id===id})
  const person= {...this.state.persons[personindex]}
  person.name=event.target.value
  const newperson=[...this.state.persons]
  newperson[personindex]=person
  this.setState({persons: newperson})
 }


deleteperson=(index)=>{
const persons= this.state.persons
persons.splice(index,1)
this.setState({persons:persons})
}
 render(){
   let persons=null
  
   if(this.state.showperson)
   {
     persons=(
       
       <div>
         { this.state.persons.map((person,index)=>{
       return <
         Person name={person.name} 
         age={person.age} 
         click={()=>this.deleteperson(index)}
         changed={(event)=> this.changeName(event,person.id)}
         key={person.id}/>
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
