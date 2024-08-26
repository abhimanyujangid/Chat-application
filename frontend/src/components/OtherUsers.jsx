import React from 'react'
import OtherUser from './OtherUser'
import UseGetOtherUsers from '../hooks/UseGetOtherUsers'
import { useSelector } from 'react-redux';

const OtherUsers = () => {
    //Coustom hook for create get other user
    UseGetOtherUsers();
    const {otherUser}  = useSelector(store=>store.user);
    //Early return in react
    if (!otherUser) {
        return;
    }
    return (
        <div className='overflow-auto flex-1'>
            {otherUser?.map((user)=>{
                return(
                    <OtherUser key={user._id} user={user} />
                )
            })}
        </div>
    )
}
   
export default OtherUsers