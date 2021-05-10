import React from 'react'
import styles from "./StartingScreen.Module.css"
import netflixLogo from "../Images/Netflix-Logo-removebg-preview.png"
import { Redirect } from 'react-router'
import { Signin } from './Signin'

export const StartingScreen = () => {

    // const [signup, setSignup] = React.useState(false)
    const [signin, setSignin] = React.useState(false)
    const [isAuth, setisAuth] = React.useState(false)

    if(isAuth){
        <Redirect to="/" />
    }

    const signIn = () => {
        setSignin(true)
    }
    return (
        <div className={styles.starting__screen} style={{backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/7a33204b-893d-4792-8494-b9d6cbc73848/8ed3a98a-e2c2-488d-9583-93634199485d/IN-en-20210502-popsignuptwoweeks-perspective_alpha_website_small.jpg")`}} >
            <div className="flex justify-between items-center w-full fixed top-0">
                <img src={netflixLogo} alt="netflix logo" className="w-48" />
                <div className="text-white w-24 bg-red-700 flex justify-center items-center text-xl font-light rounded-md p-2 mr-4 cursor-pointer" onClick={signIn}>
                    <p>Sign In</p>
                </div>
            </div>
            {
                signin ? 
                    <Signin /> : 
                <>
                    <div className="absolute  md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 h-3/6 top-0 left-0 bottom-0 right-0 m-auto">
                        <p className="text-center text-4xl md:text-6xl text-white font-bold">Unlimited movies, TV</p>
                        <p className="text-center text-4xl md:text-6xl text-white font-bold">shows and more.</p>
                        <p className="text-center text-white text-lg md:text-3xl mt-2">Watch anywhere. Cancel anytime.</p>
                        <p className="text-center text-white text-lg mt-6">Ready to watch? Enter your email to create or restart your membership.</p>
                        <div className=" w-11/12 md:w-8/12 h-16 m-auto mt-8 flex">
                            <input type="text" placeholder="Email address" className="h-full w-8/12 md:w-9/12 p-2 focus: outline-none" />
                            <div className="w-5/12 md:w-4/12 p-1 h-full bg-red-700 text-white flex justify-center items-center md:text-xl cursor-pointer" onClick={() => setSignin(true)}>
                                <p>Get Started</p>
                            </div>
                        </div>
                    </div>
                </>
            }
            <div className={styles.startingScreen__gradient}></div>
        </div>
    )
}