function Student(props){
    return(
        <div>
            <h1>Student Component</h1>
            <h2>Name : {props.name}</h2>
            <h2>E-mail : {props.email}</h2>
            <h3>Address : {props.multipleProps.address}</h3>
            <h3>Mobile : {props.multipleProps.mobile}</h3>
        </div>
    )
}
export default Student;