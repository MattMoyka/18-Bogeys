import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

const airTableKey = process.env.REACT_APP_AIRTABLE_KEY;
const airTableBase = process.env.REACT_APP_AIRTABLE_BASE;
const URL = `https://api.airtable.com/v0/${airTableBase}/golf`
console.log(URL);
const config = {
  headers: {
    Authorization: `Bearer ${airTableKey}`
  }
}



export default function Scorecarddisplay() {
  const [game, setGame] = useState('')
  const { id } = useParams()

  useEffect(() => {
    const fetchGame = async () => {
      const res = await axios.get(`${URL}/${id}`, config)
      setGame(res.data);
    }
    fetchGame();
  }, []);


  return (
    <div>
      <h1>{game.fields?.playerName}</h1>
      <h1>{game.fields?.courseName}</h1>
      <h1>{game.fields?.date}</h1>
      <h1>Played with: {game.fields?.otherPlayers}</h1>
      <h1>Course par: {game.fields?.coursePar}</h1>
      <h1> {game.fields?.playerName}'s par: {game.fields?.total}</h1>
      <Link to={`${game.id}/edit`}><button>Edit Game</button></Link>
    </div>
  )
}