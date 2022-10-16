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
      <div className='caixatxt'></div>
      <p className='pesquisa'>What are you feeling?  <img src={require('../img/enviar.png')} alt="" className="enviari"/></p>
      <div className='sombra'></div>
      <p className='recent'>Recent  <img src={require('../img/Vector.png')} alt="" className="vector"/></p>
      <div className='caixa'></div><p className='hi'>Hi! Laura</p>
      <p className='very'>Very nice to have you back.</p>
      <p className='recommend'>Recommended</p>
      <div className='line'></div>
    </div>
  </>
    
  )
}
