import React, { useContext } from 'react'
import { Datacontext } from "../Context/Context";
import { NavLink } from 'react-router-dom';
import PacmanLoader from "react-spinners/PacmanLoader"
const Movies = () => {
    const { movie, isLoading } = useContext(Datacontext);
    return (
        <>

            <div>{
                isLoading ? <div className="flex flex-col mt-44 items-center">
                <PacmanLoader size={50} /> </div> :
     
                    <div className='flex flex-row flex-wrap gap-11 w-full justify-evenly h-screen '>


                        {
                            movie.map((data) => {

                                const title = data.Title.substring(0, 15);
                                return (
                                    <div key={data.imdbID} className='shadow-lg w-60 lg:w-64 hover:bg-gray-300 group hover:scale-105 duration-1000 flex shadow-slate-600 rounded-lg'>
                                        <NavLink to={`/movie/${data.imdbID}`}>
                                            <img className='w-screen h-4/5 rounded-t-lg' src={data.Poster} alt={data.imdbID} />
                                            <p className='text-center font-mono text-blue-600 group-hover:text-black text-xl font-extrabold lg:pt-1'>{title.length >= 15 ? title + "..." : title} </p>
                                            <h4 className='text-center font-serif font-bold group-hover:text-blue-800 text-gray-500 text-lg lg:mb-1'>{data.Year}</h4>

                                        </NavLink>
                                    </div>
                                )
                            })
                        }
                    </div>
            }
            </div>
        </>
    )

}
export default Movies