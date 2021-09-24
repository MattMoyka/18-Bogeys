import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex flex-row justify-center bg-black rounded-b-lg w-full'>
      <nav className='flex flex-row justify-between py-5 gap-2'>
        <Link to='/' className='btn btn-ghost btn-sm rounded-btn text-white'>18 Bogeys</Link>
        <Link to='/newround' className='px-3 btn btn-ghost btn-sm rounded-btn text-white'>Start a Round</Link>
        <Link to='/gamefeed' className='btn btn-ghost btn-sm rounded-btn text-white'>Game Data</Link>
      </nav>
    </div>
  )
}
