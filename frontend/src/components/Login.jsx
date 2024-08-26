import React, { useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
import toast from 'react-hot-toast'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setAuthUser } from '../redux/userSlice'

const Login = () => {

  const [user,setUser] = useState({
    username:"",
    password:"",
  })
  const dispatch = useDispatch()
  const navigate = useNavigate(); // use Navigate lib.. for page navigate
  const onSubmitHandler = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:4000/api/v1/user/login`,user,{
        headers:{
          'Content-Type':'application/json'
        }
      ,
      withCredentials:true 
      })
      // For showing message dispaly using toast lib.. and navigate the login page
        navigate("/");
        dispatch(setAuthUser(res.data))
        
    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error);
      
    }
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
            <input onChange={(e)=> setUser({...user,username:e.target.value})} value={user.username} required className='w-full input input-bordered h-10' type="text" placeholder='User Name' />
          </div>
          <div>
            <label htmlFor="" className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input onChange={(e)=> setUser({...user,password:e.target.value})} value={user.password} required className='w-full input input-bordered h-10' type="password" placeholder='Password' />
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