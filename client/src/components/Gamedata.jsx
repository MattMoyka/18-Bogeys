import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const airTableKey = process.env.REACT_APP_AIRTABLE_KEY;
const airTableBase = process.env.REACT_APP_AIRTABLE_BASE;
const URL = `https://api.airtable.com/v0/${airTableBase}/golf`

const config = {
  headers: {
    Authorization: `Bearer ${airTableKey}`
  }
}

export default function Gamedata() {
  const [games, setGames] = useState([])

  useEffect(() => {
    const fetchGames = async () => {
      const res = await axios.get(URL, config);
      setGames(res.data.records);
    }
    fetchGames()
  }, [])

  return (
    <div>
      {games.map(game => {
        return <Link to={`/gamefeed/${game.id}`} key={game.id}>
          <div className='flex flex-col justify-evenly bg-gray-500 hover:bg-green-900 shadow-2xl border-black gap-1 m-5 rounded-xl text-sm'>
            <h3>{game.fields.playerName}</h3>
            <h4>{game.fields.courseName}</h4>
            <p>Click to view details</p>
          </div>
        </Link>
      })}
    </div >
  )
}
