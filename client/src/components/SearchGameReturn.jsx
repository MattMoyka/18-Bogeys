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
    width: 'auto'
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
      <div className='flex justify-between mx-5 mb-10'>
        <div className='text-2xl font-bold'>Search Results</div>
        <button onClick={props.closeModal} className='flex justify-center items-center p-3 bg-black text-white h-9 rounded-lg'>X</button>
      </div>
      <div className='flex flex-wrap gap-5 '>
        {props.games.map(game => {
          if (game.fields?.playerName.toLowerCase() === props.searchInput.toLowerCase()) {
            return (
              <div key={game?.id}>
                <button onClick={openModal} id={game.id} className='flex flex-row w-auto h-10/12 p-5 bg-blue-100 hover:bg-green-500 hover:text-white shadow-2xl border-black gap-1 mb-5 mx-5 border-2 rounded-xl text-sm'>
                  <div>
                    <div id={game.id} className='p-1 font-semibold '>Player Name:</div>
                    <div id={game.id} className='p-1 font-semibold '>CourseName:</div>
                    <div id={game.id} className='p-1 font-semibold '>Date Played:</div>
                  </div>
                  <div id={game.id} className=''>
                    <h3 id={game.id} className='p-1'>{game.fields.playerName}</h3>
                    <h4 id={game.id} className='p-1'>{game.fields.courseName}</h4>
                    <div id={game.id} className='p-1'>{game.fields.date}</div>
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







