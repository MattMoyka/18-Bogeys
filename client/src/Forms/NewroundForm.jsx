

export default function NewroundForm(props) {
  return (
    <form onSubmit={props.handleSubmit} className="flex flex-col flex-nowrap items-center text-lg  h-full bg-white">
      <div className='md:grid md:grid-cols-2 md:grid-rows-3 md:gap-5'>
        <div className='form-control'>
          <label className='label'>Course Name*:</label>
          <input
            className="input input-success input-bordered w-64 text-black"
            type='text'
            value={props.courseName}
            onChange={(e) => props.setCourseName(e.target.value)} />
        </div>
        <div className='form-control'>
          <label className='label'>Course Par*:</label>
          <div>
            <input
              className="input input-success input-bordered w-20 m-1"
              type='number'
              value={props.fninePar}
              placeholder='Front'
              onChange={(e) => props.setFninePar(e.target.value)} />
            <input
              className="input input-success input-bordered w-20 m-1"
              type='number'
              value={props.bninePar}
              placeholder='Back'
              onChange={(e) => props.setBninePar(e.target.value)} />
            <input
              className="input input-success input-bordered w-20 m-1"
              type='number'
              placeholder='Total'
              value={props.coursePar}
              onChange={(e) => props.setCoursePar(e.target.value)} />
          </div>
        </div>
        <div className='form-control'>
          <label className='label'>Handicap:</label>
          <input
            className="input input-success input-bordered w-64"
            type='number'
            value={props.handicap}
            onChange={(e) => props.setHandicap(e.target.value)} />
        </div>
        <div className='form-control'>
          <label className='label'>Player Name*:</label>
          <input
            className="input input-success input-bordered w-64"
            type='text'
            value={props.playerName}
            onChange={(e) => props.setPlayerName(e.target.value)} />

        </div>
        <div className="form-control">
          <label className="label">Other Players:</label>
          <input
            className="input input-success input-bordered w-64"
            type='text'
            value={props.otherPlayers}
            onChange={(e) => props.setOtherPlayers(e.target.value)} />
        </div>
        <div className="form-control">
          <label className="label">Date*:</label>
          <input
            className="input input-success input-bordered w-64"
            type='date'
            autoComplete='on'
            value={props.date}
            onChange={(e) => props.setDate(e.target.value)} />
        </div>
        <div className="form-control">
          <label className="label">Password*:</label>
          <input
            className="input input-success input-bordered w-64"
            type='text'
            value={props.password}
            onChange={(e) => props.setPassword(e.target.value)} />
        </div>
      </div>
      <p className='text-xs mt-3'>*Required Field</p>
      <button className='text-white w-64 h-12 bg-green-600 my-5 rounded-lg'>Start Round</button>
    </form >
  )
}
