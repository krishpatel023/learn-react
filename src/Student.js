import React, {Component} from 'react'

class Student extends Component {
    render(){
        return(
            <div>
            <h1>Student Component</h1>
            <h2>Name : {this.props.name}</h2>
            <h2>E-mail : {this.props.email}</h2>
        </div>
        )

    };
}
export default Student;