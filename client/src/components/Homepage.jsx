import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <div className="flex flex-col justify-evenly items-center h-screen ">
      <Link to='/newround'><button className="focus:outline-none text-white text-xxl py-10 px-10 rounded-md bg-green-500 hover:bg-green-600 hover:shadow-lg">New Round</button></Link>
      <Link to='/gamefeed'><button className="focus:outline-none text-white text-xxl py-10 px-10 rounded-md bg-green-500 hover:bg-green-600 hover:shadow-lg">Game Data</button></Link>
    </div>
  )
}
