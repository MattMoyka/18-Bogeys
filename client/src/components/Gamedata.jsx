import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import Scorecarddisplay from './Scorecarddisplay';

const airTableKey = process.env.REACT_APP_AIRTABLE_KEY;
const airTableBase = process.env.REACT_APP_AIRTABLE_BASE;
const URL = `https://api.airtable.com/v0/${airTableBase}/golf`

const config = {
  headers: {
    Authorization: `Bearer ${airTableKey}`
  }
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'black',
    height: '70%'
  },
};
Modal.setAppElement('#root');

export default function Gamedata() {
  const [games, setGames] = useState([])
  const [gameId, setGameId] = useState('')

  useEffect(() => {
    const fetchGames = async () => {
      const res = await axios.get(URL, config);
      setGames(res.data.records);
    }
    fetchGames()
  }, [])

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(e) {
    setGameId(e.target.id);
    setIsOpen(true);

  }
  function afterOpenModal() {

  }

  function closeModal() {
    setIsOpen(false)
  }



  return (
    // <div>
    //   {games.map(game => {
    //     return <Link to={`/gamefeed/${game.id}`} key={game.id}>
    //       <div className='flex flex-col justify-evenly bg-gray-500 hover:bg-green-900 shadow-2xl border-black gap-1 m-5 rounded-xl text-sm'>
    //         <h3>{game.fields.playerName}</h3>
    //         <h4>{game.fields.courseName}</h4>
    //         <p>Click to view details</p>
    //       </div>
    //     </Link>
    //   })}
    // </div >
    <div className='bg-gradient-to-tr from-blue-500  via-blue-300 via-white'>
      {games.map(game => {
        return (
          <div className='flex flex-col justify-evenly bg-gray-500 hover:bg-green-900 shadow-2xl border-black gap-1 m-5 rounded-xl text-sm'>
            <h3>{game.fields.playerName}</h3>
            <h4>{game.fields.courseName}</h4>
            <button onClick={openModal} id={game.id}>Click to view details</button>
          </div>
        )
      })}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <Scorecarddisplay gameId={gameId} />
      </Modal>
    </div >
  )
}
