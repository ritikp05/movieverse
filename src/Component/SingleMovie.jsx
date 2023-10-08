import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { API_URL } from '../Context/Context';
import BeatLoader from 'react-spinners/BeatLoader';
const SingleMovie = () => {

  const [isLoading, setIsloading] = useState(true);
  const [movie, setMovie] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  async function getdata(url) {
    setIsloading(true);
    try {
      const data = await fetch(url);
      const result = await data.json();
      if (result.Response === "True") {
        setIsloading(false)
        setMovie(result)
        console.log(result)
        // setIserror({ show: false, msg: "" })
      }
      else {

        // setIserror({ show: true, msg: result.Error })
        setIsloading(true)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {

    let timer = setTimeout(() => {
      getdata(`${API_URL}&i=${id}`);
    }, 2000);
    return () => clearTimeout(timer);
  }, [id])

  return (<>
    {
      isLoading ? <div className="flex flex-col mt-44 items-center">
        <BeatLoader size={30} color='blue' /> </div> : <div className='w-full h-full flex flex-col '>

        <div>

          <div className='mb-1 ml-2 mt-2'><button onClick={() => navigate(-1)} className='bg-gray-500 hover:bg-gray-700 px-8 py-1 text-white  rounded-lg'>Go Back</button></div>
        </div>

        <img src={movie.Poster} className='w-1/2 mx-auto  '></img>
        <div className='flex flex-col w-3/4 mx-auto'>

          <h1 className='mx-auto lg:text-5xl md:text-4xl sm:text-3xl text-3xl  font-mono text-blue-600 font-extrabold  pt-2'>{movie?.Title}</h1>
          <h1 className=' pt-2 text-xl'><span className='text-2xl font-bold'>Language : </span>{movie?.Language}</h1>
          <h1 className='pt-2 text-xl'><span className='text-2xl font-bold'>Genre : </span>{movie?.Genre}</h1>
          <h1 className=' pt-2 text-xl'><span className='text-2xl  font-bold text-yellow-500'>imdbRating : </span>{movie?.imdbRating}</h1>
          <p className=' pt-2 text-xl'><span className='text-2xl font-bold'>Duration : </span>{movie?.Runtime}</p>
          <h1 className=' text-2xl pt-2'><span className='text-2xl font-bold'>Released :</span> {movie?.Released}</h1>
          <h1 className=' pt-2  text-xl '><span className='text-2xl font-bold'>Actors : </span>{movie?.Actors}</h1>
          <h1 className=' pt-2 text-xl'><span className='text-2xl font-bold'>Description : </span>{movie?.Plot}</h1>


        </div>
      </div>
    }

  </>
  )
}

export default SingleMovie