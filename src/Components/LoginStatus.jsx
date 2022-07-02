import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

function LoginStatus() {
    const [isAuth,toggleAuth] = useContext(AuthContext)
  return (
    <div>

    </div>
  )
}

export default LoginStatus