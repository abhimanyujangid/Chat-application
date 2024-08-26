import React,{useEffect} from 'react'
import axios  from 'axios'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setMessages } from '../redux/messageSlice'

const UseGetMessages = () => {
    const dispatch = useDispatch();
    // For seleect a user in sidebar and get the  user id
    const {selectedUser} = useSelector(store => store.user)
    useEffect(()=>{  
        const fetchMessage = async () =>{
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`http://localhost:4000/api/v1/message/${selectedUser?._id}`)
                dispatch(setMessages(res.data))
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchMessage();
    },[selectedUser])
}

export default UseGetMessages