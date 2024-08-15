import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
  const [user,setUser] = useState({
    fullName:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:""
  })

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(user)
    setUser({
      fullName:"",
      username:"",
      password:"",
      confirmPassword:"",
      gender:""
    })
  }
  return (
    <>
    <div className='min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
        <h1 className='text-3xl font-bold text-center text-gray-300'>Signup</h1>
        <form onSubmit={onSubmitHandler}>
        <div>
            <label htmlFor="" className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input onChange={(e)=> setUser({...user,fullName:e.target.value})} value={user.fullName} className='w-full input input-bordered h-10' type="text" placeholder='Full Name' />
          </div>
          <div>
            <label htmlFor="" className='label p-2'>
              <span className='text-base label-text'>User Name</span>
            </label>
            <input onChange={(e)=> setUser({...user,username:e.target.value})} value={user.username} className='w-full input input-bordered h-10' type="text" placeholder='User Name' />
          </div>
          <div>
            <label htmlFor="" className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input onChange={(e)=> setUser({...user,password:e.target.value})} value={user.password} className='w-full input input-bordered h-10' type="password" placeholder='Password' />
          </div>
          <div>
            <label htmlFor="" className='label p-2'>
              <span className='text-base label-text'>Confirm Password </span>
            </label>
            <input onChange={(e)=> setUser({...user,confirmPassword:e.target.value})} value={user.confirmPassword} className='w-full input input-bordered h-10' type="password" placeholder='Confirm Password' />
          </div>
          <div className='flex items-center my-2'>
            <div className='flex item-center'>
              <p>Male:</p>
              <input type="checkbox"  className="checkbox mx-2" />
            </div>
            <div className='flex item-center'>
              <p>Female:</p>
              <input type="checkbox" className="checkbox mx-2" />
            </div>
          </div>

          <div className='flex items-center'>
            <p>Already have an account?</p>
            <Link to= "/login" className='text-white ml-2'> Signin</Link>
          </div>
          
          <div>
            <button type='submite' className='btn btn-block btn-sm mt-2 border-slate-600'>Signup</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Signup