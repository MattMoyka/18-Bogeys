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
    height: '80%',
    width: 'auto',
    radius: '10px'
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

    <div className='bg-white pt-5 h-full'>
      <SearchGames />
      <div className='grid grid-cols-1 md:grid-cols-3'>
        {games.map(game => {
          return (
            <div key={game?.id} className='flex justify-center p-3'>
              <button onClick={openModal} id={game.id} className=' flex flex-row w-auto h-10/12 p-5 bg-blue-100 hover:bg-green-500 hover:text-white shadow-2xl border-black gap-1 mb-5 mx-5 border-2 rounded-xl text-sm'>
                <div>
                  <div className='p-1 font-semibold '>Player Name:</div>
                  <div className='p-1 font-semibold '>CourseName:</div>
                  <div className='p-1 font-semibold '>Date Played:</div>
                </div>
                <div>
                  <div id={game.id}>
                    <h3 id={game.id} className='p-1'>{game.fields.playerName}</h3>
                    <h4 id={game.id} className='p-1'>{game.fields.courseName}</h4>
                    <div id={game.id} className='p-1'>{game.fields.date}</div>
                  </div>
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
