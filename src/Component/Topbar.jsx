import React, { useContext } from 'react'
import { Datacontext } from '../Context/Context';
const Topbar = () => {
const{query,Setquery,isError}=useContext(Datacontext);

  return (
    <>

    <div className='flex bg-gray-600 w-screen flex-row justify-around pb-5 '>
<h2 className='text-white text-2xl pl-1 font-mono mt-2 md:text-3xl lg:tracking-widest md:-tracking-wider sm:tracking-wide lg:text-4xl'>Movie vrese</h2>
<input placeholder='search' className='mt-2 w-2/5  focus:outline-none md:px-8 lg:px-10 text-lg rounded-md text-center' onChange={(e)=>Setquery(e.target.value)} value={query}/>
    </div>
 <div className='text-3xl flex justify-center mt-20'>{isError.show&& isError.msg}</div>
    </>
  )
}

export default Topbar;