import './App.css';
//Adding the css file
import './style.css'
import style from './custom.module.css'

function App(){
  
  return(
    <div className='App'>
      <h1 className='type1'>Type 1</h1>
      <h1 style={{  backgroundColor: 'black', color: 'blue'}}>Type 2</h1>
      <h1 className={style.success}>Type 3</h1>
    </div>
  )
}

export default App;