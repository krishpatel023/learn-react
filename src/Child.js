function Child(props){
    const data = "Krish"
    return(
        <div>
            <h1>Child Component</h1>
            <button onClick={()=>props.send(data)}>Click</button>
        </div>
    )
}
export default Child;