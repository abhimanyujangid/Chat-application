import React from 'react'
import SingleMessage from './SingleMessage'
import UseGetMessages from '../hooks/UseGetMessages'

const Messages = () => {
  UseGetMessages();
  return (
    <div className='px-4 flex-1 overflow-auto'>
        <SingleMessage/>
        <SingleMessage/>
        <SingleMessage/>
        <SingleMessage/>
        <SingleMessage/>
        <SingleMessage/>
        <SingleMessage/>
        <SingleMessage/>
        <SingleMessage/>
        <SingleMessage/>
        <SingleMessage/>
        <SingleMessage/>
        <SingleMessage/>
     </div>
  )
}

export default Messages