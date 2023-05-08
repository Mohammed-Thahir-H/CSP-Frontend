import React from 'react'
import useForm from '../hooks/useForm'
import validate from './utils/validate'
import axios from "axios"
import {useNavigate,Link} from 'react-router-dom'
import Login from './Login'

const Signup = () => {
  const url="http://localhost:5000"
  const { handleChange, values, handleSubmit, errors } = useForm(validate)

  function submit(e){
    e.preventDefault()
    axios.post(url,values)
    
    .then(res =>{
      console.log(res.data)
      
  })
    
  }

 const navigate=useNavigate();

  return (
    <div className='form-content-right'>
      <form className='form' onSubmit={handleSubmit} action='POST'>
        <h1>This is your sign up page</h1>

        <div className='form-inputs'>
          <label htmlFor='username' className='form-lable'>Username</label>
          <input 
          id='username'
          type='text' 
          name='username' 
          className='form-input' 
          placeholder='Username'
          value={values.username}
          onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>} 
        </div>

        <div className='form-inputs'>
          <label htmlFor='email' className='form-lable'>Email</label>
          <input 
          id='email'
          type='email' 
          name='email' 
          className='form-input' 
          placeholder='email'
          value={values.email}
          onChange={handleChange}
          /> 
          {errors.email && <p>{errors.email}</p>} 
        </div>

        <div className='form-inputs'>
          <label htmlFor='phoneNo' className='form-lable'>Phone Number</label>
          <input 
          id='phoneNo'
          type='tel' 
          name='phoneNo' 
          className='form-input' 
          placeholder='phone Number'
          value={values.phoneNo}
          onChange={handleChange}
          /> 
          {errors.phoneNo && <p>{errors.phoneNo}</p>} 
        </div>
        <button className='form-input-btn' type='submit'> Sign up</button>
        
        <span className='form-input-login'>
        
        <div>
          Already have an account?<div> <Link to='/login'> <h3>Login here</h3></Link></div>
          </div>
        </span>
        
      </form>
      
    </div>
  )
}

export default Signup
