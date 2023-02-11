import './App.css';
import Child from './Child'
function App(){
  //Nesting of array
  const multi = [
    {name:"Krish",email:"krish@gmail.com",contact:101},
    {name:"Krish",email:"krish@gmail.com",contact:101},
    {name:"Krish",email:"krish@gmail.com",contact:101},
    {name:"Krish",email:"krish@gmail.com",contact:101}
  ]

  return (
    <div className="App">
      <h1>Learn React</h1>
      {multi.map((item,i) => (
        <Child data={item}/>
      ))}
    </div>
  );
}

export default App;