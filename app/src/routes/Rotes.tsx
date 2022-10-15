import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import Loginps from '../home/Loginps'
// import { PrivateRoutes } from '.';

export default function Rotas() {
  return (
    <>
{/* /curso/e79f5587-eecd-4799-949d-5fcc46e36a81 */}
      <Routes>

{/* <Route  path='/main_window' element={<Home/>}/> */}
<Route  path='/main_window' element={<Loginps/>}/>


      </Routes>
    </>

  )
}

