import './App.css';
import Header from './components/Header';
import {Component} from "react";
import Person from './components/Person';
class App extends Component{
  state={
    persons: [
      {name:'Max', age:'20'},
      {name:'Evan' ,age:'21'},
      {name:'Ben' ,age:'22'}
    ],
    otherstate:'some other state',
    showperson: false
  }
  togglebar= () =>
  {
    const doshow=this.state.showperson,
    this.setState({showperson:!doshow})
  }
 render(){
  return (
    <div className="App">
      <button className="btn btn-success" onClick="togglebar" style={{margin:'10px'}}>Toggle Bar</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
  )
  }
}

export default App;
