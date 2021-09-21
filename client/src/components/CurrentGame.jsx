import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const airTableKey = process.env.REACT_APP_AIRTABLE_KEY;
const airTableBase = process.env.REACT_APP_AIRTABLE_BASE;
const URL = `https://api.airtable.com/v0/${airTableBase}/golf`

const config = {
  headers: {
    Authorization: `Bearer ${airTableKey}`
  }
}

export default function CurrentGame() {
  const { id } = useParams();
  const [game, setGame] = useState([])

  useEffect(() => {
    const fetchGame = async () => {
      const res = await axios.get(`${URL}/${id}`, config);
      setGame(res.data);
    }
    fetchGame()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className='flex flex-col text-lg m-10 bg-green-200 border-black border-4 rounded-lg shadow-2xl'>
      <h1>{game.fields?.playerName}</h1>
      <h1>{game.fields?.courseName}</h1>
      <h1>{game.fields?.date}</h1>
      <h1>Played with: {game.fields?.otherPlayers}</h1>
      <h1>Course par: {game.fields?.coursePar}</h1>
      <h1> {game.fields?.playerName}'s score: {game.fields?.total}</h1>
    </div>
  )
}
