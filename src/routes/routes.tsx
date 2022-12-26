import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home/Home';
import { Discovery } from '../pages/Discovery/Discovery';

export function MainRoutes(){
  return(
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/discovery' element={<Discovery/>}/>
  </Routes>
  )
}
