import React from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../firebase'
import { registerUser} from "../Redux/Auth/action"

export const Signin = () => {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    
    const dispatch = useDispatch()
 
    const signIn = (e) => {
        e.preventDefault()
    }

    const register = () => {
        dispatch(registerUser({email, password}))
    }
    return (
        <div className="absolute top-0 bottom-0 right-0 left-0 m-auto w-80 md:w-96 h-96 bg-transparent">
            <h1 className="text-white text-4xl pl-10 md:pl-16 pt-12">Sign In</h1>
            <input type="text" ng-model="email" required="" placeholder="Email Address" className="mt-6 ml-8 md:ml-16 h-12 p-1 w-9/12 md:w-8/12 rounded-md focus:outline-none" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="Password" ng-model="pwd" required="" placeholder="Password" className="mt-4 ml-8 md:ml-16 h-12 p-1 w-9/12 md:w-8/12 rounded-md focus:outline-none" value={password} onChange={e => setPassword(e.target.value)} />
            <br/>
            <input type="button" value="Sign In" className="mt-6 ml-8 md:ml-16 h-12 p-1 rounded-md w-9/12 md:w-8/12 bg-red-700 text-white cursor-pointer" onClick={signIn} />
            <p className="text-gray-500 md:pl-16 pl-8 text-sm mt-5">New to Netflix? <span className="text-white cursor-pointer hover:underline" onClick={register}>Sign up now</span></p>
        </div>
    )
}
