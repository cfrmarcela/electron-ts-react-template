import React from 'react'
import './css/HomeStyle.css'

export default function Home() {
  return (
    <>
    <div>
      <img src={require('../img/logo.png')} alt="" className="play-pause"/>
      <p className='header'>PROTECT YOUR</p><p className='header1'>THINKING</p>
      <div>
      <button type='button' className='buttonhome'> <img src={require('../img/icon-home.png')} alt="" className="pnghome"/>  Home</button>
      <button type='button' className='buttonaccount'> <img src={require('../img/account.png')} alt="" className="pngaccount"/>  Perfil</button>
      <button type='button' className='buttonchat'> <img src={require('../img/chat.png')} alt="" className="pngaccount"/>  Chat</button>
      </div>
      <div className='border'></div>
    </div>
  </>
    
  )
}
