import React,{useState,useEffect} from 'react'
import {NavLink,useNavigate} from 'react-router-dom'
import SearchBox from './SearchBox'

function Navbar() {
  const navigate = useNavigate()
  const userinformation = localStorage.getItem('UserInfo')
  const logout=()=>{
    localStorage.removeItem('UserInfo')
    navigate('/')
  }
  return (
    <div>
      <NavLink to='/'>Simple Assemble</NavLink>
      <SearchBox />
      {userinformation ? <p><a href='' onClick={logout}>Logout</a></p> : 
      <div>
        <NavLink to='/login/'>Login</NavLink>
        <NavLink to='/register/'>Register</NavLink>
      </div>
      
      }
    </div>
  )
}

export default Navbar