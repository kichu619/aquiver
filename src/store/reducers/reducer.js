import * as actionTypes from '../actions/action';


const initialState = { 
    studentList: [{
        id: '1',
        firstName: 'from store',
        surName: 'k salim',
        birthDate: '13-09-1994',
        gender: 'male',
        studentStatus: 'student'    
    },
    {
        id: '2',
        firstName: 'lorem',
        surName: 'doe',
        birthDate: '13-09-1993',
        gender: 'male',
        studentStatus: 'not student'    
    },
    {
        id: '3',
        firstName: 'lorem',
        surName: 'k salim',
        birthDate: '13-09-1994',
        gender: 'male',
        studentStatus: 'student'    
    }],
    selectedStudentId: 1,
}

const reducer = (state = initialState, action) => {

    switch(action.type){

        case actionTypes.ADD_STUDENT:
        return {
            ...state,
            studentList: [
                ...state.studentList,
                action.payload
            ],
        }

        case actionTypes.REMOVE_STUDENT:
        return {
            ...state,
            studentList: [
                ...state.studentList.filter(student => student.id != action.id)
            ],
        }

        case actionTypes.VIEW_STUDENT: 
        return {
            ...state,
            selectedStudentId:  action.id
        }
    }
    return state;
}

export default reducer;
