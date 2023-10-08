import React from 'react'
import Home from './Component/Home'
import SingleMovie from "./Component/SingleMovie"
import Error from './Component/Error'
import Context from './Context/Context'
import {Routes,Route} from "react-router-dom";
const App = () => {
  return (


 <Context> 
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/movie/:id' element={<SingleMovie/>}/>
<Route path='*' element={<Error/>}/>
</Routes>
     </Context>
  )
}

export default App