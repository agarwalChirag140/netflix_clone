import React from 'react'
import { Redirect } from 'react-router'
import { Banner } from './Banner'
import { NavBar } from './NavBar'
import { Row } from './Row'

export const HomeScreen = () => {
    const [isAuth, setisAuth] = React.useState(true)

    if(!isAuth){
        return <Redirect to="/starting" />
    }
    
    return (
        <div className="bg-black">
            {/* Banner */}
            <Banner />

            {/* Row */}
            <Row title="NETFLIX ORIGINALS" fetchUrl="/discover/tv?api_key=dd229825107a92713d83a649e77aece1&with_networks=213" isLargeRow />
            <Row title="Trending Now" fetchUrl="/trending/all/week?api_key=dd229825107a92713d83a649e77aece1&language=en-US" />
            <Row title="Top Rated" fetchUrl="/movie/top_rated?api_key=dd229825107a92713d83a649e77aece1&language=en-US" />
            <Row title="Action Movies" fetchUrl="/discover/movie?api_key=dd229825107a92713d83a649e77aece1&language=en-US&with_genres=28" />
            <Row title="Comedy Movies" fetchUrl="/discover/movie?api_key=dd229825107a92713d83a649e77aece1&language=en-US&with_genres=35" />
            <Row title="Horror Movies" fetchUrl="/discover/movie?api_key=dd229825107a92713d83a649e77aece1&language=en-US&with_genres=27" />
            <Row title="Romance Movies" fetchUrl="/discover/movie?api_key=dd229825107a92713d83a649e77aece1&language=en-US&with_genres=10749" />
            <Row title="Documentaries" fetchUrl="/discover/movie?api_key=dd229825107a92713d83a649e77aece1&language=en-US&with_genres=99" />

            {/* NavBar */}
            <NavBar />  
        </div>
    )
}