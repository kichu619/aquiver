import React, {Component} from "react";
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/action';

import style from './NewStudent.scss';

  class NewStudent extends Component {

    state = {
        firstName: '',
        surName: '', 
        birthDate: '', 
        gender: 'male', 
        studentStatus: 'student',
    }

    onFormInputChange = (e) => {
    
        this.setState({
            ...this.state,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
 
    render() {

        return (
            <div className={style.NewStudent}>
            <h1>Add Student</h1>
            <label>FirstName
                <input name='firstName' type="text" value={this.state.firstName} onChange={this.onFormInputChange}/>
            </label>
            <label>Surname
                <input name='surName' type="text" value={this.state.surName} onChange={this.onFormInputChange}/>
            </label>
            <label>Birth Date
                <input name='birthDate' type="text" value={this.state.birthDate} onChange={this.onFormInputChange}/>
            </label>
            <label>Gender
                <select 
                name='gender'
                value={this.state.gender} onChange={this.onFormInputChange}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </label>
            <label>Status
                <select name='studentStatus' value={this.state.studentStatus} onChange={this.onFormInputChange}>
                    <option value="student">Student</option>
                    <option value="notStudent">Not Student</option>
                </select>
            </label>
            <button onClick={() => this.props.onAddStudent(this.state)}>Add Student</button>
        </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddStudent: (studentInfo) => 
        dispatch({type: actionTypes.ADD_STUDENT, payload: {...studentInfo, id: Math.random()}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewStudent);

