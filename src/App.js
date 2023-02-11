import './App.css';

function App(){

  const multi = [
    {name:"Krish",email:"krish@gmail.com",contact:0},
    {name:"Krish",email:"krish@gmail.com",contact:0},
    {name:"Krish",email:"krish@gmail.com",contact:0},
    {name:"Krish",email:"krish@gmail.com",contact:0}
  ]

  return (
    <div className="App">
      <h1>Learn React</h1>
      <table border="1">
      {//without tbody an error will be displayed
      }
      <tbody>
        {multi.map((item,i) => (
          <div>
          {//Here key is not displayed and prevents an error.
          }
            <tr key={i}>
              <hd>Name:{item.name}</hd>
              <td>Email:{item.email}</td>
              <td>Contact:{item.contact}</td>
            </tr>
          </div>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;