import React, {useState} from 'react'
import '../styles/Signup.css'; 

const SignUp = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup =(e) =>{
    e.preventDefault()
    if(password !== confirmPassword){
      alert('Password and confirm password do not match');
    }
    if(password===confirmPassword){
      alert('User created successfully');
    }
  }

  return (
    <div className = "signup-container">
      <h2>SignUp</h2>
      <form onSubmit = {handleSignup}>
        <input type = 'text' placeholder = 'User Id' 
        value ={userId} onChange={(e) => setUserId(e.target.value)} required className='signup-input'/>
        <input type ='password' placeholder='Password'
         value = {password} onChange={(e) => setPassword(e.target.value)} required className='signup-input' />
         <input type ='password' placeholder='Confirm Password' 
         value ={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className='signup-input'/>
         <button type = "submit" className='signup-button'> SignUp </button>
       </form>
    </div>
  )
}

export default SignUp