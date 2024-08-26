import React from 'react'
import { BiSearchAlt2 } from "react-icons/bi"
import OtherUsers from './OtherUsers'
import axios from 'axios'
import toast from "react-hot-toast"
import {useNavigate} from "react-router-dom"

const Sidebar = () => {

  const navigate = useNavigate();
  const logoutHandler = async()=>{
    try {
      const res = await axios.get(`http://localhost:4000/api/v1/user/logout`);
      navigate("/login")
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      
    }
  } 
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <from action="" className='flex items-center gap-2 '>
        <input className='input input-bordered rounded-md ' type='text' placeholder='Search...' />
        <button type='submit' className='btn  bg-gray-700'><BiSearchAlt2 size={"15px"} /></button>
      </from>
      <div className='divider px-3'></div>
      <OtherUsers />
      <div onClick={logoutHandler} className='mt-5'>
        <button className='btn btn-sm'>Logout</button>
      </div>

    </div>
  )
}

export default Sidebar