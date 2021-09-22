import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import { useState } from 'react'
import HomepagePopup from './HomepagePopup'
import Newround from './Newround'

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

export default function Homepage() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {

  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <div>
      <div className="flex flex-col justify-start p-16 gap-6 items-center h-screen bg-golf-course bg-cover">
        <img src="https://imgur.com/Muw1Drk.png" className='w-52 h-auto' />
        <Link to='/newround'><button className="btn glass text-white text-xl w-52 h-20">New Round</button></Link>
        <Link to='/gamefeed'><button className="btn glass text-white text-xl w-52 h-20">Game Data</button></Link>
      </div>
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Newround />
        </Modal>
      </div>
    </div>
  )
}
