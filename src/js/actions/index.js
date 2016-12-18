import * as types from '../constants/ActionTypes';
import * as API from '../constants/Api';
import {push} from 'react-router-redux';



export function pushRedirect(path) {
    return dispatch => {
        dispatch(push(path))
    }
}




export function updateElement(name, value){


    return {
        type: types.UPDATE_ELEMENT,
        payload:{name, value}
    };
}


