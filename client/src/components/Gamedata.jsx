import axios from 'axios'
import { useState, useEffect } from 'react'

import Modal from 'react-modal'
import Scorecarddisplay from './Scorecarddisplay';
import SearchGames from './SearchGames';


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
    background: 'white',
    height: 'auto',
    width: '90%'
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

    <div className='bg-white pt-5 h-screen'>
      <SearchGames />
      <div className='grid grid-cols-2'>
        {games.map(game => {
          return (
            <div key={game?.id}>
              <button onClick={openModal} id={game.id} className='w-10/12 h-10/12 bg-white hover:bg-green-900 shadow-2xl border-black gap-1 mb-5 mx-5 border-2 rounded-xl text-sm'>
                <div id={game.id} className=''>
                  <h3 id={game.id}>{game.fields.playerName}</h3>
                  <h4 id={game.id}>{game.fields.courseName}</h4>
                  <div id={game.id}>{game.fields.date}</div>
                </div>
              </button>
            </div>
          )
        })}</div>
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
