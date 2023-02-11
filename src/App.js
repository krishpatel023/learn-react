import './App.css';
import Child from './Child'
function App(){
  function getData(data){
    console.log(data)
  }
  return (
    <div className='App'>
      <h1>Learn React</h1>
      {//Props help to give data from parent to child
      }
      <Child send={getData}/>
    </div>
  );
}

export default App;