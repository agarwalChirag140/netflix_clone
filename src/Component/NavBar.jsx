import React from 'react'
import netflixLogo from "../Images/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w-removebg-preview.png"

export const NavBar = () => {
    const [show, handleShow] = React.useState(false)

    const tarnsitionNavBar = () => {
        if(window.scrollY > 100){
            handleShow(true)
        }
        else{
            handleShow(false)
        }
    }

    React.useEffect(() => {
        window.addEventListener("scroll", tarnsitionNavBar)
        return () => window.removeEventListener("scroll", tarnsitionNavBar)
    }, [])
    return (
        <div className={`flex justify-between items-center h-16 w-full fixed top-0 transition duration-500 ease-in-out ${show && "bg-black"}`}>
            <img src={netflixLogo} alt="netflix logo" className="w-36 object-contain ml-3"/>
            <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="profile" className="w-18 h-12 mr-3 absolute right-0" />
        </div>
    )
} 
