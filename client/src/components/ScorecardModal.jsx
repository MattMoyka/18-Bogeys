import { useState, useEffect } from "react";
import axios from "axios";
import ScorecardFormModal from "../Forms/ScorecardFormModal";

const airTableKey = process.env.REACT_APP_AIRTABLE_KEY;
const airTableBase = process.env.REACT_APP_AIRTABLE_BASE;
const URL = `https://api.airtable.com/v0/${airTableBase}/golf`

const config = {
  headers: {
    Authorization: `Bearer ${airTableKey}`
  }
}

export default function ScorecardModal(props) {
  const [one, setOne] = useState('')
  const [two, setTwo] = useState('')
  const [three, setThree] = useState('')
  const [four, setFour] = useState('')
  const [five, setFive] = useState('')
  const [six, setSix] = useState('')
  const [seven, setSeven] = useState('')
  const [eight, setEight] = useState('')
  const [nine, setNine] = useState('')
  const [ten, setTen] = useState('')
  const [eleven, setEleven] = useState('')
  const [twelve, setTwelve] = useState('')
  const [thirteen, setThirteen] = useState('')
  const [fourteen, setFourteen] = useState('')
  const [fifteen, setFifteen] = useState('')
  const [sixteen, setSixteen] = useState('')
  const [seventeen, setSeventeen] = useState('')
  const [eighteen, setEighteen] = useState('')
  const [o, setO] = useState('')
  const [i, setI] = useState('')


  useEffect(() => {
    const fetchGame = async () => {
      const res = await axios.get(`${URL}/${props?.gameId}`, config);
      const { fields } = res.data;
      setOne(fields.one);
      setTwo(fields.two);
      setThree(fields.three);
      setFour(fields.four);
      setFive(fields.five);
      setSix(fields.six);
      setSeven(fields.seven);
      setEight(fields.eight);
      setNine(fields.nine);
      setTen(fields.ten);
      setEleven(fields.eleven);
      setTwelve(fields.twelve);
      setThirteen(fields.thirteen);
      setFourteen(fields.fourteen);
      setFifteen(fields.fifteen);
      setSixteen(fields.sixteen);
      setSeventeen(fields.seventeen);
      setEighteen(fields.eighteen)
      setO(fields?.fnineTotal)
      setI(fields?.bnineTotal)

    }
    fetchGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen
    }
    const res1 = await axios.patch(`${URL}/${props?.gameId}`, { fields }, config);
    console.log(res1)
  }


  return (
    <div className=' flex flex-col items-center pt-5 px-4 my-0'>

      <ScorecardFormModal
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
        ten={ten}
        setTen={setTen}
        eleven={eleven}
        setEleven={setEleven}
        twelve={twelve}
        setTwelve={setTwelve}
        thirteen={thirteen}
        setThirteen={setThirteen}
        fourteen={fourteen}
        setFourteen={setFourteen}
        fifteen={fifteen}
        setFifteen={setFifteen}
        sixteen={sixteen}
        setSixteen={setSixteen}
        seventeen={seventeen}
        setSeventeen={setSeventeen}
        eighteen={eighteen}
        setEighteen={setEighteen}
        o={o}
        i={i}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}