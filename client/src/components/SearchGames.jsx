import { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from 'react-modal'
import SearchGameReturn from './SearchGameReturn';

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
    height: '70%',
    width: '90%'
  },
};
Modal.setAppElement('#root');

export default function SearchGames() {
  const [games, setGames] = useState([])
  const [modalIsOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('')

  function openModal(e) {
    setIsOpen(true);

  }
  function afterOpenModal() {

  }

  function closeModal() {
    setIsOpen(false)
  }


  useEffect(() => {
    const fetchGames = async () => {
      const res = await axios.get(URL, config);
      setGames(res.data.records);
    }
    fetchGames()
  }, [])






  return (
    <div>
      <div className='flex flex-row mb-5 justify-center gap-3'>
        <input className=' rounded-lg shadow-2xl text-black px-3' placeholder='Search Player By Name' onChange={e => setSearchInput(e.target.value)}></input>
        <button className='btn btn-secondary' onClick={openModal}>Search</button>
      </div>
      <div>
        <div className='mb-5 text-2xl font-bold'>Select Game To View</div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <SearchGameReturn games={games} openModal={openModal} searchInput={searchInput} />

      </Modal>
    </div>
  )
}
