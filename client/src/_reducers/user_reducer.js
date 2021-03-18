import {
    LOGIN_USER, 
    REGISTER_USER
} from '../_actions/types';

export default function (state={}, action) {
    switch (action.type) {  // type이 여러개니까 switch 문으로 다른 작업할 수 있도록
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload } // spread operator..? 매개변수 state를 똑같이 들고온다
        case REGISTER_USER:
            return { ...state, register: action.payload }
        default: 
            return state;
    }
}