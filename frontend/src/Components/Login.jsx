import React from 'react'
import { useNavigate } from "react-router";

const Login = () => {
  let navigate = useNavigate();

  return (
    <div>Login
      <button>SignUp</button>
      <button onClick={() => {navigate("/Dahboard")}}>Dashboard</button>
    </div>
  )
}

export default Login