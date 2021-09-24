import Modal from 'react-modal'
import { useState } from 'react';
import Scorecarddisplay from './Scorecarddisplay';

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

export default function SearchGameReturn(props) {
  const [gameId, setGameId] = useState('')
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
    <div className='bg-white text-black'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        {props.games.map(game => {
          if (game.fields?.playerName.toLowerCase() === props.searchInput.toLowerCase()) {
            return (
              <div key={game?.id}>
                <button onClick={openModal} id={game.id} className='w-10/12 h-10/12 bg-white hover:bg-blue-400 shadow-2xl border-black gap-1 mb-5 mx-5 border-2 rounded-xl text-sm'>
                  <div id={game.id} className=''>
                    <h3 id={game.id}>{game.fields.playerName}</h3>
                    <h4 id={game.id}>{game.fields.courseName}</h4>
                    <div id={game.id}>{game.fields.date}</div>
                  </div>
                </button>
              </div>
            )
          } else {
            return null
          }
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
    </div>
  )

}







