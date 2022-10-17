import React from 'react'
import './css/Perfil_Potinho.css'
export default function Perfil_Potinho() {
  return (
    <>
        <img src={require('../img/logo.png')} alt="" className="play-pause" />
        <p className='header'>PROTECT YOUR</p><p className='header1'>THINKING</p>
            <div className='Homepartes-perfil'>
              <button type='button' className='buttonhome'> <img src={require('../img/homecinza.png')} alt="" className="pnghome" />  Home</button>
              <button type='button' className='buttonaccount'> <img src={require('../img/perfil_roxo.png')} alt="" className="pngaccount" />  Perfil</button>
              <button type='button' className='buttonchat'> <img src={require('../img/chat.png')} alt="" className="pngaccount" />  Chat</button>
            </div>
            <div className='Homepartes-perfil'>
              <button type='button' className='buttonpotinho'>Potinho</button>
              <div className='line'></div>
              <button type='button' className='buttonmoodchart'>Mood Chart</button>
              <button type='button' className='buttonfavorites'>Favorites</button>
            </div>
      </>
  )
}