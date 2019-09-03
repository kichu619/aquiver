import React, { Component } from 'react'
import style from './AllStudent.scss';
import Student from '../Student/Student';
import { connect } from 'react-redux';
class AllStudent extends Component {

    render(){
        
        const allStudentsList = this.props.studentList.map(student => {
            return <Student 
            key={student.id} 
            {...student}
            />
        })

        return(
            <React.Fragment>
                {allStudentsList}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        studentList: state.studentList
    }
}

export default connect(mapStateToProps)(AllStudent);