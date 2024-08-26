import React from 'react'
import SendInput from './SendInput'
import Messages from './Messages'
import { useSelector } from 'react-redux'

const MessageContainer = () => {
    const {selectedUser} = useSelector(store => store.user)
    return (
        <div className='md:min-w-[480px] flex flex-col'>
            <div className='flex items-center gap-5 p-2 cursor-pointer bg-gray-700 text-white px-4 py-2'>
                <div className='avatar online'>
                    <div className='w-12 rounded-full'>
                        <img src={selectedUser?.profilePhoto} alt="user Profile" />
                    </div>
                </div>
                <div>
                    <div className='gap-2'>
                        <p>{selectedUser?.fullName}</p>
                    </div>
                </div>
            </div>
            <Messages/>
            <SendInput/>
        </div>
    )
}

export default MessageContainer