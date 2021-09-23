

export default function NewroundForm(props) {
  return (
    <form onSubmit={props.handleSubmit} className="flex flex-col flex-nowrap items-center text-lg  h-screen bg-white">
      <div className='form-control'>
        <label className='label'>Course Name*:</label>
        <input
          className="input input-success input-bordered w-60"
          type='text'
          value={props.courseName}
          onChange={(e) => props.setCourseName(e.target.value)} />
      </div>
      <div className='form-control'>
        <label className='label'>Course Par*:</label>
        <input
          className="input input-success input-bordered w-60"
          type='text'
          value={props.coursePar}
          onChange={(e) => props.setCoursePar(e.target.value)} />
      </div>
      <div className='form-control'>
        <label className='label'>Handicap:</label>
        <input
          className="input input-success input-bordered w-60"
          type='text'
          value={props.handicap}
          onChange={(e) => props.setHandicap(e.target.value)} />
      </div>
      <div className='form-control'>
        <label className='label'>Player Name*:</label>
        <input
          className="input input-success input-bordered w-60"
          type='text'
          value={props.playerName}
          onChange={(e) => props.setPlayerName(e.target.value)} />
      </div>
      <div className="form-control">
        <label className="label">Other Players:</label>
        <input
          className="input input-success input-bordered w-60"
          type='text'
          value={props.otherPlayers}
          onChange={(e) => props.setOtherPlayers(e.target.value)} />
      </div>
      <div className="form-control">
        <label className="label">Date*:</label>
        <input
          className="input input-success input-bordered w-60"
          type='text'
          value={props.date}
          onChange={(e) => props.setDate(e.target.value)} />
      </div>
      <div className="form-control">
        <label className="label">Password*:</label>
        <input
          className="input input-success input-bordered w-60"
          type='text'
          value={props.password}
          onChange={(e) => props.setPassword(e.target.value)} />
      </div>
      <p className='text-xs mt-3'>*Required Field</p>
      <button className='text-white w-64 h-12 bg-green-600 my-5 rounded-lg'>Start Round</button>
    </form >
  )
}
