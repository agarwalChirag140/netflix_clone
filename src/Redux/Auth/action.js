import { auth } from "../../firebase"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_REQUEST, REGISTER_SUCCESS, REGUSTER_FAILURE } from "../Auth/actionType"

export const registerRequest = () => {
    return {
        type: REGISTER_REQUEST
    }
}

export const registerSuccess = (payload) => {
    return {
        type: REGISTER_SUCCESS,
        payload
    }
}

export const registerFailure = (payload) => {
    return {
        type: REGUSTER_FAILURE,
        payload
    }
} 

export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
}

export const loginSuccess = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload
    }
}

export const loginFailure = (payload) => {
    return {
        type: LOGIN_FAILURE,
        payload
    }
}

export const logOut = () => {
    return {
        type: LOGOUT
    }
}

export const registerUser = (payload) => (dispatch) => {
    
    dispatch(registerRequest())

    auth.createUserWithEmailAndPassword(payload.email, payload.password)
    .then((authUser) => {
        dispatch(registerSuccess("Register Successful"))
        alert("Register Successful")
    })
    .catch((err) => {
        dispatch(registerFailure(err.message))
        alert(err.message)
    })
}

export const loginUser = (payload) => (dispatch) => {

    dispatch(loginRequest())

    auth.signInWithEmailAndPassword(payload.email, payload.password)
    .then((user) => {
        console.log(user.user.email)
        dispatch(loginSuccess(user.user))
        alert("Login Successful")
    })
    .catch((err) => {
        dispatch(loginFailure(err.message))
        alert(err.message)
    })
}