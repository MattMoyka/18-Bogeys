import axios from "axios";
import { useParams, useHistory } from "react-router";

const airTableKey = process.env.REACT_APP_AIRTABLE_KEY;
const airTableBase = process.env.REACT_APP_AIRTABLE_BASE;
const URL = `https://api.airtable.com/v0/${airTableBase}/golf`

const config = {
  headers: {
    Authorization: `Bearer ${airTableKey}`
  }
}

export default function DeleteGame(props) {
  const { id } = useParams()
  const history = useHistory()

  console.log(id);
  async function handleDelete() {
    let res = await axios.delete(`${URL}/${id}`, config);
    history.push('/gamefeed')
  }
  return (
    <div>
      <button onClick={handleDelete}>Delete this round</button>
    </div>
  )
}
