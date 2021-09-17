import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex flex-row justify-between px-12 bg-green-600'>
      <div className='flex items-center'>
        <Link to='/'>18 Bogeys</Link>
      </div>
      <nav className='flex flex-col text-justify text-xl'>
        <Link to='/'>Home</Link>
        <Link to='/newround'>Start a Round</Link>
        <Link to='/gamefeed'>Game Data</Link>
      </nav>
    </div>
  )
}