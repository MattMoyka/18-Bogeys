import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import CurrentGame from './CurrentGame'
import ScorecardForm from '../Forms/ScorecardForm'

const airTableKey = process.env.REACT_APP_AIRTABLE_KEY;
const airTableBase = process.env.REACT_APP_AIRTABLE_BASE;
const URL = `https://api.airtable.com/v0/${airTableBase}/golf`
const config = {
  headers: {
    Authorization: `Bearer ${airTableKey}`
  }
}



export default function Scorecarddisplay(props) {
  const [game, setGame] = useState('')
  const { id } = useParams()
  const [passwordInput, setPasswordInput] = useState('')

  useEffect(() => {
    const fetchGame = async () => {
      const res = await axios.get(`${URL}/${props?.gameId}`, config)
      setGame(res.data);
      console.log(res.data)
    }
    fetchGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(props)



  return (
    <div className="flex flex-col items-center gap-1 text-lg bg bg-gray-500 shadow-2xl rounded-xl m-10 py-5">
      <h1>{game.fields?.playerName}</h1>
      <h1>{game.fields?.courseName}</h1>
      <h1>{game.fields?.date}</h1>
      <h1>Played with: {game.fields?.otherPlayers}</h1>
      <h1>Course par: {game.fields?.coursePar}</h1>
      <h1> {game.fields?.playerName}'s score: {game.fields?.total}</h1>

      <input type='text' className='input input-success input-bordered w-10/12 mt-5 text-center' placeholder='Enter password here to edit' onChange={e => setPasswordInput(e.target.value)} />
      {(game.fields?.password === passwordInput) ?
        <Link to={`gamefeed/${game.id}/edit`} className='btn btn-accent btn-active' role="button" aria-pressed="true">Edit Game</Link> : <div></div>}

    </div>
  )
}
