import React from 'react'
import Signup from './Signup'
import './Form.css'


const Forms = () => {
  return (
    <>
    <div className='form-container'>
      <span className='close-btn'>x</span>
      <div className='form-content-left'>
        <img src= '/images/car.jpg' alt='left' className='form-img' /> 
      </div>
      <Signup />
      </div>
    </>
  )
}

export default Forms

