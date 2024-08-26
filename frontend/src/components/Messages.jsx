import React from 'react'
import SingleMessage from './SingleMessage'
import UseGetMessages from '../hooks/UseGetMessages'
import { useSelector } from 'react-redux';

const Messages = () => {
  UseGetMessages();
  const {messages} = useSelector(store=>store.message)
  if (!messages) {
    return
  }
  return (
    <div className='px-4 flex-1 overflow-auto'>
      {
        messages?.map((message)=>{
          return(
            <SingleMessage key ={message._id} message={message}/>
          
          )
        })
      }
        
     </div>
  )
}

export default Messages