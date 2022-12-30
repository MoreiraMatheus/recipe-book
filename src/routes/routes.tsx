import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home/Home';
import { Discovery } from '../pages/Discovery/Discovery';
import { Login } from '../pages/Login';
import { ErrorPage } from '../pages/ErrorPage';

export function MainRoutes(){
  return(
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/discovery' element={<Discovery/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='*' element={<ErrorPage/>}/>
  </Routes>
  )
}
