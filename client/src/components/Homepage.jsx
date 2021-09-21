import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <div className="flex flex-col justify-start p-16 gap-6 items-center h-screen bg-golf-course bg-cover">
      <img src="https://imgur.com/Muw1Drk.png" className='w-52 h-auto' />
      <Link to='/newround'><button className="btn glass text-white text-xl w-52 h-20">New Round</button></Link>
      <Link to='/gamefeed'><button className="btn glass text-white text-xl w-52 h-20">Game Data</button></Link>
    </div>)
}
