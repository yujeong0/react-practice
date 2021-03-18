import axios from 'axios'
import {
    LOGIN_USER, 
    REGISTER_USER
} from './types'

export function loginUser(dataToSubmit) {

    const request = axios.post('/api/user/login', dataToSubmit)
        .then(response => response.data )

    return {    // reducer로 보내기 : state 를 업데이트 하기 위해서
        type: LOGIN_USER,
        payload: request
    }

}

export function registerUser(dataToSubmit) {

    const request = axios.post('/api/user/register', dataToSubmit)
        .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request
    }
}