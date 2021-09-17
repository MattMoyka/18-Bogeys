const airTableBase = process.env.REACT_APP_AIRTABLE_KEY;
const airTableKey = process.env.REACT_APP_AIRTABLE_BASE;
const URL = `https://api.airtable.com/v0/${airTableBase}/golf`

const config = {
  headers: {
    Authorization: `Bearer ${airTableKey}`
  }
}

export default function Gamedata() {
  return (
    <div>
      Gamedata
    </div>
  )
}
