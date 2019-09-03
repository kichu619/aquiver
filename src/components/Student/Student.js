import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/action';


import style from './Student.scss';

class Student extends Component {
    render(){
        return(
            <article className={style.Student} >
            <h1>{this.props.firstName}</h1>
            <button onClick={ () => this.props.onViewStudent(this.props.id)}>View</button>
            <button>Edit</button>
            <button onClick={ () => this.props.onRemoveStudent(this.props.id)}>Delete</button>
            </article>
        )
    }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => {
    return {
        onRemoveStudent: (studentId) => dispatch({ type: actionTypes.REMOVE_STUDENT, id: studentId }),
        onViewStudent: (studentId) => dispatch({ type: actionTypes.VIEW_STUDENT, id: studentId })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Student);