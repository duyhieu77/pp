import React from 'react';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import loginimg from '../../assets/Web/loginimg.png';
import { FaPhone } from "react-icons/fa";
const Register = () => {
  return (
    <div 
      className=' mt-20 flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat'  
      style={{ backgroundImage: `url(${loginimg})` }}
    >
      <form className='bg-white bg-opacity-70 p-8 rounded-lg shadow-lg max-w-md w-full space-y-6'  data-aos="fade-up" data-aos-once="true" data-aos-delay="300">
        <h1 className='text-4xl text-center font-bold text-primary'>Register</h1>
        
        <div className='relative'>
          <input 
            type='text' 
            placeholder='UserName' 
            required 
            className='w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:bg-gray-100'
          />
          <FaUser className='absolute top-2 right-3 text-gray-400' />
        </div>

        <div className='relative'>
          <input 
            type='tel' 
            placeholder='Your Phone Number' 
            required 
            className='w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:bg-gray-100'
          />
          <FaPhone  className='absolute top-2 right-3 text-gray-400' />
        </div>

        <div className='relative'>
          <input 
            type='email' 
            placeholder='Email' 
            required 
            className='w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:bg-gray-100'
          />
          <FaEnvelope className='absolute top-2 right-3 text-gray-400' />
        </div>

        <div className='relative'>
          <input 
            type='password' 
            placeholder='Password' 
            required 
            className='w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:bg-gray-100'
          />
          <FaLock className='absolute top-2 right-3 text-gray-400' />
        </div>

        <div className='relative'>
          <input 
            type='password' 
            placeholder='Confirm Password' 
            required 
            className='w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:bg-gray-100'
          />
          <FaLock className='absolute top-2 right-3 text-gray-400' />
        </div>

        <button 
          type='submit' 
          className='w-full bg-primary text-white py-2 rounded-full hover:bg-primary-dark transition duration-300'>
          Register
        </button>

        <div className='text-center'>
          <p>Already have an account? <a href="/login" className='text-primary hover:underline'>Login</a></p>
        </div>
      </form>
    </div>
  );
}

export default Register;
