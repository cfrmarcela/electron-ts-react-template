import React from 'react'
import './css/Login.css'

export default function Loginps() {
  return (
    <>
      <div className="header">
      <p className='conta'>May your life<br></br>
      serve to save other<br></br>
      lives
      </p>
    <p className='conta1'>
    if you don't an account<br></br>
    you can Register here!
    </p>
    </div>
    <div className='sombra'></div>
    <img src={require('../img/medicos.png')} alt="" className="medico"/>
    <input className="nome" type="text" placeholder='Nome:'></input>
    <input className="email" type="text" placeholder='Enter Email:'></input>
    <input className="senha" type="password" placeholder='**********'></input>
    <input className="cpf" type="text" placeholder='CPF:'></input>
    <input className="crp" type="text" placeholder='CRP:'></input>
    <button>Sing In</button>
    </>
    
  
  )
}
