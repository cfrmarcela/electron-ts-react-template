import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import Loginps from '../home/Loginps';
import Login from '../home/Login';
import Perfil_Potinho from '../home/Perfil_Potinho';
import Perfil_Mood from '../home/Perfil_Mood'
// import { PrivateRoutes } from '.';

export default function Rotas(): any {
  return (
    <>
{/* /curso/e79f5587-eecd-4799-949d-5fcc46e36a81 */}
      <Routes>

{/*<Route  path='/main_window' element={<Home/>}/>*/}
{/*<Route  path='/main_window' element={<Loginps/>}/>*/}
{/* <Route  path='/main_window' element={<Login/>}/> */}
{/* <Route  path='/main_window' element={<Perfil_Potinho/>}/> */}
<Route  path='/main_window' element={<Perfil_Mood/>}/> 
      </Routes>
    </>

  )
}

