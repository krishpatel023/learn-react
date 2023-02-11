import './App.css';

function App(){
  const students = ["Krish","Kashvi","Jay","Namra"]
  //Use of objects
  const multi = [
    {name:"Krish",email:"krish@gmail.com",contact:0},
    {name:"Krish",email:"krish@gmail.com",contact:0},
    {name:"Krish",email:"krish@gmail.com",contact:0},
    {name:"Krish",email:"krish@gmail.com",contact:0}
  ]
  //map looping
  students.map((item)=>{
    console.log(item)
  })
  //for loop
  for(let i=0;i<students.length;i++){
    console.log(students[i])
  }
  return(
    <div className='App'>
      <h1>Learn React</h1>
      {
        students.map((item)=>{
        console.log(item)
        })
      }
      {
        multi.map((item)=>
          <div style={{backgroundColor:"lightblue"}}>
              <h1>Name:{item.name}</h1>
              <h1>Email:{item.email}</h1>
              <h1>Contact:{item.contact}</h1>
          </div>

        )
      }
      {/* {
        for(let i=0;i<students.length;i++){
        console.log(students[i])
        }
      } */}
    </div>
  )
}

export default App;