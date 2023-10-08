import React from 'react'
import Topbar from './Topbar';
import Movies from './Movies';
const Home = () => {
  return (<>
    <div className='flex flex-col gap-3'>
<Topbar />
      <Movies/>
    </div>
  </>
  )
}

export default Home;