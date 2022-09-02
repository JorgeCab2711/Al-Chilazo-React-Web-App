import React from 'react'
import '../Styles/Home_Start.scss'
import {Link} from 'react-router-dom'
//Logo import 
import Logo from "../img/logo.png"

export function Start() {

  return (
    <>
      <div className="container">
        <h1 id='main-title'>AL CHILAZO</h1>
        <img id='logo' src={Logo} alt="Logo" />
        <div className="button-container" >
          <Link to='/Login'>
            <button className='primary-button'>Login</button>
          </Link>
          <Link to='/Register'>
            <button className="primary-button">Register</button>
          </Link>
        </div>
      </div>
      
    </>
  )
}
