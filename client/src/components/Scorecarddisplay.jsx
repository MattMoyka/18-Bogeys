import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ScorecardModal from './ScorecardModal'

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
  const [passwordInput, setPasswordInput] = useState('')

  useEffect(() => {
    const fetchGame = async () => {
      const res = await axios.get(`${URL}/${props?.gameId}`, config)
      setGame(res?.data);
      console.log('is this the object' + res.data)
    }
    fetchGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);





  return (
    <div>
      <div className='mb-3 text-3xl font-bold'>Golf Round Data</div>
      <div className='flex gap-2'>

        <div className="flex flex-col items-center gap-1 text-lg rounded-xl py-5">
          <div className='flex gap-2 bg-blue-100 p-5 rounded-xl shadow-2xl mb-5'>
            <div>
              <div className='p-1 font-semibold '>Player Name:</div>
              <div className='p-1 font-semibold '>CourseName:</div>
              <div className='p-1 font-semibold '>Date Played:</div>
              {(game.fields?.otherPlayers !== undefined) ? <h1 className='p-1 font-semibold '>Played with:</h1> : null}
            </div>
            <div>
              <h1 className='p-1'>{game.fields?.playerName}</h1>
              <h1 className='p-1'>{game.fields?.courseName}</h1>
              <h1 className='p-1'>{game.fields?.date}</h1>
              {(game.fields?.otherPlayers !== undefined) ? <h1>Played with: {game.fields?.otherPlayers}</h1> : null}
            </div>
          </div>
          <div className='flex gap-2 bg-blue-100 p-5 rounded-xl shadow-2xl'>
            <div>
              <div className='p-1 font-semibold '>Course par: </div>
              <div className='p-1 font-semibold '>Front Nine par: </div>
              <div className='p-1 font-semibold '>Back Nine par: </div>
              <div className='p-1 font-semibold '> {game.fields?.playerName}'s score: </div>
            </div>
            <div>
              <h1 className='p-1'>{game.fields?.coursePar}</h1>
              <h1 className='p-1'>{game.fields?.fninePar}</h1>
              <h1 className='p-1'>{game.fields?.bninePar}</h1>
              <h1 className='p-1'>{game.fields?.total}</h1>
            </div>
          </div>
          <input type='password' className='input input-success input-bordered w-10/12  mt-5 text-xxl text-center' placeholder='Enter password here to edit' onChange={e => setPasswordInput(e.target.value)} />
          {(game.fields?.password === passwordInput) ?
            <Link to={`gamefeed/${game?.id}/edit`} className='btn btn-secondary btn-active' role="button" aria-pressed="true">Edit Game</Link> : <div></div>}

        </div>
        <ScorecardModal gameId={props?.gameId} />
      </div>
    </div>
  )
}
