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

export default function CurrentGame(props) {
  const { id } = useParams();
  const [game, setGame] = useState([])

  useEffect(() => {
    const fetchGame = async () => {
      const res = await axios.get(`${URL}/${id}`, config);
      setGame(res.data);
    }
    fetchGame()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.toggle])


  return (
    <div>
      <div className='mb-3 text-3xl font-bold'>Golf Round Data</div>
      <div className='flex flex-col md:flex-row md:justify-center md:gap-10 md:items-start md:w-auto md:p-3 p-3 text-left text-lg mb-10 bg-blue-100 border-black border-2 rounded-lg shadow-2xl w-11/12'>

        <div className='flex gap-2'>
          <div>
            <h1 className='font-bold pt-1'>Player Name:</h1>
            <h1 className='font-bold pt-1'>Course Name:</h1>
            <h1 className='font-bold pt-1'>Date:</h1>
            {(game.fields?.otherPlayers !== undefined) ? <h1 className='font-bold pt-1'>Played with:</h1> : null}
          </div>
          <div>
            <h1 className='pt-1'>{game.fields?.playerName}</h1>
            <h1 className='pt-1'>{game.fields?.courseName}</h1>
            <h1 className='pt-1'>{game.fields?.date}</h1>
            {(game.fields?.otherPlayers !== undefined) ? <h1 className='pt-1'>{game.fields?.otherPlayers}</h1> : null}
          </div>
        </div>
        <div className='flex gap-2'>
          <div>
            <h1 className='font-bold pt-1'>Course Par:</h1>
            <h1 className='font-bold pt-1'>Front Nine Par:</h1>
            <h1 className='font-bold pt-1'>Back Nine Par:</h1>
            <h1 className='font-bold pt-1'>{game.fields?.playerName}'s score:</h1>
          </div>
          <div>
            <h1 className='pt-1'>{game.fields?.coursePar}</h1>
            <h1 className='pt-1'>{game.fields?.fninePar}</h1>
            <h1 className='pt-1'>{game.fields?.bninePar}</h1>
            <h1 className='pt-1'>{game.fields?.total}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
