import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser } from '../redux/userSlice';

const OtherUser = ({user}) => {
    const dispatch = useDispatch(); 
    const {selectedUser} = useSelector(store => store.user)
    //Create a function for user select in side bar
    const selectedUserHandler = (user)=>{
        dispatch(setSelectedUser(user))
        
    }
    return (
        <>
            
                <div onClick={()=> selectedUserHandler(user)} className={`${selectedUser?._id === user?._id ? 'bg-gray-800':''} flex items-center gap-5 hover:bg-zinc-800 rounded-sm p-2 cursor-pointer`}>
                    <div className='avatar online'>
                        <div className='w-12 rounded-full'>
                            <img src={user?.profilePhoto} alt="user Profile" />
                        </div>
                    </div>
                    <div>
                        <div className='gap-2'>
                            <p>{user?.fullName}</p>
                        </div>
                    </div>
                </div>
                <div className='divider my-0 py-0'></div>
           
        </>
    )
}

export default OtherUser 