import React from 'react'
import { selectedUser } from '../redux/userSlice';

const OtherUser = (props) => {
    const user = props.user;
    //Create a function 
    const selectedUserHandler = ()=>{

    }
    return (
        <>
            <div>
                <div onClick={selectedUserHandler} className='flex items-center gap-5 hover:bg-zinc-800 rounded-sm p-2 cursor-pointer'>
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
            </div>
        </>
    )
}

export default OtherUser 