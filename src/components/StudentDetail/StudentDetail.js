import React from 'react';
import * as actionTypes from '../../store/actions/action';

import style from './StudentDetail.scss';

const StudentDetail = (props) => (
    <article className={style.StudentDetail}>
        <h1>single with all the detials</h1>
        <p><span>Name: </span><span>{props.firstName}</span></p>
        <p><span>Birthday: </span><span>{props.birthDate}</span></p>
        <p><span>Gender: </span><span>{props.gender}</span></p>
        <p><span>Status: </span><span>{props.studentStatus}</span></p>
    </article>
)

export default StudentDetail;
