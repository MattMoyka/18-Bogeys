import axios from "axios";
import { useState } from "react";
import { useParams, useHistory } from "react-router";
import DeletePrompt from "./DeletePrompt";
import Modal from 'react-modal'

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
    height: 'auto'
  },
};
Modal.setAppElement('#root');

export default function DeleteGame(props) {
  const { id } = useParams()
  const history = useHistory()
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {

  }

  function closeModal() {
    setIsOpen(false)
  }

  console.log(id);
  async function handleDelete() {

    let res = await axios.delete(`${URL}/${id}`, config);
    history.push('/gamefeed')
  }


  return (
    <div>
      <button onClick={openModal} className='mt-10 btn btn-warning text-white btn-circle text-center text-xl font-bold'>X</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <DeletePrompt handleDelete={handleDelete} closeModal={closeModal} />
      </Modal>
    </div>
  )
}
