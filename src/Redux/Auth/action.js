import { auth } from "../../firebase"
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGUSTER_FAILURE } from "../Auth/actionType"

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

export const registerUser = (payload) => (dispatch) => {
    
    dispatch(registerSuccess())

    auth.signInWithEmailAndPassword(payload.email, payload.password)
    .then((res) => {
        console.log(res.user.uid)
        alert("Register Successful")
    })
    .catch((err) => {
        alert(err.message)
    })

}