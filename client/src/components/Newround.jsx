import NewroundForm from '../Forms/NewroundForm'
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


const airTableKey = process.env.REACT_APP_AIRTABLE_KEY;
const airTableBase = process.env.REACT_APP_AIRTABLE_BASE;
const URL = `https://api.airtable.com/v0/${airTableBase}/golf`

const config = {
  headers: {
    Authorization: `Bearer ${airTableKey}`
  }
}

export default function Newround() {
  const [courseName, setCourseName] = useState('')
  const [coursePar, setCoursePar] = useState('')
  const [handicap, setHandicap] = useState('')
  const [playerName, setPlayerName] = useState('')
  const [otherPlayers, setOtherPlayers] = useState('')
  const [date, setDate] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory();



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (courseName !== '' && coursePar !== '' && playerName !== '' && date !== '' && password !== '') {
      const fields = {
        courseName, coursePar, handicap, playerName, otherPlayers, date, password
      }
      const res = await axios.post(URL, { fields }, config);
      history?.push(`/newround/${res.data.id}/scorecard`)
    } else { alert('please fill out required fields') }

  }

  return (
    <div className="h-screen flex flex-col justify-center">
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
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}
