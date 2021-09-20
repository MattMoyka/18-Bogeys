import { useState, useEffect } from 'react'
const airTableKey = process.env.REACT_APP_AIRTABLE_KEY;
const airTableBase = process.env.REACT_APP_AIRTABLE_BASE;
const URL = `https://api.airtable.com/v0/${airTableBase}/golf`

const config = {
  headers: {
    Authorization: `Bearer ${airTableKey}`
  }
}


export default function ScorecardForm() {
  const [game, setGame] = useState('')

  // useEffect(() => {
  //   const fetchGame = async () => {
  //     const res = await axios.get(`${URL}/${id}`, config)
  //     setGame(res.data);
  //   }
  //   fetchGame();
  // }, []);

  return (
    <div>
      hello
    </div>
  )
}
