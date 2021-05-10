import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../Redux/Movies/action'
import styles from  "./Row.module.css"
import "./Row.module.css"
import movieTrailer from "movie-trailer"
import YouTube from 'react-youtube'
import Carousel from 'react-elastic-carousel';

export const Row = ({title, fetchUrl, isLargeRow}) => {

    const dispatch = useDispatch()
    const [trailerUrl, setTrailerUrl] = React.useState("")

    React.useEffect(() => {
        dispatch(getMovies({fetchUrl, title}))
    },[fetchUrl, dispatch, title])

    const movies_list = useSelector((state) => {
        return state.movies.moviesList
    })

    console.log(movies_list)

    const handleTrailer = (movie) => {
        console.log(movie)
        if(trailerUrl){
            setTrailerUrl("")
        }
        else{
            movieTrailer(movie.title || "").then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get('v'))
            })
            .catch((err) => {
                alert("Temporarily unavailable")
            })
        }
    }

    const opts = {
        height: "390",
        width: "100%",
        playerVar: {
            autoplay: 1
        }
    }

    return (
        <div>
            {/* Movies List Name */}
            <div className="text-white text-3xl p-2 font-extrabold">
                <p>{title}</p>
            </div>

            <div className={styles.row_posters}>
                    {
                        movies_list && movies_list[title] && movies_list[title].map((movie) => {
                            return (
                                <img src={`https://image.tmdb.org/t/p/original${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.original_name} className="mr-6 transition duration-500 transform  hover:scale-110 rounded-md shadow-lg cursor-pointer object-contain" key={movie.id} onClick={() => handleTrailer(movie)}/>
                            ) 
                        })
                    }
            </div>
            {
                trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />
            }
        </div>
    )
}
