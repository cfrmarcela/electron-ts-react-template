import React from 'react'
import './css/Loginps.css'
export default function Login() {
  return (
    <>
    <div>Login</div>
    <div className="header">
          <p className='conta'>Protect your<br></br>
              Thinking with us <br></br>
          </p>
          <p className='conta1'>
              if you don't an account
              you can Register here!
          </p>
          <div className='sombra'></div>
          <img src={require('../img/meninos.png')} alt="" className="meninos"/>
          <input className="email" type="text" placeholder='Enter e-mail'></input>
          <input className="senha" type="password" placeholder='********'></input>
          <button>Sing In</button>
      </div>
    </>
  )
}
