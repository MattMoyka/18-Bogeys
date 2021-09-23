import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex flex-row justify-between bg-blue-400 rounded-b-lg w-full'>
      <nav className='flex flex-row text-sm py-5'>
        <Link to='/' className='btn btn-ghost'>18 Bogeys</Link>
        <Link to='/newround' className='px-3 btn btn-ghost'>Start a Round</Link>
        <Link to='/gamefeed' className='btn btn-ghost'>Game Data</Link>
      </nav>
    </div>
  )
}
