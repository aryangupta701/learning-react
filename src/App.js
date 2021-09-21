
import './App.css';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  
  return (
    <div className="App">
      <Header name="myname" age="18"/>
      <Header name="yourname" age="20"/>
    
      <Body name="hello,this is body" />
    </div>
  );
}

export default App;
