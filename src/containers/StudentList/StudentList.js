import React, { Component } from 'react';
import { connect } from 'react-redux';

import Allstudent from '../../components/AllStudent/AllStudent';
import NewStudent from '../../components/NewStudent/NewStudent';
import StudentDetail from '../../components/StudentDetail/StudentDetail';
import style from './StudentList.scss';

class StudentList extends Component {

    render(){
        return (
            <div className={style.StudentList}>
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">All Student</a></li>
                            <li><a href="/new-student">New Student</a></li>
                        </ul>
                    </nav>
                </header>
                <Allstudent />
                <NewStudent />
                { this.props.selectedStudent && <StudentDetail {...this.props.selectedStudent}/>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedStudent: state.studentList.find(student => student.id === state.selectedStudentId)
    }
}

export default connect(mapStateToProps)(StudentList);