import React from 'react'
import './css/Chat.css'

export default function Home() {
  return (
    <>
    <div>
      <img src={require('../img/logo.png')} alt="" className="play-pause"/>
      <p className='header'>PROTECT YOUR</p><p className='header1'>THINKING</p>
      <div>
      <button type='button' className='buttonhome'> <img src={require('../img/homecinza.png')} alt="" className="pnghome"/>  Home</button>
      <button type='button' className='buttonaccount'> <img src={require('../img/account.png')} alt="" className="pngaccount"/>  Perfil</button>
      <button type='button' className='buttonchat'> <img src={require('../img/chatroxo.png')} alt="" className="pngaccount"/>  Chat</button>
      </div>
    </div>
    <div className= "linha" ></div>
    <div className= "vertical" ></div>
    <p className='Messagens'> Messagens </p>
    <input className='retangulo' placeholder='Search'></input>
    </>
)
}

   

