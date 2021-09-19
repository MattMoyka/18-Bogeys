import NewroundForm from '../Forms/NewroundForm'
import { useState } from 'react'
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom'


const airTableKey = process.env.REACT_APP_AIRTABLE_KEY;
const airTableBase = process.env.REACT_APP_AIRTABLE_BASE;
const URL = `https://api.airtable.com/v0/${airTableBase}/golf`

const config = {
  headers: {
    Authorization: `Bearer ${airTableKey}`
  }
}

export default function Newround(props) {
  const [courseName, setCourseName] = useState('')
  const [coursePar, setCoursePar] = useState('')
  const [handicap, setHandicap] = useState('')
  const [playerName, setPlayerName] = useState('')
  const [otherPlayers, setOtherPlayers] = useState('')
  const [date, setDate] = useState('')
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      courseName, coursePar, handicap, playerName, otherPlayers, date
    }
    const res = await axios.post(URL, { fields }, config);
    // <Link to={`/gamefeed/${game.id}/edit`} />
  }

  return (
    <div>
      <NewroundForm
        courseName={courseName}
        setCourseName={setCourseName}
        coursePar={coursePar}
        setCoursePar={setCoursePar}
        handicap={handicap}
        setHandicap={setHandicap}
        playerName={playerName}
        setPlayerName={setPlayerName}
        otherPlayers={otherPlayers}
        setOtherPlayers={setOtherPlayers}
        date={date}
        setDate={setDate}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}
