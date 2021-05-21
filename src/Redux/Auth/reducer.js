import { deleteData, loadData, saveData } from "../../utils/localStorage"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "../Auth/actionType"

const token = loadData("token")

const initState = {
    isAuth: token ? true : false,
    isLoading: false,
    isError: false,
    email: ""
}

export const authReducer = (state = initState, {type, payload}) => {
    switch(type){
        case LOGIN_SUCCESS:
            saveData("token", payload.uid)
            saveData("email", payload.email)
            return {
                ...state,
                isAuth: true,
                isLoading: false,
                isError: false,
            }
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isAuth: false,
                isError: true
            }
        case LOGOUT:
            deleteData("token")
            deleteData("email")
            return{
                ...state,
                isLoading: false,
                isAuth: false,
                isError: false
            }
        default:
            return state
    }
}