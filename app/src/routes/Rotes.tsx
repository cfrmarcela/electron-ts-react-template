import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import Login from '../Login'
// import { PrivateRoutes } from '.';

export default function Rotas() {
  return (
    <>
{/* /curso/e79f5587-eecd-4799-949d-5fcc46e36a81 */}
      <Routes>

<Route  path='/main_window' element={<Home/>}/>
<Route  path='/login' element={<Login/>}/>


      </Routes>
    </>

  )
}

