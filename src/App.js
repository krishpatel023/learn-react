import './App.css';

function App(){
  //Nesting of array
  const multi = [
    {name:"Krish",email:"krish@gmail.com",address:[{ House:101 , Area:"Nav"}]},
    {name:"Krish",email:"krish@gmail.com",address:[{ House:101 , Area:"Nav"}]},
    {name:"Krish",email:"krish@gmail.com",address:[{ House:101 , Area:"Nav"}]},
    {name:"Krish",email:"krish@gmail.com",address:[{ House:101 , Area:"Nav"}]}
  ]

  return (
    <div className="App">
      <h1>Learn React</h1>
      {multi.map((item,i) => (
        <div key={i} style={{backgroundColor:"black",color:"green"}}>
          {//Here key is not displayed and prevents an error.
          }
          <h1>Name:{item.name}</h1>
          <h1>Email:{item.email}</h1>
          {
            item.address.map((item1,i1)=>(
              <div key={i1}>
                <h1>House:{item1.House}</h1>
                <h1>Area:{item1.Area}</h1>                
              </div>

            ))
          }
        </div>
      ))}
    </div>
  );
}

export default App;