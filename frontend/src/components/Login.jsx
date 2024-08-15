import React, { useState } from 'react'
import {Link} from "react-router-dom"
const Login = () => {

  const [user,setUser] = useState({
    username:"",
    password:"",
  })

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(user)
    setUser({
      username:"",
      password:"",
    })
  }
  return (
    <>
      <div className='min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
        <h1 className='text-3xl font-bold text-center text-gray-300'>Login</h1>
        <form action="" onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor="" className='label p-2'>
              <span className='text-base label-text' >User Name</span>
            </label>
            <input onChange={(e)=> setUser({...user,username:e.target.value})} value={user.username} className='w-full input input-bordered h-10' type="text" placeholder='User Name' />
          </div>
          <div>
            <label htmlFor="" className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input onChange={(e)=> setUser({...user,password:e.target.value})} value={user.password} className='w-full input input-bordered h-10' type="password" placeholder='Password' />
          </div>
          <div className='flex items-center'>
            <p>Don't have an account?</p>
            <Link to= "/signup" className='text-white ml-2'> Signup</Link>
          </div>
          
          <div>
            <button className='btn btn-block btn-sm mt-2 border-slate-600'>Signin</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login