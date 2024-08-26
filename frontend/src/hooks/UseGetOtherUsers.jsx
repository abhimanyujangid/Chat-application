import React , {useEffect} from 'react'
import axios from "axios"
import {useDispatch} from "react-redux"
import { setOtherUser } from '../redux/userSlice';

const UseGetOtherUsers = () => {
  const dispatch  = useDispatch();
  useEffect(()=>{
    const fetchOtherUser = async () =>{
        try {
          axios.defaults.withCredentials = true;
            const res = await axios.get(`http://localhost:4000/api/v1/user/`);
            dispatch(setOtherUser(res.data))
        } catch (error) {
            console.log(error);
            
        }
    }
    // This function we use because after the login we render the home page and this function call 
    fetchOtherUser();
  },[])
}

export default UseGetOtherUsers