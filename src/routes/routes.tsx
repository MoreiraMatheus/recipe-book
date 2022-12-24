import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Discovery } from '../pages/Discovery';

export function MainRoutes(){
  return(
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/discovery' element={<Discovery/>}/>
  </Routes>
  )
}
