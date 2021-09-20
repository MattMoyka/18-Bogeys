import ScorecardForm from "../Forms/ScorecardForm"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { axios } from 'axios'

const airTableKey = process.env.REACT_APP_AIRTABLE_KEY;
const airTableBase = process.env.REACT_APP_AIRTABLE_BASE;
const URL = `https://api.airtable.com/v0/${airTableBase}/golf`

const config = {
  headers: {
    Authorization: `Bearer ${airTableKey}`
  }
}
export default function Scorecard() {
  const [one, setOne] = useState('')
  const [two, setTwo] = useState('')
  const [three, setThree] = useState('')
  const [four, setFour] = useState('')
  const [five, setFive] = useState('')
  const [six, setSix] = useState('')
  const [seven, setSeven] = useState('')
  const [eight, setEight] = useState('')
  const [nine, setNine] = useState('')
  const { id } = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      one, two, three, four, five, six, seven, eight, nine
    }
    console.log(`${URL}/${id}`)
    console.log(fields)
    const res = await axios.patch(`${URL}/${id}`, { fields }, config);
  }

  return (
    <div>
      <ScorecardForm
        one={one}
        setOne={setOne}
        two={two}
        setTwo={setTwo}
        three={three}
        setThree={setThree}
        four={four}
        setFour={setFour}
        five={five}
        setFive={setFive}
        six={six}
        setSix={setSix}
        seven={seven}
        setSeven={setSeven}
        eight={eight}
        setEight={setEight}
        nine={nine}
        setNine={setNine}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}
