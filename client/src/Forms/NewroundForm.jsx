export default function NewroundForm(props) {
  return (
    <form onSubmit={props.handleSubmit} className="flex flex-col flex-nowrap items-center text-lg bg-black">
      <div className='flex items-center bg-green-600  rounded-t-lg border-green-500 mt-10 w-50'>
        <label className=' w-20 text-right p-4 mr-8 text-green-200'>Course Name:</label>
        <input
          className="flex-1 p-4 pl-0 bg-transparent placeholder-green-300 outline-none text-white overflow-ellipsis overflow-hidden"
          type='text'
          value={props.courseName}
          onChange={(e) => props.setCourseName(e.target.value)} />
      </div>
      <div className='flex items-center bg-green-600 border-green-500 m-0'>
        <label className='w-20 text-right p-4 mr-8 text-green-200'>Course Par:</label>
        <input
          className="flex-1 p-4 pl-0 bg-transparent placeholder-green-300 outline-none text-white overflow-ellipsis overflow-hidden"
          type='text'
          value={props.coursePar}
          onChange={(e) => props.setCoursePar(e.target.value)} />
      </div>
      <div className='flex items-center bg-green-600 border-green-500 m-0'>
        <label className='w-20 text-right p-4 mr-8 text-green-200'>Handicap:</label>
        <input
          className="flex-1 p-4 pl-0 bg-transparent placeholder-green-300 outline-none text-white overflow-ellipsis overflow-hidden"
          type='text'
          value={props.handicap}
          onChange={(e) => props.setHandicap(e.target.value)} />
      </div>
      <div className='flex items-center bg-green-600  border-green-500 m-0'>
        <label className='w-20 text-right p-4 mr-8 text-green-200'>Player Name:</label>
        <input
          className="flex-1 p-4 pl-0 bg-transparent placeholder-green-300 outline-none text-white overflow-ellipsis overflow-hidden"
          type='text'
          value={props.playerName}
          onChange={(e) => props.setPlayerName(e.target.value)} />
      </div>
      <div className="flex items-center bg-green-600  border-green-500 m-0">
        <label className="w-20 text-right p-4 mr-8 text-green-200">Other Players:</label>
        <input
          className="flex-1 p-4 pl-0 bg-transparent placeholder-green-300 outline-none text-white overflow-ellipsis overflow-hidden"
          type='text'
          value={props.otherPlayers}
          onChange={(e) => props.setOtherPlayers(e.target.value)} />
      </div>
      <div className="flex items-center bg-green-600  rounded-b-lg border-green-500 mb-10">
        <label className="w-20 text-right p-4 mr-8 text-green-200">Date:</label>
        <input
          className="flex-1 p-4 pl-0 bg-transparent placeholder-green-300 outline-none text-white overflow-ellipsis overflow-hidden"
          type='text'
          value={props.date}
          onChange={(e) => props.setDate(e.target.value)} />
      </div>
      <button className='text-white w-52 h-12 bg-green-600 rounded-lg'>Start Round</button>
    </form >
  )
}
