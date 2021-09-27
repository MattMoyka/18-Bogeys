import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import { useState } from 'react'




export default function Homepage() {

  return (
    <div>
      <div className="flex flex-col justify-start p-16 gap-6 items-center h-screen bg-golf-course md:bg-desktop-golf-course bg-cover">
        <img src="https://imgur.com/Muw1Drk.png" className='w-52 h-auto' alt='18 bogeys golf ball logo' />
        <Link to='/newround'><button className="btn glass text-white text-xl w-52 h-20">New Round</button></Link>
        <Link to='/gamefeed'><button className="btn glass text-white text-xl w-52 h-20">Game Data</button></Link>
      </div>

    </div>
  )
}
