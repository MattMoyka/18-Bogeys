export default function DeletePrompt(props) {
  return (
    <div className='bg-white h-auto w-full flex flex-col justify-evenly items-center p-5 rounded-lg'>
      <h1 className='mb-5 text-xl'>Are you sure you want to delete?</h1>
      <div className='flex'>
        <button className='btn btn-warning btn-active mr-2 text-white' onClick={props.handleDelete}>Yes, I am sure</button>
        <button className='btn btn-warning btn-active mr-2 text-white' onClick={props.closeModal}>No, Nevermind</button>
      </div>
    </div>
  )
}
