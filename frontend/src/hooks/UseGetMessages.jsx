import React,{useEffect} from 'react'
import axios  from 'axios'

const UseGetMessages = () => {
    useEffect(()=>{
        const fetchMessage = async () =>{
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`http://localhost:4000/api/v1/message/.....`)
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchMessage();
    },[])
}

export default UseGetMessages