
import './App.css'



import {Route,Routes} from 'react-router-dom'

import Navbar from '../components/Navbar'
import Add from '../components/Add'
import Viewproduct from '../components/Viewproduct'
function App() {
 
  return (
    <>
      <Navbar/>
      <Routes>
     <Route path='/view' element={<Viewproduct/>}></Route>
     <Route path='/add' element={<Add/>}></Route> 
      </Routes>
    </>
  )
}

export default App
