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
      <div className= 'linha'></div>
      <div className='border'></div>
      <div>
        <input className='caixatxt' placeholder='What are you feeling?  '></input>
        <img src={require('../img/enviar.png')} alt="" className="enviari"/>
      </div>
      <div className='sombra'></div>
      <p className='recent'>Recent  <img src={require('../img/Vector.png')} alt="" className="vector"/></p>
      <div className='caixa'></div><p className='hi'>Hi! Laura</p>
        <p className='very'>Very nice to have you back.</p>
        <p className='recommend'>Recommended</p>
      <div className='line'></div>
      <div>
        <button type='button' className='buttonvideo'>Video</button>
        <button type='button' className='buttonbooks'>Books</button>
        <button type='button' className='buttonmovies'>Movies</button>
      </div>
    </div>
  </>
    
  )
}
